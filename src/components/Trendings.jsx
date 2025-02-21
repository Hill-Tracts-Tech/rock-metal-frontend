import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Trending from "./Trending";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { mobile } from "../responsive";
const Trendings = ({ cat, filters, sort }) => {
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

  console.log(
    products.filter((item) => item.isTreding === true),
    "cat"
  );

  return (
    <Container>
      <Title>
        BEST SHOP TO BUY T-SHIRTS <br /> ONLINE IN BANDARBAN
      </Title>
      <Titles>
        <Title>Trending Now</Title>
        <Link to="/all-products">
          <Button>View All</Button>
        </Link>
      </Titles>
      {!loading ? (
        products.length === 0 ? (
          <EmptyMessage>No Products Found</EmptyMessage>
        ) : (
          <Wrapper>
            {cat
              ? filteredProducts
                  .filter((item) => item.isTreding === true)
                  .map((item) => <Trending item={item} key={item.id} />)
              : products
                  .filter((item) => item.isTreding === true)
                  .map((item) => (
                    <Trending item={item} loading={loading} key={item.id} />
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
          {" "}
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

export default Trendings;

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    justifyContent: "center",
  })}
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 50px 0px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#07ffa8, #ff5607);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  ${mobile({ fontSize: "20px", padding: "12px 0px" })};
`;

const EmptyMessage = styled.h1`
  width: 100%;
  height: 300px;
  margin: auto;
  text-align: center;
  border-radius: 6px;
`;
