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
import PrivateRoute from "./router/PrivateRoute ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Orders from "./pages/Orders";
import styled from "styled-components";
import { mobile } from "./responsive";
import HorizontalLinearStepper from "./components/Stepper";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
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
          <PrivateRoute path="/cart">
            <HorizontalLinearStepper />
          </PrivateRoute>
          <PrivateRoute path="/wishList">
            <WishList />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
        </Div>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

const Div = styled.div`
  margin-top: 100px;
  ${mobile({ marginTop: "70px" })}
`;
