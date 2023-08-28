import { Add, Remove, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import "../index.css";
import {
  clearCart,
  removeFromCart,
  updateProductQuantity,
} from "../redux/cartRedux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import emptyCart from "../assets/cart-empty.png";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = ({ handleNext }) => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripeToken, cart.total, history]);

  const handleQuantity = (type, productId) => {
    const updatedQuantity = type === "inc" ? 1 : -1;
    dispatch(updateProductQuantity({ productId, quantity: updatedQuantity }));
  };
  const handleRemoveFromCart = (productId) => {
    const productToRemove = cart?.products.find(
      (product) => product._id === productId
    );
    if (productToRemove) {
      dispatch(removeFromCart(productToRemove));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Your are shipping {cart.products.length}</Title>
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
            <TopText>
              Shopping Bag(
              {cart?.products?.length})
            </TopText>
            <Link to="/wishList">
              <TopText>Your Wishlist ({cart?.favorite?.length})</TopText>
            </Link>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.length > 0 ? (
              <InfoWrapper>
                {cart.products.map((product) => (
                  <Product>
                    <DeleteButton
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      <Delete className="icon" />
                    </DeleteButton>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}{" "}
                          <b style={{ fontSize: "20px" }}>
                            x {product.quantity}
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
                              product.quantity > 1
                                ? handleQuantity("dec", product._id)
                                : console.log("can zero")
                            }
                          />
                        </QuantityActionButton>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <QuantityActionButton>
                          <Add
                            onClick={() => handleQuantity("inc", product._id)}
                          />
                        </QuantityActionButton>
                      </ProductAmountContainer>
                      <ProductPrice>
                        ৳ {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                ))}
                <br />
                <Hr />
                {cart.products.length ? (
                  <ClearButton onClick={handleClearCart}>
                    Clear Cart
                  </ClearButton>
                ) : (
                  ""
                )}
                <br />
              </InfoWrapper>
            ) : (
              <EmptyCart>
                <EmptyCartImage src={emptyCart} />
              </EmptyCart>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>৳ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>৳ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>৳ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>৳ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is ৳ ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
            </StripeCheckout> */}
            {cart.products.length ? (
              <Button onClick={handleNext}>PROCEED NOW</Button>
            ) : (
              <Button style={{ backgroundColor: "gray" }}>PROCEED NOW</Button>
            )}
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

// styled components

const Container = styled.div``;

const Wrapper = styled.div`
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
  ${mobile({ justifyContent: "center" })}
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
  })}
`;

const InfoWrapper = styled.div`
  flex: 3;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  margin-bottom:20px;
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
const ClearButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 12px 0px 12px 30px;
  &:hover {
    background-color: #cc0000;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  ${mobile({ marginTop: "20px" })}
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
