import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import PaymentBg from "../../assets/paymentBg/Paymentbg.png";

const SuccessView = () => {
  return (
    <Container>
      <SubContainer>
        <DetailsInfo>
          <Svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </Svg>
          <Info>
            <p>Thank you for completing your secure online payment.</p>
            <p> Have a great day! </p>
            <Title>Payment Done!</Title>
            <SubInfo>
              <SubItem>
                Payment type
                <span>none</span>
              </SubItem>

              <SubItem>
                Transaction Id <span>none</span>
              </SubItem>

              <SubItem>
                Amount paid <span>none</span>
              </SubItem>

              <SubItem>
                status <span>none</span>
              </SubItem>
              <SubItem>Order Dates </SubItem>
            </SubInfo>

            <Bottom>
              <Div>
                <Button>
                  <Link to="/orders">Order tracking </Link>
                </Button>
              </Div>
            </Bottom>
          </Info>
        </DetailsInfo>
      </SubContainer>
    </Container>
  );
};

export default SuccessView;

const Container = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0) 10%, #ffffff),
    url(${PaymentBg});
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 50%;
  background-repeat: no-repeat;
  background-size: 350px;
  background-position: 150px 95px;
  color: gray;
  font-weight: 600;
  margin: 100px auto;

  ${mobile({
    margin: "100px 0px ",
    width: "100%",
    background: `linear-gradient(rgba(255, 255, 255, 0) 10%, #ffffff),
    url(${PaymentBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "330px",
    backgroundPosition: "30px 165px",
  })}
`;
const SubContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${mobile({ margin: "0px 10px 0px 10px" })}
`;
const DetailsInfo = styled.div`
  padding: 36px;
  border: 1.3px solid #ccc8c8;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px 2px rgb(0 0 0 / 0.1);
  text-align: center;
  background: #ffffffa7;
`;

const Svg = styled.svg`
  width: 40px;
  height: 40px;
  color: teal;
  margin: auto 24px;
`;

const Info = styled.div`
  text-align: center;
`;
const Title = styled.div`
  color: teal;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
`;
const SubInfo = styled.div`
  text-align: left;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
const SubItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled.div`
  padding: 40px auto;
  text-align: center;
`;
const Div = styled.div``;
const Button = styled.button`
  border: none;
  a {
    padding: 0.5rem 1rem;
    background-color: teal;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    color: #a19d9d;
    cursor: pointer;
    border: 1.3px solid teal;
    margin: 10px 10px;
    transition: ease-in-out 0.5s;
    color: #fbfdfd;
    text-decoration: none;
    font-size: 15px;
    &:hover {
      background-color: #fffefe;
      color: teal;
    }
  }
`;
