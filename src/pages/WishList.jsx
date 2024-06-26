import { Add, Delete, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import Swal from "sweetalert2";
import {
  addProduct,
  clearFavorite,
  removeFromWishList,
  updateFavQuantity,
} from "../redux/cartRedux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import emptyCart from "../assets/cart-empty.png";
import "../index.css";
import { toast } from "react-hot-toast";
const WishList = () => {
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "teal",
      cancelButtonColor: "teal",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearFavorite());
        Swal.fire({
          title: "Deleted!",
          text: "Your Order has been deleted.",
          icon: "success",
          confirmButtonColor: "teal",
        });
      }
    });
  };

  const handleQuantity = (type, productId) => {
    const updatedQuantity = type === "inc" ? 1 : -1;
    dispatch(updateFavQuantity({ productId, quantity: updatedQuantity }));
  };
  const handleRemoveFromCart = (productId) => {
    const productToRemove = cart?.favorite.find(
      (product) => product._id === productId
    );
    if (productToRemove) {
      dispatch(removeFromWishList(productToRemove));
    }
  };
  const handleAddToCart = (Id, quantity) => {
    const item = cart?.favorite.find((product) => product._id === Id);
    try {
      dispatch(
        addProduct({
          ...item,
          quantity: quantity,
          color: item?.color[0],
          size: item?.size[0],
          email: currentUser?.email,
        })
      );
      handleRemoveFromCart(Id);
      Swal.fire({
        title: "Added to cart successfully",
        icon: "success",
        confirmButtonColor: "teal",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! May be occurred ", error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Your are shipping {cart?.favorite?.length}</Title>
        <Top>
          <Link to="/" style={{ textDecoration: "none" }}>
            <TopButton
              style={{
                backgroundColor: "teal",
                color: "#ffffff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              CONTINUE SHOPPING
            </TopButton>
          </Link>
          <TopTexts>
            <TopText>Your Wishlist ({cart?.favorite?.length})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          {cart?.favorite?.length > 0 ? (
            <InfoWrapper>
              {cart?.favorite?.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <DeleteButton
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      <Delete className="icon" />
                    </DeleteButton>
                    <ImageWrapper>
                      <Image src={product.img} />
                    </ImageWrapper>
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                        <Br /> {product.title}{" "}
                        <b style={{ fontSize: "20px" }}>
                          x {product.favQuantity}
                        </b>
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id.slice(0, 20)}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <QuantityActionButton>
                        <Remove
                          onClick={() =>
                            product.favQuantity > 1
                              ? handleQuantity("dec", product._id)
                              : console.log("can zero")
                          }
                        />
                      </QuantityActionButton>
                      <ProductAmount>{product.favQuantity}</ProductAmount>
                      <QuantityActionButton>
                        <Add
                          onClick={() => handleQuantity("inc", product._id)}
                        />
                      </QuantityActionButton>
                    </ProductAmountContainer>
                    <ProductPrice>
                      ৳ {product.price * product.favQuantity}
                    </ProductPrice>
                    <AddToCartButton
                      onClick={() =>
                        handleAddToCart(product._id, product.favQuantity)
                      }
                    >
                      Add To Cart
                    </AddToCartButton>
                  </PriceDetail>
                </Product>
              ))}
              <br />
              <Hr />
              {cart.favorite.length ? (
                <ClearButton onClick={handleClearCart}>Clear Cart</ClearButton>
              ) : (
                ""
              )}
            </InfoWrapper>
          ) : (
            <EmptyCart>
              <EmptyCartImage src={emptyCart} />
            </EmptyCart>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default WishList;

// styled components

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  ${mobile({})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  a {
    text-decoration: none;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "-20px",
  })}
`;

const InfoWrapper = styled.div`
  flex: 3;
  ${mobile({ flex: 1 })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Br = styled.br`
  display: none;
  ${mobile({ display: "block" })}
`;
const ClearButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-left: 11px;
  margin-top: 12px;
  &:hover {
    background-color: #cc0000;
  }
  ${mobile({ marginLeft: "95px" })}
`;
const AddToCartButton = styled.button`
  border: 1px solid teal;
  background-color: teal;
  padding: 12px 22px;
  margin-top: 12px;
  border-radius: 11px;
  outline: none;
  cursor: pointer;
  color: #fff;
  transition: ease 0.3s;
  &:hover {
    background-color: transparent;
    color: teal;
  }
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;

  ${mobile({ width: "70%", paddingLeft: "55px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  ${mobile({ marginLeft: "-16px" })}
`;
const EmptyCartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ width: "80%" })}
`;
const EmptyCart = styled.div`
  max-width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid gray !important;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginBottom: "20px" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const QuantityActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 4px;
  border: none;
  border-radius: 100%;
  /* background-color: #3c3d3e; */
  color: #3c3d3e;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);
`;

const DeleteButton = styled.div`
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: -10px;
  margin-top: -10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);
  border: 1.5px solid teal;
  border-radius: 15px;
  transition: "background-color 0.3s";
  .icon {
    color: teal;
  }
  &:hover {
    background-color: teal;
    .icon {
      color: white;
    }
  }
  ${mobile({
    position: "relative",
    marginLeft: "90px",
    marginTop: "-10px",
    marginBottom: "-10px",
    marginRight: "-70px",
  })}
`;
