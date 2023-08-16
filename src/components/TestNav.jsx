import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  FavoriteBorderOutlined,
  Menu,
} from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const MobileViewNavbarContainer = styled.nav`
  display: none;
  @media (max-width: 768px) {
    background-color: #ffffff;
    color: teal;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: teal;

  @media (max-width: 768px) {
    padding: 1rem;
    display: none;
  }
`;

const Logo = styled.div`
  height: 36px;
  height: 36px;
  ${mobile({ width: "30px", height: "30px" })}
  & img {
    width: 30px;
    height: 30px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  border-radius: 18px;
  margin-left: 25px;
  padding: 3px;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-right: 0.5rem;
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

const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const RegisterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: teal;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  border: 1.3px solid teal;
  border-radius: 4px;
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: transparent;
    a {
      color: teal;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
`;
const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: teal;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  border: 1.3px solid teal;
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: transparent;
    a {
      color: teal;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
`;

const MenuButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
`;
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
  color: teal;
  margin-right: 11px;
  @media (max-width: 768px) {
    display: block;
    z-index: 200;
  }
`;
const DrawerWrapper = styled.div`
  position: fixed;
  top: 90px;
  z-index: 100;
  right: ${({ open }) => (open ? "0" : "-3000px")};
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: right 0.3s ease-in-out;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const DrawerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    transition: ease 0.5s;
    &&:hover {
      font-size: 19px;
    }
  }
`;

const MenuItem = styled.div`
  padding: 1rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
//styled component ended//

const TestNav = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  //for search input and button
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };
  return (
    <>
      <NavbarContainer>
        <Left>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <SearchInput
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
          <Link to="/account">
            <MenuItem>
              <AccountCircle style={{ color: "teal" }} />
            </MenuItem>
          </Link>

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
          <AuthContainer>
            <RegisterButton>
              <Link
                to="/register"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                Register
              </Link>
            </RegisterButton>
            <LoginButton>
              <Link
                to="/login"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                Sign In
              </Link>
            </LoginButton>
          </AuthContainer>
        </Right>
      </NavbarContainer>
      <MobileViewNavbarContainer>
        <Left>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <SearchInput
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
        </Right>
      </MobileViewNavbarContainer>
      <MenuButtonWrapper>
        <MenuButton onClick={toggleDrawer}>
          {drawerOpen ? "X" : "☰"}{" "}
        </MenuButton>
      </MenuButtonWrapper>
      <DrawerWrapper open={drawerOpen}>
        <Logo style={{ margin: "20px 0px 0px 20px" }}>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <DrawerInner>
          <Link to="/account">
            <MenuItem>Profile</MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem title="Cart">My Cart</MenuItem>
          </Link>
          <Link to="/whishList">
            <MenuItem title="WhishList">My WishList</MenuItem>
          </Link>
          <AuthContainer>
            <RegisterButton>
              <Link
                to="/register"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                Register
              </Link>
            </RegisterButton>
            <LoginButton>
              <Link
                to="/login"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                Sign In
              </Link>
            </LoginButton>
          </AuthContainer>
        </DrawerInner>
      </DrawerWrapper>
    </>
  );
};

export default TestNav;
