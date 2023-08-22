import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
console.log(error);
  const user = {
    name,
    lastName,
    username,
    email,
    password,
    confirm_password,
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    register(dispatch, { user });
  };

  return (
    <ContainerWrapper>
      <Toaster />
      <Announcement />
      <Navbar />
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
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
              placeholder="last name(optional)"
              type="text"
            />
            <Input
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="username"
              type="text"
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
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm_password"
              placeholder="confirm password"
              type="password"
              required
            />
            {password !== confirm_password ? (
              <Error>Password doesn't match</Error>
            ) : (
              ""
            )}
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <ButtonWrapper>
              <Link
                to="/login"
                style={{
                  color: "teal",
                  textDecoration: "none",
                }}
              >
                Already Have an account? Log in
              </Link>
              <Button
                type="submit"
                onClick={handleRegistration}
                disabled={errorMessage}
              >
                Register Now
              </Button>
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
  width: 40%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  border-radius: 6px;
  font-size: 17pxx;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  border-radius: 11px;
  font-weight: 600;
  border: 1.5px solid teal;
  padding: 15px 26px;
  background-color: teal;
  color: white;
  /* background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")}; */
  transition: ease 0.4s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: teal;
  }
`;
