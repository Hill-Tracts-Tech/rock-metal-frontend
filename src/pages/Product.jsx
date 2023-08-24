import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct, updateProductQuantity } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    dispatch(
      updateProductQuantity({ productId: product._id, quantity: quantity })
    );
  };

  const handleClick = () => {
    if (user) {
      try {
        const selectedColor =
          color || (product.color && product.color[0]) || "";
        const selectedSize = size || (product.size && product.size[0]) || "";
        const data = {
          ...product,
          quantity: quantity,
          color: selectedColor,
          size: selectedSize,
          email: user?.email,
        };
        dispatch(addProduct(data));
        toast.success("Added to cart successfully!");
      } catch (error) {
        toast.error("Something went wrong! May be occurred ", error);
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <Container>
      <Toaster />
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc
              ? product.desc
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, ab. Quisquam tempora adipisci vitae saepe"}
          </Desc>
          <Price>৳ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  isSelected={c === color}
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <QuantityActionButton>
                <Remove onClick={() => handleQuantity("dec")} />
              </QuantityActionButton>
              <Amount>{quantity}</Amount>
              <QuantityActionButton>
                <Add onClick={() => handleQuantity("inc")} />
              </QuantityActionButton>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <RelatedProducts category={product.categories} />
      <Footer />
    </Container>
  );
};

export default Product;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "3px solid teal" : "")};
`;

const FilterSize = styled.select`
  font-size: 17px;
  padding: 6px;
  margin-left: 9px;
  border: 1.5px solid teal;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  outline: none;
  width: 100px;
`;

const FilterSizeOption = styled.option`
  font-size: 17px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const QuantityActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 4px;
  border: none;
  border-radius: 100%;
  /* background-color: #3c3d3e; */
  color: #3c3d3e;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  border: 1.5px solid teal;
  font-size: 16px;
  background-color: teal;
  border-radius: 12px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    background-color: #fff;
    color: teal;
  }
`;
