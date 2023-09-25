import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import AllProduct from "./AllProduct";
import { mobile } from "../responsive";
import Skeleton from "react-loading-skeleton";
import img from "../assets/sad.png";

const AllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_PRODUCTION === "YES"
            ? "https://api.rockmetaltshirt.com/api/products"
            : "http://localhost:5002/api/products"
        );
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(() =>
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, filters]);

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

  const handleFilters = (e) => {
    console.log("Filtering for: ", e.target.value, e.target.name);
    const value = e.target.value;
    console.log(value);
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    const filteredProducts = products.filter((item) =>
      Object.entries({
        ...filters,
        [e.target.name]: value,
      }).every(([key, value]) => item[key].includes(value))
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <Container>
        <Title>All Products</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        {!loading ? (
          <Wrapper>
            {products ? (
              filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <AllProduct item={item} key={item.id} />
                ))
              ) : (
                <EmptyDiv>
                  <EmptyMessageImg src={img} alt="EmptyProduct" />
                  <EmptyMessage style={{ marginBottom: "10px" }}>
                    Sorry, We cannot find any matched product.
                  </EmptyMessage>
                </EmptyDiv>
              )
            ) : products.length > 0 ? (
              products.map((item) => <AllProduct item={item} key={item.id} />)
            ) : (
              <EmptyMessage>No products available.</EmptyMessage>
            )}
          </Wrapper>
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
                <Skeleton width={280} height={20} />
                <Skeleton width={200} height={20} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default AllProducts;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const EmptyDiv = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  text-align: center;
  border-radius: 6px;
  ${mobile({ paddingBottom: "20px" })}
`;
const EmptyMessage = styled.h1`
  width: 300px;
  height: 300px;
  margin: auto;
  text-align: center;
  border-radius: 6px;
`;
const EmptyMessageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;
const Filter = styled.div`
  /* margin: 20px; */
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  font-size: 17px;
  padding: 6px;
  margin-left: 9px;
  border: 1.5px solid teal;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  outline: none;
  width: 100px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  font-size: 17px;
`;
const Container = styled.div`
  width: 90%;
  padding: 20px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  ${mobile({ justifyContent: "center" })}
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 50px 0px;
  text-transform: uppercase;
  color: #ff8147;
`;
