import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  Visibility,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, addProduct } from "../redux/cartRedux";
import toast, { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();

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
        console.error("Error adding to cart:", error);
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
  const handleAddToWishList = () => {
    const data = {
      ...item,
      quantity: 1,
      color: item?.color[0],
      size: item?.size[0],
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
        console.error("Error adding to cart:", error);
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
            style={{
              cursor: "pointer",
              color: "teal",
            }}
            onClick={handleAddToCart}
          />
          <Link to={`/product/${item._id}`} style={{ color: "black" }}>
            <Visibility style={{ cursor: "pointer", color: "teal" }} />
          </Link>
          <FavoriteBorderOutlined
            onClick={handleAddToWishList}
            style={{ cursor: "pointer", color: "teal" }}
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
  flex-wrap: wrap-reverse;
  /* grid-template-columns: auto auto auto auto; */
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

const Size = styled.div`
  background-color: teal;
  text-align: center;
  font-size: 14px;
  color: white;
  padding: 5px;
  height: 25px;
  width: 40px;
  font-weight: bold;
  padding-top: 10px;
  border-radius: 25px;
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
  width: 260px;
  z-index: 2;
  mix-blend-mode: darken;
`;
