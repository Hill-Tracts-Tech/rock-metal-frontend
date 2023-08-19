import React from "react";
import styled from "styled-components";
import REGISTER from "../assets/orderIcons/REGISTER.png";
import SHOP from "../assets/orderIcons/SHOP.png";
import MAKEPAYMENT from "../assets/orderIcons/MAKE PAYMENT.png";
import RELAX from "../assets/orderIcons/RELAX.png";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Ordersectionads = () => {
  return (
    <Container>
      <UperDiv>
        <Title>
          HOW TO ORDER OUR PRODUCT <br /> ONLINE{" "}
        </Title>
      </UperDiv>
      <Background>
        <div style={{ paddingTop: "80px" }}>
          <SmallSize>
            Ordering our product online from Top Shelf BC is easy. We are proud
            to have made the process accessible across multiple platforms and
            simple to understand, meaning that more people can come to us to buy
            their cannabis products online.{" "}
          </SmallSize>
          {/* <p>And get </p>
          <span>20 % OFF</span> */}
        </div>
        <Info>
          <AlignBox>
            <Box>
              <Count>
                <Number>1</Number>
              </Count>
              <div>
                <img src={REGISTER} alt="" />
                <TinyTitle>REGISTER</TinyTitle>
              </div>
            </Box>
            <SmallSize>
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </SmallSize>
          </AlignBox>
          <AlignBox>
            <Box>
              <Count>
                <Number>2</Number>
              </Count>
              <div>
                <img src={SHOP} alt="" />
                <TinyTitle>SHOP</TinyTitle>
              </div>
            </Box>
            <SmallSize>
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </SmallSize>
          </AlignBox>
          <AlignBox>
            <Box>
              <Count>
                <Number>3</Number>
              </Count>
              <div>
                <img src={MAKEPAYMENT} alt="" />
                <TinyTitle>MAKE PAYMENT</TinyTitle>
              </div>
            </Box>
            <SmallSize>
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </SmallSize>
          </AlignBox>
          <AlignBox>
            <Box>
              <Count>
                <Number>4</Number>
              </Count>
              <div>
                <img src={RELAX} alt="" />
                <TinyTitle>RELAX</TinyTitle>
              </div>
            </Box>
            <SmallSize>
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </SmallSize>
          </AlignBox>
        </Info>
        <Link to="all-products">
          <Button>ORDER NOW</Button>
        </Link>
      </Background>
    </Container>
  );
};

export default Ordersectionads;
const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;
const Background = styled.div`
  background-color: black;
  color: white;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  ${mobile({ fontSize: "20px" })}
`;
const TinyTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  margin: 10px auto;
`;
const SmallSize = styled.div`
  font-size: 12px;
  width: 50%;
  margin: 10px auto;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  ${mobile({ gridTemplateColumns: "auto" })}
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const AlignBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Count = styled.div`
  background-color: orange;
  border-radius: 80px;
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  margin-top: 13px;
`;
const Number = styled.div`
  margin-top: 5px;
  color: black;
  font-weight: 900;
`;
const Button = styled.button`
  border: 1.5px solid teal;
  font-size: 16px;
  background-color: teal;
  border-radius: 30px;
  padding: 10px 40px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    background-color: #fff;
    color: teal;
  }
  margin: 50px 0px;
`;
const UperDiv = styled.div`
  position: relative;
  background: teal;
  width: 60%;
  margin-top: 20px;
  margin-bottom: -55px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 5px;
  border-radius: 10px;
  color: white;
`;
