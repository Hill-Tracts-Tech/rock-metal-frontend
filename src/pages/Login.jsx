import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { clear } from "../redux/userRedux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const item = location.state?.item;
  const autoAddToCart = location.state?.autoAddToCart;

  item &&
    localStorage.setItem(
      "temp_product",
      JSON.stringify({ item, autoAddToCart })
    );

  const data = localStorage.getItem("temp_product");

  const { item: product, autoAddToCart: condition } = JSON.parse(data) || {};

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, {
      email,
      password,
      ...(product && { item: product, autoAddToCart: condition }),
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clear());
    }
  }, [error, dispatch]);

  return (
    <ContainerWrapper>
      <Toaster />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link
              to="/forgotPassword"
              style={{
                textDecoration: "none",
                color: "teal",
                fontWeight: "600",
              }}
            >
              Forgot Password?
            </Link>
            {/* {error && <Error>Something went wrong...</Error>} */}
            <Button onClick={handleClick} disabled={isLoading || error}>
              LOGIN
            </Button>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "teal",
                fontWeight: "600",
              }}
            >
              No Account? Register Now
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </ContainerWrapper>
  );
};

export default Login;

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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  border-radius: 6px;
`;

const Button = styled.button`
  border: 1px solid teal;
  margin: 10px 0px;
  padding: 15px 26px;
  background-color: teal;
  color: white;
  /* background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")}; */
  cursor: pointer;
  border-radius: 11px;
  transition: ease 0.4s;
  &:hover {
    background-color: transparent;
    color: teal;
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;
