import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useDispatch, useSelector } from "react-redux";
import AllProducts from "./components/AllProducts";
import ScrollToTop from "./components/scroll/ScrollToTop";
import WishList from "./pages/WishList";
import PrivateRoute from "./router/PrivateRoute ";
import { useEffect, useState } from "react";
import { addFavorite, addProduct } from "./redux/cartRedux";
import { toast } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  // const [cartType, setcartype] = useState({});

  useEffect(() => {
    const temp_data = localStorage.getItem("temp_item");

    if (temp_data) {
      try {
        setProduct(JSON.parse(temp_data));
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);
  const cartType = localStorage.getItem("cartType");
  // useEffect(() => {

  //   if (cartTypes) {
  //     try {
  //       setcartype(JSON.parse(cartTypes));
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   }
  // }, []);

  // console.log(product, "product");
  // console.log(cartType, "cartType");

  if (currentUser?.email && Object.keys(product).length > 0) {
    if (cartType === "true") {
      try {
        dispatch(
          addProduct({
            ...product,
            quantity: 1,
            color: product?.color[0],
            size: product?.size[0],
            email: currentUser?.email,
          })
        );
        toast.success("Added to cart automatically after login");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while adding to cart");
      }
      localStorage.removeItem("temp_item");
    } else if (cartType === "false") {
      try {
        dispatch(
          addFavorite({
            ...product,
            quantity: 1,
            color: product?.color[0],
            size: product?.size[0],
            email: currentUser?.email,
          })
        );
        toast.success("Added to cart automatically after login");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong while adding to cart");
      }
      localStorage.removeItem("temp_item");
    }
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Announcement />
      <Switch>
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
          <Cart />
        </PrivateRoute>
        <PrivateRoute path="/wishList">
          <WishList />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
