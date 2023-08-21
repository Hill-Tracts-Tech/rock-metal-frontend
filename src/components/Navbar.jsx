import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  FavoriteBorderOutlined,
  Menu,
  Close,
} from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import profile from "../assets/profile.png";
import { logout } from "../redux/userRedux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //for search input and button
  const cart = useSelector((state) => state.cart);
  const [searchValue, setSearchValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  const togglePopup = () => {
    console.log("Searching for:", searchValue);
    setIsPopupOpen(!isPopupOpen);
  };
  const ProfileTogglePopup = () => {
    setIsPopupProfileOpen(!isPopupProfileOpen);
  };

  const popupRef = useRef(null);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link to="/cart">
            <MenuItem title="Cart">
              <Badge badgeContent={cart.quantity} color="teal">
                <ShoppingCartOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/wishList">
            <MenuItem title="WhishList">
              <Badge badgeContent={cart.favQuantity} color="teal">
                <FavoriteBorderOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          {!currentUser?.username ? (
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
          ) : (
            <MenuItem onClick={ProfileTogglePopup}>
              <AccountCircle style={{ color: "teal" }} />
            </MenuItem>
          )}
        </Right>
      </NavbarContainer>

      {/* Mobile responsive view */}
      <MobileViewNavbarContainer>
        <Left>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
          </Link>
        </Left>
        <Center style={{ display: "flex", alignItems: "center" }}>
          <SearchButton onClick={togglePopup}>
            <Search
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            />
          </SearchButton>
        </Center>
        <Right>
          <MenuItem>
            <AccountCircle
              onClick={ProfileTogglePopup}
              style={{ color: "teal" }}
            />
          </MenuItem>
          <Link to="/cart">
            <MenuItem title="Cart">
              <Badge badgeContent={cart.quantity} color="teal">
                <ShoppingCartOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/wishList">
            <MenuItem title="WishList">
              <Badge badgeContent={cart.favQuantity} color="teal">
                <FavoriteBorderOutlined style={{ color: "teal" }} />
              </Badge>
            </MenuItem>
          </Link>
          <MenuButton onClick={toggleDrawer}>
            {drawerOpen ? "X" : <Menu />}{" "}
          </MenuButton>
        </Right>
      </MobileViewNavbarContainer>
      {/*  */}
      {/*  */}
      {/* Navbar drawer */}
      <DrawerWrapper open={drawerOpen}>
        <Logo style={{ margin: "20px 0px 0px 20px" }}>
          <Link to="/" style={{ color: "teal", textDecoration: "none" }}>
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <DrawerInner>
          <Profile>
            <ProfileImage src={profile} />
          </Profile>
          <Link to="/cart">
            <MenuItem title="Cart">My Cart</MenuItem>
          </Link>
          <Link to="/wishList">
            <MenuItem title="WishList">My WishList</MenuItem>
          </Link>
          {!currentUser?.username && (
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
          )}
        </DrawerInner>
      </DrawerWrapper>

      {/* Search pop up */}
      <Overlay isOpen={isPopupOpen}>
        <PopupContent ref={popupRef}>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            <SearchButton onClick={togglePopup} disabled={!searchValue}>
              <Search
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
              />
            </SearchButton>
          </SearchContainer>
        </PopupContent>
      </Overlay>
      {currentUser?.username && (
        <ProfileOverlay isOpenProfile={isPopupProfileOpen}>
          <ProfilePopupContent>
            <button
              style={{
                position: "absolute",
                right: "3px",
                top: "6px",
                backgroundColor: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                title: "Close",
              }}
              onClick={ProfileTogglePopup}
            >
              <Close />
            </button>
            <Profile>
              <ProfileImage src={profile} />
            </Profile>
            <h3>{currentUser?.username}</h3>
            <span>{currentUser?.email}</span>
            <LogoutButton onClick={() => dispatch(logout())}>
              Logout
            </LogoutButton>
          </ProfilePopupContent>
        </ProfileOverlay>
      )}
    </>
  );
};

export default Navbar;

// Styled component for the pop-up overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 99999999;
`;

// Styled component for the pop-up content
const PopupContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  width: 80%;
  height: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999999999999999;
`;

const ProfileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(ProfileProps) => (ProfileProps.isOpenProfile ? "block" : "none")};
  z-index: 99999999;
`;

const ProfilePopupContent = styled.div`
  position: absolute;
  top: 40%;
  right: 1%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transform: translate(0%, -77%);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  width: 30%;
  height: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999999999999999;
  @media screen and (max-width: 500px) {
    width: 50%;
    top: 31%;
  }
`;

// Mobile responsive css

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
  height: 42px;
  height: 42px;
  ${mobile({ width: "42px", height: "42px" })}
  & img {
    width: 42px;
    height: 42px;
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
    /* margin-top: 1rem; */
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
  top: 30px;
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

const LogoutButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  outline: none;
  background-color: teal;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  transition: ease 0.3s;
  &:hover {
    background-color: transparent;
    color: teal;
  }
`;

const Profile = styled.div`
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImage = styled.img`
  margin-top: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
