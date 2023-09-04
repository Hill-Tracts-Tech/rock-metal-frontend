import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  Visibility,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";

const AllProduct = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = () => {
    if (user) {
      try {
        dispatch(
          addProduct({
            ...item,
            quantity: 1,
            color: item?.color[0],
            size: item?.size[0],
            email: user?.email,
          })
        );
        Swal.fire({
          title: "Added to Cart successfully",
          icon: "success",
          confirmButtonColor: "teal",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: `Something went wrong! May be occurred ,${error}`,
          icon: "warring",
          confirmButtonColor: "teal",
        });
      }
    } else {
      history.push("/login");
    }
  };

  const handleAddToFavourite = () => {
    if (user) {
      try {
        dispatch(
          addFavorite({
            ...item,
            quantity: 1,
            color: item?.color[0],
            size: item?.size[0],
          })
        );
        Swal.fire({
          title: "Added to wishlist successfully",
          icon: "success",
          confirmButtonColor: "teal",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: `Something went wrong! May be occurred ,${error}`,
          icon: "warring",
          confirmButtonColor: "teal",
        });
      }
    } else {
      history.push("/login");
    }
  };
  return (
    <>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon onClick={handleAddToCart}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <Visibility />
            </Link>
          </Icon>
          <Icon onClick={handleAddToFavourite}>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        <Toaster />
      </Container>
    </>
  );
};

export default AllProduct;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  mix-blend-mode: darken;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
