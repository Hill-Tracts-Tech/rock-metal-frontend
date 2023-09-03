import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { districts } from "../data";
import { userRequest } from "../requestMethods";
import { clearCart } from "../redux/cartRedux";

const OrderDetails = ({ handleNext, setIsLoading }) => {
  const cart = useSelector((state) => state.cart);
  const { email, _id, phone, name } = useSelector(
    (state) => state.user.currentUser
  );
  const [username, setName] = useState(name);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState(phone);
  const [postcode, setPostCode] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [paymentType, setPaymentType] = useState("COD");
  const dispatch = useDispatch();
  const showCard = (value) => {
    if (value === "card") {
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };
  const orderHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: username,
      phone: number,
      city,
      address,
      postcode,
      email,
      _id: _id,
    };
    try {
      setIsLoading(true);
      const res = await userRequest.post("/orders/payment", data);
      if (res.data) {
        window.location.replace(res.data.data);
        dispatch(clearCart());
        handleNext();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const cashHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: username,
      phone: number,
      city,
      address,
      postcode,
      email,
      _id: _id,
    };

    setIsLoading(true);
    try {
      const res = await userRequest.post("/orders/cash-on-delivery", data);
      setIsLoading(false);
      if (res.data) {
        dispatch(clearCart());
        handleNext();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Top>
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
            Shipping
          </TopButton>
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
            Item: {cart.products.length}
          </TopButton>
        </Top>
        <Bottom>
          <Form onSubmit={orderHandler}>
            <FormPart>
              <FormItem>
                <InputItem>
                  <Lable>
                    Name <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>
                  <Input
                    value={username}
                    name="name"
                    type="text"
                    required
                    disabled
                    placeholder={username}
                  />
                </InputItem>
                <InputItem>
                  <Lable>
                    City <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Select
                    name="city"
                    type="text"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <Option>Select your City</Option>
                    {districts.map((district, i) => (
                      <Option value={district}>{district}</Option>
                    ))}
                  </Select>
                </InputItem>
                <InputItem>
                  <Lable>
                    Email <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Input
                    name="email"
                    placeholder={email}
                    type="email"
                    pattern={`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,`}
                    required
                    disabled
                    value={email}
                  />
                </InputItem>
                <InputItem>
                  <Lable>
                    Phone Number <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Input
                    name="number"
                    type="number"
                    value={number}
                    pattern={/^01[3-9]\d{8}$/}
                    placeholder={number}
                    required
                  />
                </InputItem>
                <InputItem>
                  <Lable>
                    Postcode / ZIP <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Input
                    onChange={(e) => setPostCode(e.target.value)}
                    name="postcode"
                    type="number"
                    required
                  />
                </InputItem>
                <InputItem>
                  <Lable>
                    House/Address <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Input
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                    type="text"
                    required
                  />
                </InputItem>
              </FormItem>
            </FormPart>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                {number && name && city && address && postcode && email ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "250px",
                    }}
                  >
                    <Button onClick={orderHandler}>Checkout</Button>
                    <Button value="kolo" onClick={cashHandler}>
                      Cash On Delivery
                    </Button>
                  </div>
                ) : (
                  <p
                    style={{
                      color: "gray",
                      marginTop: "15px",
                      fontSize: "20px",
                    }}
                  >
                    Complete the details
                  </p>
                )}
              </div> */}
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
              <Card className="card bg-base-100 shadow-xl mb-10 ">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <input
                    type="radio"
                    value="COD"
                    name="payment-type"
                    style={{
                      width: "20px",
                      height: "20px",
                      padding: "10px",
                      background: "teal",
                    }}
                    onChange={(event) => setPaymentType(event.target.value)}
                    checked={paymentType === "COD"}
                    onClick={(e) => showCard(e.target.value)}
                  />
                  <p>Cash On Delivery</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <input
                    type="radio"
                    value="card"
                    name="payment-type"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    onChange={(event) => setPaymentType(event.target.value)}
                    checked={paymentType === "card"}
                    onClick={(e) => showCard(e.target.value)}
                  />
                  <p>Pay With Bkash</p>
                </div>
              </Card>
              {/* akdjfg;ljgd */}
              {number && name && city && address && postcode && email ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {showCards ? (
                    <>
                      <Button disabled onClick={orderHandler}>
                        Proceed Now{" "}
                      </Button>
                    </>
                  ) : (
                    <Button isabled onClick={cashHandler}>
                      Cash On Delivery
                    </Button>
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
  ${mobile({ padding: "10px 15px 10px 15px", display: "block" })}
`;
const FormPart = styled.form`
  display: flex;
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 30px 15px 30px 15px;
  ${mobile({ padding: "10px 15px 10px 15px" })}
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
const Lable = styled.label`
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
  ${mobile({ marginTop: "20px", width: "90%" })}
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
