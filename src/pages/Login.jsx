import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (error === true) {
      setErrorMessage("Password or Username doesn't match.");
    }
    if (!errorMessage) {
      toast.success("Successfully logged.");
    } else {
      toast.error("Password or Username doesn't match.");
    }
  };
  return (
    <ContainerWrapper>
      <Toaster />
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage ? (
              <p
                style={{
                  color: "red",
                  fontWeight: "500",
                }}
              >
                {errorMessage}
              </p>
            ) : (
              ""
            )}
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
            <Button onClick={handleClick} disabled={isFetching}>
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
