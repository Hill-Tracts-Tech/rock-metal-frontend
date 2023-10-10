import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { clear } from "../redux/userRedux";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error } = useSelector((state) => state.user);

  const data = localStorage.getItem("temp_product");

  const product = data && JSON.parse(data);

  const user = {
    name,
    email,
    userNumber,
    password,
    ...(data && { item: product?.item, autoAddToCart: product?.autoAddToCart }),
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    register(dispatch, user);
  };

  // clearing the error
  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <Toaster />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleRegistration}>
            <Input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="name"
              required
            />
            <Input
              onChange={(e) => setUserNumber(e.target.value)}
              name="userNumber"
              placeholder="Phone Number"
              type="number"
              required
            />

            <Input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="email"
              type="email"
              required
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="password"
              type="password"
              required
            />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <ButtonWrapper>
              <Button
                type="submit"
                onClick={handleRegistration}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Register"}
              </Button>
              <Link
                to="/login"
                style={{
                  color: "teal",
                  textDecoration: "none",
                }}
              >
                Already Have an account? Log in
              </Link>
            </ButtonWrapper>
          </Form>
        </Wrapper>
      </Container>
    </ContainerWrapper>
  );
};

export default Register;

const Error = styled.p`
  color: #c23e3e;
  margin: 12px 0px;
`;
const ContainerWrapper = styled.div`
  overflow: hidden;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  border-radius: 6px;
  font-size: 17pxx;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  border-radius: 11px;
  border: 1.5px solid teal;
  padding: 10px 26px;
  background-color: teal;
  color: white;
  width: 100%;
  /* background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")}; */
  transition: ease 0.4s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: teal;
  }
`;
