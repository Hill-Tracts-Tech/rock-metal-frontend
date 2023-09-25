import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Badge } from "@material-ui/core";
import {
  AccountCircle,
  CloseRounded,
  ExitToApp,
  FavoriteBorderOutlined,
  Home,
  PersonAddSharp,
  ShoppingBasketOutlined,
  ShoppingCartOutlined,
  Input,
} from "@material-ui/icons";
import gravatar from "gravatar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import { clear } from "../../redux/cartRedux";

const Bottombar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const payemnt = location.pathname.split("/").includes("payment");
  const login = location.pathname.split("/").includes("login");
  const singup = location.pathname.split("/").includes("register");
  //for search input and button
  const cart = useSelector((state) => state.cart);

  const [drawerOpen, setDrawerOpen] = useState(false);
  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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

  const handleLogout1 = () => {
    dispatch(logout());
    dispatch(clear());
  };

  const activeCart = location?.pathname?.split("/").includes("cart");
  const activeWishlist = location?.pathname?.split("/").includes("wishList");

  const avtiveHome = location?.pathname === "/";

  return (
    <Container style={{ display: payemnt || login || singup ? "none" : "" }}>
      <BottomBarContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Link to="/" style={{ background: avtiveHome ? "#215b6c" : "" }}>
            <MenuItem title="Cart">
              <Home />
            </MenuItem>
          </Link>

          <Link to="/cart" style={{ background: activeCart ? "#215b6c" : "" }}>
            <MenuItem title="Cart">
              <Badge badgeContent={cart.quantity} color="white">
                <ShoppingCartOutlined style={{ color: "white" }} />
              </Badge>
            </MenuItem>
          </Link>
          <Link
            to="/wishList"
            style={{ background: activeWishlist ? "#215b6c" : "" }}
          >
            <MenuItem title="WishList">
              <Badge badgeContent={cart.favQuantity} color="teal">
                <FavoriteBorderOutlined style={{ color: "white" }} />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem title="account" onClick={toggleDrawer}>
            <AccountCircle />
          </MenuItem>
          <DrawerWrapper open={drawerOpen}>
            <DrawerInner>
              <Div>
                <CloseRounded
                  onClick={toggleDrawer}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    color: "teal",
                    marginRight: "-330px",
                    marginTop: "-10px",
                  }}
                />
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="profile"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "25px",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <AccountCircle
                    style={{
                      color: "white",
                      height: "50px",
                      width: "50px",
                    }}
                  />
                )}
                <h3>{currentUser?.name}</h3>
                <span>{currentUser?.email}</span>
                <Hr />
              </Div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {currentUser?.email && (
                  <>
                    <Link to="/orders" onClick={toggleDrawer}>
                      <LoginButton1>
                        <MenuItem title="Orders">
                          <ShoppingBasketOutlined />
                        </MenuItem>
                      </LoginButton1>
                    </Link>
                    <Link to="">
                      <LoginButton1
                        onClick={handleLogout1}
                        style={{ marginLeft: "25px" }}
                      >
                        <MenuItem title="Log Out">
                          <ExitToApp />
                        </MenuItem>
                      </LoginButton1>
                    </Link>
                  </>
                )}
                {!currentUser?.email && (
                  <AuthContainer
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        fontWeight: "semibold",
                      }}
                    >
                      <RegisterButton1 onClick={toggleDrawer}>
                        <PersonAddSharp />
                        Register
                      </RegisterButton1>
                    </Link>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        fontWeight: "semibold",
                      }}
                    >
                      <LoginButton1 onClick={toggleDrawer}>
                        <Input />
                        Sign In
                      </LoginButton1>
                    </Link>
                  </AuthContainer>
                )}
              </div>
            </DrawerInner>
          </DrawerWrapper>
        </div>
      </BottomBarContainer>
    </Container>
  );
};

export default Bottombar;

const Container = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
`;

// Styled component for the pop-up content

// Mobile responsive css

const AuthContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
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

const LoginButton1 = styled.div`
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
  &&:hover {
    cursor: pointer;
    border-radius: 4px;
    color: white;
    width: 100%;
  }
`;

const BottomBarContainer = styled.div`
  background-color: teal;
  position: fixed;
  bottom: 0;
  padding-bottom: 4px;
  width: 100%;
  height: 50px;
  z-index: 1000;
`;

const MenuItem = styled.div`
  padding: 1rem;
  color: white;
`;

//pofileCSS

const Hr = styled.hr`
  background-color: teal;
  color: teal;
  height: 1px;
  width: 100%;
`;
const Div = styled.div`
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
const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2000;
  padding-top: 30px;
  right: ${({ open }) => (open ? "0" : "-3000px")};
  width: 250px;
  height: 100%;
  background-color: teal;
  color: #fff;
  transition: right 0.3s ease-in-out;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const DrawerInner = styled.div`
  padding: 0px 30px 0px 30px;
`;
