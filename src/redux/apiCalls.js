import {
  loginFailure,
  loginStart,
  loginSuccess,
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { toast } from "react-hot-toast";
import { addFavorite, addProduct } from "./cartRedux";
import Swal from "sweetalert2";

export const login = async (
  dispatch,
  { email, password, item, autoAddToCart }
) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(loginSuccess(res.data.data));
    Swal.fire({
      title: "Logged in Successfully",
      icon: "success",
      confirmButtonColor: "teal",
    });
    if (item && autoAddToCart) {
      dispatch(addProduct(item));
      toast.success("Product added to the cart");
      localStorage.removeItem("temp_product");
    } else if (item && !autoAddToCart) {
      dispatch(addFavorite(item));
      toast.success("Product added to the wishlist");
      localStorage.removeItem("temp_product");
    }
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(loginFailure(errorMessage));
  }
};

export const register = async (
  dispatch,
  { name, email, password, item, autoAddToCart, userNumber }
) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", {
      name,
      email,
      userNumber,
      password,
    });
    localStorage.setItem("token", res.data.data?.accessToken);
    dispatch(registrationSuccess(res.data.data));
    Swal.fire({
      title: "Registered in Successfully",
      icon: "success",
      confirmButtonColor: "teal",
    });
    if (item && autoAddToCart) {
      dispatch(addProduct(item));
      toast.success("Product added to the cart");
      localStorage.removeItem("temp_product");
    } else if (item && !autoAddToCart) {
      dispatch(addFavorite(item));
      toast.success("Product added to the wishlist");
      localStorage.removeItem("temp_product");
    }
  } catch (err) {
    const errorMessage = err.response?.data?.error || "An error occurred.";
    dispatch(registrationFailure(errorMessage));
  }
};
