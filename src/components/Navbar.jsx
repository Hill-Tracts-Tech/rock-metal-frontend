import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  FavoriteBorderOutlined,
  CloseRounded,
  ExitToApp,
  ShoppingBasketOutlined,
  WhatsApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import gravatar from "gravatar";
import { clear } from "../redux/cartRedux";
import SearchItem from "./SearchItem";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const payemnt = location.pathname.split("/").includes("payment");
  const login = location.pathname.split("/").includes("login");
  const singUp = location.pathname.split("/").includes("register");
  //for search input and button
  const cart = useSelector((state) => state.cart);
  const [searchValue, setSearchValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const [searchPopup, setSearchPopup] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchPopup(true);
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

  const imageUrl = currentUser && gravatar.url(currentUser.email);

  const handleLogout = () => {
    setIsPopupProfileOpen(!isPopupProfileOpen);
    dispatch(logout());
    dispatch(clear());
  };

  return (
    <div style={{ display: payemnt ? "none" : "" }}>
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
          <SideIcon style={{ display: login || singUp ? "none" : "" }}>
            <a
              className="whatsapplink"
              href="https://api.whatsapp.com/send?phone=8801888422116"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp
                style={{
                  color: "white",
                  fontSize: "44px",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
              ></WhatsApp>
              {/* <img src={whatsapp} alt="whatsapp" className="whatsapp" /> */}
            </a>
          </SideIcon>
          {!currentUser?.email ? (
            <AuthContainer>
              <Link
                to="/register"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                <RegisterButton>Register</RegisterButton>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", fontWeight: "semibold" }}
              >
                <LoginButton>Sign In</LoginButton>
              </Link>
            </AuthContainer>
          ) : (
            <MenuItem
              onClick={ProfileTogglePopup}
              style={{ cursor: "pointer" }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="profile"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "15px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <AccountCircle style={{ color: "teal" }} />
              )}
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
        <SideIcon style={{ display: login || singUp ? "block" : "" }}>
          <a
            href="https://api.whatsapp.com/send?phone=8801888422116"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp
              style={{
                color: "white",
                fontSize: "44px",
                marginLeft: "10px",
                marginTop: "2px",
              }}
            ></WhatsApp>
            {/* <img src={whatsapp} alt="whatsapp" className="whatsapp" /> */}
          </a>
        </SideIcon>
        <>
          {" "}
          {/* <SearchContainer style={{ marginRight: "13px" }}>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              style={{ width: "200px" }}
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
          </SearchContainer> */}
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              marginRight: "20px",
              marginTop: "13px",
            }}
            onClick={togglePopup}
          >
            <Search />
          </button>
        </>
      </MobileViewNavbarContainer>
      {/*  */}
      {/*  */}
      {/* Navbar drawer */}

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
        </PopupContent>
      </Overlay>
      {/* Profile Section............. */}
      <ProfileOverlay isOpenProfile={isPopupProfileOpen}>
        <ProfilePopupContent>
          <ProfilTop>
            <CloseRounded
              onClick={ProfileTogglePopup}
              style={{
                position: "absolute",
                right: "3px",
                top: "6px",
                background: "teal",
                borderRadius: "20px",
                color: "white",
                marginRight: "4px",
                cursor: "pointer",
                title: "Close",
              }}
            />

            <Profile>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="profile"
                  style={{
                    height: "50px",
                    // width: "50px",
                    borderRadius: "25px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <AccountCircle style={{ color: "teal" }} />
              )}
              <SubDiv>
                <h3 style={{ color: "teal", marginBottom: "3px" }}>
                  {currentUser?.name}
                  <br />
                </h3>
                <span style={{ color: "teal" }}>{currentUser?.email}</span>
              </SubDiv>
            </Profile>
            <Hr />
          </ProfilTop>
          <ButtonList>
            <Link to="/orders" onClick={() => setIsPopupProfileOpen(false)}>
              <Exit>
                <ShoppingBasketOutlined />
                Orders
              </Exit>
            </Link>
            <Exit onClick={handleLogout}>
              <ExitToApp onClick={handleLogout} /> Log Out
            </Exit>
          </ButtonList>
        </ProfilePopupContent>
      </ProfileOverlay>
      {searchPopup && searchValue?.length >= 3 && (
        <SearchItem
          searchPopup={searchPopup}
          setSearchPopup={setSearchPopup}
          searchValue={searchValue}
        />
      )}
    </div>
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
  transform: translate(0%, -77%);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  width: 250px;
  height: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999999999999999;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    width: 50%;
    top: 31%;
  }
`;

// Mobile responsive css

const MobileViewNavbarContainer = styled.nav`
  display: none;
  @media (max-width: 768px) {
    position: fixed; //Make the Navbar sticky
    top: 0; /* Position it at the top */
    width: 96%;
    z-index: 1000;
    background-color: #ffffff;
    color: teal;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 96%;
  height: 50px;
  z-index: 1000;
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
  width: 120px;
  ${mobile({ width: "120px", height: "42px" })}
  & img {
    /* width: 120px; */
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
const SideIcon = styled.div`
  position: fixed;
  background-color: #34d126;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  bottom: 0;
  width: 55px;
  height: 50px;
  margin-bottom: 270px;
  margin-right: -22px;
  z-index: 1000;
  ${mobile({ marginLeft: "304px", marginBottom: "360px", right: 0 })}
  ${tablet({
    marginRight: "0px",
    marginBottom: "470px",
  })}
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
  color: white;
  &:hover {
    background-color: transparent;
    color: teal;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
`;

const RegisterButton1 = styled.div`
  color: white;
  padding: 5px 6px;
  width: 100%;
  margin-bottom: 13px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background-color: teal;
  &:hover {
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
  }
`;
const LoginButton = styled.div`
  padding: 0.4rem 1rem;
  background-color: teal;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  border: 1.3px solid teal;
  border-radius: 4px;
  transition: ease-in-out 0.5s;
  color: white;
  &:hover {
    background-color: transparent;
    color: teal;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
`;
const Button1 = styled.div`
  padding: 0.4rem 1rem;
  background-color: teal;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  border: 1.3px solid teal;
  border-radius: 4px;
  transition: ease-in-out 0.5s;
  color: white;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
`;

const Profile = styled.div`
  gap: 5px;

  margin: 0px auto 0px 0px;
  height: 64px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 1rem;
  ${mobile({ paddingRight: "2px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

//pofileCSS

const ProfilTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Hr = styled.hr`
  background-color: teal;
  color: teal;
  height: 1px;
  width: 100%;
`;
const ButtonList = styled.div`
  text-align: left;
  margin-top: 10px;
  font-weight: 700;
`;
const Exit = styled.div`
  color: teal;
  padding: 5px 6px;
  margin-bottom: 13px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &&:hover {
    background-color: teal;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    width: 100%;
  }
`;
const SubDiv = styled.div``;
