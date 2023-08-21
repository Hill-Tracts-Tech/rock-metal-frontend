import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      <Heading>Categories</Heading>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 50px 0px 20px 0px;
  text-transform: uppercase;
  color: teal;
  ${mobile({ fontSize: "20px", padding: "12px 0px 5px 0px" })}
`;
