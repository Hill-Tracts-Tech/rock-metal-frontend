import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  border: 1.5px solid teal;
  transition: ease 0.5s;
  &:hover {
    background-color: white;
    color: teal;
  }
`;
