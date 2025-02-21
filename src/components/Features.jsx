import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { mobile } from "../responsive";
import Feature from "./Feature";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Features = ({ cat, filters, sort }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${process.env.REACT_APP_BASE_URL}/products?category=${cat}`
            : `${process.env.REACT_APP_BASE_URL}/products`
        );
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
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

  const data = products.filter((item) => item.isFeatured === true);

  console.log(data);

  return (
    <Container>
      <Title>
        Elevate Your Lifestyle with <br /> Our Featured Collection
      </Title>
      <Titles>
        <Title>FEATURED PRODUCTS</Title>
        <Link to="/all-products">
          <Button>View All</Button>
        </Link>
      </Titles>
      {!loading ? (
        products.length === 0 && filteredProducts.length === 0 ? (
          <EmptyMessage>No Products Found</EmptyMessage>
        ) : (
          <Wrapper>
            {cat
              ? filteredProducts
                  .filter((item) => item.isFeatured === true)
                  .map((item) => (
                    <Feature item={item} loading={loading} key={item.id} />
                  ))
              : products
                  .filter((item) => item.isFeatured === true)
                  .map((item) => (
                    <Feature loading={loading} item={item} key={item.id} />
                  ))}
          </Wrapper>
        )
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
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
  gap: 12px;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
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
  ${mobile({ fontSize: "20px", padding: "12px 0px" })};
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  border: 1.5px solid teal;
  font-size: 16px;
  background-color: teal;
  border-radius: 30px;
  padding: 10px 40px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    background-color: #fff;
    color: teal;
  }
`;

const EmptyMessage = styled.h1`
  width: 100%;
  height: 300px;
  margin: auto;
  text-align: center;
  border-radius: 6px;
`;
