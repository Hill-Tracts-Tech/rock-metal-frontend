import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import PaymentBg from "../../assets/paymentBg/Paymentbg.png";
import { CancelOutlined } from "@material-ui/icons";
const Failure = () => {
  return (
    <Container>
      <SubContainer>
        <DetailsInfo>
          <CancelOutlined
            style={{
              fontSize: "70px",
              color: "red",
            }}
          ></CancelOutlined>
          <Info>
            <Title>Payment unsuccessful</Title>

            <p
              style={{
                fontSize: "20px",
                margin: "20px auto",
              }}
            >
              unfortunately your payment was rejected
            </p>
            <Bottom>
              <Div>
                <Button>
                  <Link to="/">GO BACK</Link>
                </Button>
              </Div>
            </Bottom>
          </Info>
        </DetailsInfo>
      </SubContainer>
    </Container>
  );
};

export default Failure;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 50%;
  background-repeat: no-repeat;
  background-size: 350px;
  background-position: 150px 130px;
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
  padding: 0.5rem 1rem;
  background-color: teal;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border: 1.3px solid teal;
  margin: 10px 10px;
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: #fffefe;
    color: teal;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
