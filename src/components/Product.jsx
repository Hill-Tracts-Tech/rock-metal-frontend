import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item[0]);
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...item,
        quantity: 1,
        color: item?.color[0],
        size: item?.size[0],
      })
    );
  };

  return (
    <Container>
      <Image src={item.img} alt="" />
      <Content>
        <Title>{item.title}</Title>
        <Description>
          {item?.desc ||
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
        </Description>
        <Icons>
          <ShoppingCartOutlined
            style={{ cursor: "pointer" }}
            onClick={handleAddToCart}
          />
          <Link to={`/product/${item._id}`} style={{ color: "black" }}>
            <SearchOutlined style={{ cursor: "pointer" }} />
          </Link>
          <FavoriteBorderOutlined style={{ cursor: "pointer" }} />
        </Icons>
      </Content>
    </Container>
  );
};

export default Product;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
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

const Description = styled.div`
  padding: 10px 0;
  text-align: center;
`;
const Icons = styled.div`
  display: flex;
  gap: 30px;
  padding: 15px 0;
  justify-content: center;
`;
const Content = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  height: 200px;
  z-index: 2;
  mix-blend-mode: darken;
`;
