import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-hot-toast";

const Feature = ({ item, loading }) => {
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
        toast.success("Added to cart successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! May be occurred ", error);
      }
    } else {
      history.push({
        pathname: "/login",
        state: {
          from: history.location,
          autoAddToCart: true,
          item: item,
        },
      });
    }
  };

  // add to favorite
  const handleAddToFavorite = () => {
    if (user) {
      try {
        dispatch(
          addFavorite({
            ...item,
            quantity: 1,
            color: item?.color[0],
            size: item?.size[0],
            email: user?.email,
          })
        );
        toast.success("Added to favorite successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! May be occurred ", error);
      }
    } else {
      history.push({
        pathname: "/login",
        state: {
          from: history.location,
          autoAddToCart: false,
          item: item,
        },
      });
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={handleAddToFavorite}>
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
