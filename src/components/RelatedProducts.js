import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (category) {
          const res = await axios.get(
            `http://localhost:5000/api/products?category=${category[0]}`
          );
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, setProducts]);

  console.log(products);

  return (
    <Container>
      <Wrapper>
        {products.map((item) => (
          <Content>
            <Image src={item.img} alt="" />
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
                // onClick={handleAddToCart}
              />
              <Link to={`/product/${item._id}`} style={{ color: "black" }}>
                <SearchOutlined style={{ cursor: "pointer" }} />
              </Link>
              <FavoriteBorderOutlined
                // onClick={handleAddToWishList}
                style={{ cursor: "pointer" }}
              />
            </Icons>
          </Content>
        ))}
      </Wrapper>
    </Container>
  );
};

export default RelatedProducts;

const Container = styled.div``;
const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  /* height: 350px; */
  background-color: #f5fbfd;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
`;
const Title = styled.div``;
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
