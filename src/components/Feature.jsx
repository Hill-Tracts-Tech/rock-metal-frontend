import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Visibility,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const Feature = ({ item, loading }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAddToCart = () => {
    const data = {
      ...item,
      quantity: 1,
      color: item?.color[0],
      size: item?.size[0],
    };
    if (user) {
      try {
        dispatch(addProduct(data));
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
      history.push({
        pathname: "/login",
        state: {
          from: history.location,
          autoAddToCart: true,
          item: data,
        },
      });
    }
  };

  // add to favorite
  const handleAddToFavorite = async () => {
    const data = {
      ...item,
      quantity: 1,
      color: item?.color[0],
      size: item?.size[0],
      email: user?.email,
    };
    if (user) {
      try {
        dispatch(addFavorite(data));
        Swal.fire({
          title: "Added to favorite successfully",
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
      history.push({
        pathname: "/login",
        state: {
          from: history.location,
          item: data,
        },
      });
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon
          onClick={handleAddToCart}
          style={{ cursor: "pointer", color: "teal" }}
        >
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{ cursor: "pointer", color: "teal" }}
          >
            <Visibility />
          </Link>
        </Icon>
        <Icon
          onClick={handleAddToFavorite}
          style={{ cursor: "pointer", color: "teal" }}
        >
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Feature;

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
  margin: 12px 5px;
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
