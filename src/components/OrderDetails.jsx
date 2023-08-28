import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { districts } from "../data";

const OrderDetails = ({ handleNext }) => {
  const cart = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [postcode, setPostCode] = useState("");
  const { email } = useSelector((state) => state.user.currentUser);
  const handleRegistration = (e) => {
    e.preventDefault();
    handleNext();
    const data = {
      name,
      number,
      city,
      address,
      postcode,
      email,
    };
    console.log(data, "DATA");
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
          <Info>
            <Form onSubmit={handleRegistration}>
              <FormItem>
                <InputItem>
                  <Lable>
                    Name <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    required
                  />
                </InputItem>
                <InputItem>
                  <Lable>
                    City <span style={{ fontWeight: "900" }}>:</span>
                  </Lable>

                  <Select name="city" type="text" required>
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
                    onChange={(e) => setNumber(e.target.value)}
                    name="number"
                    type="number"
                    required
                    style={{
                      appearance: "none",
                    }}
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

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={handleRegistration}>PROCEED NOW</Button>
              </div>
            </Form>
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
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default OrderDetails;

const Form = styled.form`
  padding: 30px 15px 0px 15px;
`;
const FormItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  ${mobile({ gridTemplateColumns: "auto auto" })}
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
  min-width: 40%;
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
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  margin-top: 30px;
  gap: 20px;
`;

const Info = styled.div`
  padding-left: 10px;
  flex: 3;
  border: 0.5px solid lightgray;
  border-radius: 10px;
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

const Button = styled.button`
  width: 50%;
  padding: 10px;
  margin: 20px auto;
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
