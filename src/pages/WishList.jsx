import { Add, Delete, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import {
  clearFavorite,
  removeFromCart,
  updateFavQuantity,
} from "../redux/cartRedux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import emptyCart from "../assets/cart-empty.png";
import "../index.css";
const WishList = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearFavorite());
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
      dispatch(removeFromCart(productToRemove));
    }
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
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
                        <b>Product:</b> {product.title}{" "}
                        <b style={{ fontSize: "20px" }}>
                          x {product.favQuantity}
                        </b>
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
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
                      $ {product.price * product.favQuantity}
                    </ProductPrice>
                    <AddToCartButton>Add To Cart</AddToCartButton>
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
      <Footer />
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
  ${mobile({ padding: "10px" })}
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
  align-items: center;
  ${mobile({ flexDirection: "column" })}
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
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;
const EmptyCartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  border: 1.5px solid teal;
  transition: ease 0.5s;
  &:hover {
    background-color: transparent;
    color: teal;
  }
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
`;
