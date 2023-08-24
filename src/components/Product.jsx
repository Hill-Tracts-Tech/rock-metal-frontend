import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
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
        toast.success("Added successfully!");
      } catch (error) {
        console.error("Error adding to cart:", error);
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
  const handleAddToWishList = () => {
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
        toast.success("Added successfully!");
      } catch (error) {
        console.error("Error adding to cart:", error);
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
      <Image src={item.img} alt="" />
      <Content>
        <Link to={`/product/${item._id}`} style={{ color: "black" }}>
          <Title>{item?.title}</Title>
        </Link>
        <Price>Price : ৳ {item?.price}</Price>
        <Colors>
          {item?.color.map((c) => (
            <Color
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: c.toLowerCase(),
              }}
            />
          ))}
        </Colors>
        <Sizes>
          {item?.size.map((s) => (
            <Size>{s}</Size>
          ))}
        </Sizes>
        <Icons>
          <ShoppingCartOutlined
            style={{ cursor: "pointer" }}
            onClick={handleAddToCart}
          />
          <Link to={`/product/${item._id}`} style={{ color: "black" }}>
            <SearchOutlined style={{ cursor: "pointer" }} />
          </Link>
          <FavoriteBorderOutlined
            onClick={handleAddToWishList}
            style={{ cursor: "pointer" }}
          />
        </Icons>
      </Content>
      <Toaster />
    </Container>
  );
};

export default Product;

const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 10px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  /* height: 350px; */
  background-color: #f5fbfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Price = styled.div`
  font-size: 16px;
  text-align: center;
  color: #3183ff;
`;
const Colors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 15px 0;
`;
const Color = styled.div`
  border: 1px solid gray;
`;

const Sizes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Size = styled.div`
  background-color: lightgray;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  gap: 30px;
  padding: 15px 0;
  justify-content: center;
`;
const Content = styled.div`
  padding: 10px;
  a {
    text-decoration: none;
  }
`;

const Image = styled.img`
  height: 200px;
  z-index: 2;
  mix-blend-mode: darken;
`;
