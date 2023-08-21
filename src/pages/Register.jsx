import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const user = {
    name,
    lastName,
    username,
    email,
    password,
    confirm_password,
  };

  console.log(user);

  const handleRegistration = (e) => {
    e.preventDefault();
    register(dispatch, { user });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="name"
          />
          <Input
            onChange={(e) => setLastName(e.target.value)}
            name="last_name"
            placeholder="last name"
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="username"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="password"
          />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirm_password"
            placeholder="confirm password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to="/login">Already Have an accout. Log in</Link>
          <Button onClick={handleRegistration}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

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
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
