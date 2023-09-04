import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const payemnt = location.pathname.split("/").includes("payment");

  return (
    <Container style={{ display: payemnt ? "none" : "" }}>
      <Top>
        <Left>
          <Logo>ROCK METAL</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Link to="https://www.facebook.com/profile.php?id=100063477416591&mibextid=9R9pXO">
                <Facebook />
              </Link>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Link to="/">
                <Instagram />
              </Link>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Link to="/">
                <Twitter />
              </Link>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Link to="/">
                <Pinterest />
              </Link>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <Link to="/"> Home</Link>
            <Link to="/cart"> Cart</Link>
            <Link to="/"> Man Fashion</Link>
            <Link to="/"> Woman Fashion</Link>
            <Link to="/"> Accessories</Link>
            <Link to="/">My Account</Link>
            <Link to="/wishlist"> Wishlist</Link>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> University Building,
            Highway Road
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +8801XXXXXXXXX
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            contact@rockmetal.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

        <Image>
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2020/06/jongolei-mongol.jpg"
            alt=""
          />
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2020/06/artcell-tshirt.jpg"
            alt=""
          />
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2020/07/bandarban-sublimation-tshirt.jpg"
            alt=""
          />
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2020/01/kath-golaper-sadar-maya.jpg"
            alt=""
          />
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2019/04/jadur-shohor-green.jpg"
            alt=""
          />
          <img
            style={{ width: "90px", height: "90px" }}
            src="https://shop.adarbepari.com/wp-content/uploads/2020/09/bahanno-tash.jpg"
            alt=""
          />
        </Image>
      </Top>
      <Bottom>
        <Hr></Hr>
        <p>© 2023 Rock Metal. All Rights Reserved. </p>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Top = styled.div`
  width: 90%;
  margin: 150px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const Container = styled.div``;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  a {
    color: white;
  }
`;

const Center = styled.div`
  padding: 20px;
  margin-right: 50px;
  ${mobile({ display: "none" })}
  a {
    text-decoration: none;
    color: black;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ marginLeft: "-40px" })}
`;
const Image = styled.div`
  flex: 1;
  flex-wrap: wrap;
  padding: 20px;

  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const Bottom = styled.div`
  width: 90%;
  margin: 30px auto;
  ${mobile({ textAlign: "center" })}
`;
const Hr = styled.hr`
  background-color: #afafaf;
  border: none;
  height: 1px;
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
