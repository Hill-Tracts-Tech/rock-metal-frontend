import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Trending from "./Trending";

const Features = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Title>
        Elevate Your Lifestyle with <br /> Our Featured Collection
      </Title>
      <Heading>Featured Products</Heading>
      <Wrapper>
        {cat
          ? filteredProducts.map((item) => (
              <Trending item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Trending item={item} key={item.id} />)}
      </Wrapper>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 50px 0px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#ff5607, #07ffa8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  color: teal;
  padding: 50px 0 30px 0;
`;
