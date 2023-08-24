import styled from "styled-components";
import { mobile } from "../responsive";

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over ৳ 50</Container>;
};

export default Announcement;

const Container = styled.div`
  margin-top: 95px;
  position: relative;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ marginTop: "70px" })}
`;
