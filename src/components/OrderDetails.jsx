import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { districts } from "../data";
import { userRequest } from "../requestMethods";
import { clearCart } from "../redux/cartRedux";
import { useHistory } from "react-router-dom";

const OrderDetails = ({ handleNext, setIsLoading }) => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const { email, _id, phone, name } = currentUser || {};

  // State for user inputs
  const [username, setName] = useState(name || "");
  const [userEmail, setUserEmail] = useState(email || "");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState(phone || "");
  const [postcode, setPostCode] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [paymentType, setPaymentType] = useState("COD");

  // Dynamic delivery charge handling
  const deliveryCharge = city !== "Dhaka" ? 120 : 80;
  const totalAmount = cart.total + deliveryCharge;
  const history = useHistory();

  const showCard = (value) => {
    setShowCards(value === "card");
  };

  // Prepare order data
  // Prepare order data
  const getOrderData = () => {
    if (_id) {
      // Logged-in user
      return {
        user: _id, // Send user ID if logged in
        products: cart.products.map(
          ({ title, size, color, price, quantity }) => ({
            title,
            size,
            color,
            price,
            quantity,
          })
        ),
        total_amount: totalAmount,
        deliveryCharge,
        paymentStatus: "Pending",
        shippingStatus: "Processing",
      };
    } else {
      // Guest user
      return {
        guest: {
          name: username,
          phone: number,
          email: userEmail,
          address: { city, postcode, street: address },
        },
        products: cart.products.map(
          ({ title, size, color, price, quantity }) => ({
            title,
            size,
            color,
            price,
            quantity,
          })
        ),
        total_amount: totalAmount,
        deliveryCharge,
        paymentStatus: "Pending",
        shippingStatus: "Processing",
      };
    }
  };

  // **Order Handler for Online Payment**
  const orderHandler = async (e) => {
    e.preventDefault();
    const data = getOrderData();

    try {
      setIsLoading(true);
      const res = await userRequest.post("/orders/payment", data);
      if (res.data) {
        // dispatch(clearCart());
        // // handleNext();
        // const orderDetails = res.data.order;
        // // Redirect user to the order confirmation page
        // window.location.href = `/order-receive/${orderDetails.orderId}`;
      }
    } catch (error) {
      console.error("Payment Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // **Cash on Delivery Handler**
  const cashHandler = async (e) => {
    e.preventDefault();
    const data = getOrderData();
    console.log(data);
    try {
      setIsLoading(true);
      const res = await userRequest.post("/orders/cash-on-delivery", data);
      console.log(res);
      if (res.data) {
        dispatch(clearCart());
        // handleNext();
        const orderDetails = res.data.order;
        // Redirect user to the order confirmation page
        history.push({
          pathname: `/order-receive/${orderDetails._id}`,
          state: { order: orderDetails },
        });
      }
    } catch (error) {
      console.error("COD Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <TopButton>Shipping</TopButton>
          <TopButton>Item: {cart.products.length}</TopButton>
        </Top>
        <Bottom>
          <Form onSubmit={orderHandler}>
            <FormPart>
              <FormItem>
                <InputItem>
                  <Label>Name:</Label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </InputItem>
                <InputItem>
                  <Label>City:</Label>
                  <Select onChange={(e) => setCity(e.target.value)} required>
                    <Option>Select your City</Option>
                    {districts.sort().map((district, i) => (
                      <Option key={i} value={district}>
                        {district}
                      </Option>
                    ))}
                  </Select>
                </InputItem>
                <InputItem>
                  <Label>Email:</Label>
                  <Input
                    type="email"
                    value={userEmail}
                    placeholder="Enter your email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </InputItem>
                <InputItem>
                  <Label>Phone Number:</Label>
                  <Input
                    type="tel"
                    value={number}
                    pattern="^01[3-9]\d{8}$"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Your phone number"
                    required
                  />
                </InputItem>
                <InputItem>
                  <Label>Postcode / ZIP:</Label>
                  <Input
                    type="number"
                    onChange={(e) => setPostCode(e.target.value)}
                    placeholder="Enter postal code"
                    required
                  />
                </InputItem>
                <InputItem>
                  <Label>House/Address:</Label>
                  <Input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your full address"
                    required
                  />
                </InputItem>
              </FormItem>
            </FormPart>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>৳ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>৳ {deliveryCharge}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>৳ {totalAmount}</SummaryItemPrice>
              </SummaryItem>
              <Card className="card bg-base-100 shadow-xl mb-10">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="radio"
                    value="COD"
                    name="payment-type"
                    onChange={(e) => setPaymentType(e.target.value)}
                    checked={paymentType === "COD"}
                    onClick={(e) => showCard(e.target.value)}
                  />
                  <p>Cash On Delivery</p>
                </div>
              </Card>
              {number &&
              username &&
              city &&
              address &&
              postcode &&
              userEmail ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {showCards ? (
                    <Button onClick={orderHandler}>Proceed Now</Button>
                  ) : (
                    <Button onClick={cashHandler}>Proceed</Button>
                  )}
                </div>
              ) : (
                <p
                  style={{
                    color: "gray",
                    marginTop: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Complete the details
                </p>
              )}
            </Summary>
          </Form>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default OrderDetails;

const Form = styled.form`
  display: flex;
  padding: 30px 15px 0px 15px;
  border: none;
  gap: 20px;
  ${mobile({ padding: "10px 10px 10px 10px", display: "block" })}
`;
const FormPart = styled.form`
  display: flex;
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 30px 15px 30px 15px;
  ${mobile({ padding: "10px 1px 30px 10px" })}
`;
const FormItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  ${mobile({ gridTemplateColumns: "auto" })}
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 17px;
  font-family: 700;
  color: gray;
  margin: 20px 0px -10px 0px;
`;
const Select = styled.select`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  border-radius: 6px;
  font-size: 15px;
  border: 1px solid grey;
  color: gray;
`;
const Option = styled.option`
  color: teal;
`;
const Input = styled.input`
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  color: gray;
  border-radius: 6px;
  font-size: 15px;
  border: 1px solid grey;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
const Container = styled.div``;

const Wrapper = styled.div`
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ justifyContent: "center", gap: "90px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  margin-top: 30px;
  gap: 20px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  ${mobile({
    marginTop: "20px",
    paddingRight: "10px",
    marginBottom: "50px",
    width: "90%",
  })}
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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 20px auto;
  background-color: teal;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  border: 1.5px solid teal;
  transition: ease 0.5s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: teal;
    cursor: pointer;
  }
`;
//Card........
const Card = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
`;
