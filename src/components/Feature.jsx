import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Feature = ({ item, loading }) => {
  const dispatch = useDispatch();
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
    <>
      {loading ? (
        <Skeleton width="280px" height="200px" count={1} style={{margin:"12px 0px"}}/>
      ) : (
        <Container>
          <Circle />
          <Image src={item.img} />
          <Info>
            <Icon onClick={handleAddToCart}>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Container>
      )}
    </>
  );
};

export default Feature;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 12px 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  mix-blend-mode: darken;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
