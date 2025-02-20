import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import AllProducts from "./components/AllProducts";
import ScrollToTop from "./components/scroll/ScrollToTop";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Orders from "./pages/Orders";
import styled from "styled-components";
import { mobile } from "./responsive";
import HorizontalLinearStepper from "./components/Stepper";
import ErrorBoundary from "./utils/ErrorBoundary";
import SuccessView from "./components/payment/SuccessView";
import Failure from "./components/payment/Failure";
import Bottombar from "./components/Navbar/Bottombar";
import useRightClickContext from "./hoc/preventRightClick";
import OrderReceive from "./components/OrderReceive";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (currentUser?.accessToken) {
    if (!sessionStorage.getItem("accessToken")) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(currentUser.accessToken)
      );
    }
  }

  // disabled right click on production
  useRightClickContext();

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products/:category">
              <ProductList />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route path="/all-products">
              <AllProducts />
            </Route>

            <Route path="/login">
              {currentUser?.email ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
              {currentUser?.email ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route path="/cart">
              <HorizontalLinearStepper />
            </Route>
            <Route path="/wishList">
              <WishList />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/payment/success/:id">
              <SuccessView />
            </Route>
            <Route path="/order-receive/:orderId">
              <OrderReceive />
            </Route>
            <Route path="/payment/failure/:id">
              <Failure />
            </Route>
          </Div>
        </Switch>
        <Footer />
        <Bottombar />
      </Router>
    </ErrorBoundary>
  );
};

export default App;

const Div = styled.div`
  margin-top: 82px;
  ${mobile({ marginTop: "70px" })}
`;
