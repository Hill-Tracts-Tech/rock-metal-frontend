import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ROCK METAL</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchButton>
              <Search
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
              />
            </SearchButton>
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/account">
            <MenuItem>
              <AccountCircle />
            </MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  border-radius: 18px;
  margin-left: 25px;
  padding: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  ${mobile({ width: "50px" })}
`;

const SearchButton = styled.button`
  color: #757171;
  border: none;
  border-radius: 100%;
  padding: 6px 8px;
  cursor: pointer;
  &:hover {
    background-color: #17af26;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
