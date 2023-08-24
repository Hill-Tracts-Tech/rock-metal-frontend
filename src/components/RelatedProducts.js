import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addProduct } from "../redux/cartRedux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        if (category) {
          const res = await axios.get(
            `http://localhost:5000/api/products?category=${category[0]}`
          );
          setProducts(res.data.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getProducts();
  }, [category, setProducts]);

  console.log(products);

  const handleAddToCart = (Id) => {
    const item = products?.find((product) => product._id === Id);
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
  const handleAddToFavorite = (Id) => {
    const item = products?.find((product) => product._id === Id);
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
      <Heading>You may choice that also</Heading>
      {!loading ? (
        <Wrapper>
          {products.map((item) => (
            <Content>
              <Image>
                <img
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                  }}
                  src={item.img}
                  alt={item.img}
                />
              </Image>
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
                  onClick={() => handleAddToCart(item._id)}
                />
                <Link to={`/product/${item._id}`} style={{ color: "black" }}>
                  <SearchOutlined style={{ cursor: "pointer" }} />
                </Link>
                <FavoriteBorderOutlined
                  onClick={() => handleAddToFavorite(item._id)}
                  style={{ cursor: "pointer" }}
                />
              </Icons>
            </Content>
          ))}
        </Wrapper>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            width: "90%",
            margin: "0 auto",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <Skeleton width={280} height={200} />
              <Skeleton width={200} height={20} />
              <Skeleton width={160} height={20} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default RelatedProducts;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const Wrapper = styled.div`
  margin: 5px;
  min-width: 280px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  ${mobile({ justifyContent: "center", width: "100%" })}
`;
const Title = styled.div`
  text-align: center;
  margin: 10px 0px;
  font-weight: 500;
`;
const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 50px 0px;
  text-transform: uppercase;
  text-align: center;
  background: -webkit-linear-gradient(#07ffa8, #ff5607);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mobile({ fontSize: "20px", padding: "12px 0px" })};
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
  background-color: teal;
  text-align: center;
  font-size: 14px;
  color: white;
  padding: 5px;
  height: 25px;
  width: 25px;
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

const Image = styled.div`
  width: 280px;
  height: 280px;
  mix-blend-mode: darken;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-radius: 5px;
`;
