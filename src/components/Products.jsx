import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { mobile } from "../responsive";
import Skeleton from "react-loading-skeleton";

const Products = ({ cat, filters, sort }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
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

  return (
    <Container>
      <Titles>
        <Title>Our Regular Products</Title>
        <Link to="/all-products">
          <Button>View All</Button>
        </Link>
      </Titles>
      {!loading ? (
        <Wrapper>
          {cat
            ? filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
              ))
            : products
                .slice(0, 8)
                .map((item) => <Product item={item} key={item.id} />)}
        </Wrapper>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Skeleton width={280} height={200} />
            <Skeleton width={280} height={200} />
            <Skeleton width={280} height={200} />
            <Skeleton width={280} height={200} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "7px",
            }}
          >
            <Skeleton width={280} height={25} count={1} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "7px",
            }}
          >
            <Skeleton width={280} height={20} count={3} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Products;

// styled component
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
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
  background: -webkit-linear-gradient(#07ffa8, #ff5607);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  ${mobile({ fontSize: "20px", padding: "12px 0px" })}
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
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    background-color: #fff;
    color: teal;
  }
`;
