import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  FavoriteBorderOutlined,
  Menu,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [user, setUser] = useState("userAche");
  const [registered, setRegister] = useState("register");
  //for search input and button
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the searchValue state.
    console.log("Searching for:", searchValue);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
              <Logo>ROCK METAL</Logo>
            </Link>
          </Left>
          <Center>
            <SearchContainer>
              <Input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
              <SearchButton onClick={handleSearch} disabled={!searchValue}>
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
            {user && (
              <Link to="/account">
                <MenuItem>
                  <AccountCircle style={{ color: "teal" }} />
                </MenuItem>
              </Link>
            )}
            {!registered ? (
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "teal" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "teal" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            )}
            <Link to="/cart">
              <MenuItem title="Cart">
                <Badge badgeContent={quantity} color="teal">
                  <ShoppingCartOutlined style={{ color: "teal" }} />
                </Badge>
              </MenuItem>
            </Link>
            <Link to="/whishList">
              <MenuItem title="WhishList">
                <Badge badgeContent={quantity} color="teal">
                  <FavoriteBorderOutlined style={{ color: "teal" }} />
                </Badge>
              </MenuItem>
            </Link>
            <MenuButton>
              <Menu />
            </MenuButton>
          </Right>
        </Wrapper>
        {/* <MobileView>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <Logo>ROCK METAL</Logo>
          </Link>
          {user && (
            <Link to="/account">
              <MenuItem>
                <AccountCircle style={{ color: "teal" }} />
              </MenuItem>
            </Link>
          )}
          {!registered ? (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "teal" }}
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "teal" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          <Link to="/cart">
            <MenuItem title="Cart">
              <Badge badgeContent={quantity} color="teal">
                <ShoppingCartOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/whishList">
            <MenuItem title="WhishList">
              <Badge badgeContent={quantity} color="teal">
                <FavoriteBorderOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          <MenuButton>
            <Menu />
          </MenuButton>
        </MobileView> */}
      </Container>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>
            <NavbarLink href="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/about">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/services">Services</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/contact">Contact</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </>
  );
};
//
const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavbarItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;
//
export default Navbar;

const Container = styled.div`
  height: 60px;
  /* ${mobile({ height: "50px" })} */
  position: relative;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const MobileView = styled.div`
  background: orange;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  padding: 16px;
  text-align: right;
  z-index: 100;
  right: 0;
  ${mobile({ width: "100%", height: "100%" })}
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
  margin-left: 7px;
  background: transparent;
  ${mobile({ width: "50px" })}
`;

const SearchButton = styled.button`
  color: #757171;
  border: none;
  border-radius: 100%;
  padding: 6px 8px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#d1caca" : "teal")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#d1caca" : "teal")};
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

const MenuButton = styled.button`
  color: teal;
  outline: none;
  background-color: transparent;
  border: none;
  margin-left: 5px;
  display: none;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
