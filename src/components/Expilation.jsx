import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import service from "../assets/ExpilationIcon/1.png";
import security from "../assets/ExpilationIcon/3.png";
import carbon_security from "../assets/ExpilationIcon/2.png";
import delivery from "../assets/ExpilationIcon/4.png";
import quality from "../assets/ExpilationIcon/5.png";
import trust from "../assets/ExpilationIcon/6.png";

const Expilation = () => {
  return (
    <Container>
      <Info>
        <Title>
          WHY WE ARE BEST FOR <br /> YOU IN ONLINE AND <br /> OFFLINE
        </Title>
        <SmallSize>
          Bangladesh, we could wax lyrical about our positive qualities.
          Instead, to make this information clearer, we’ve highlighted the six
          prioritized features that we feel makes us a cut above the rest. When
          it comes to what makes us the foremost online best seller in
        </SmallSize>
        <AlignBox>
          <Box>
            <Image src={service} />
            <TinyTitle>CUSTOMER SERVICE</TinyTitle>
            <SmallSize1>
              Customer service amplifies sales efforts. We engage with potential
              buyers, offer insights, and navigate transactions. Your feedback
              is invaluable, shaping our approach. Through impeccable service,
              we cultivate buyer relationships, enhancing satisfaction and
              driving success.
            </SmallSize1>
          </Box>
          <Box>
            <Image src={carbon_security} />
            <TinyTitle>SECURITY</TinyTitle>
            <SmallSize1>
              We safeguard your interests, data, and transactions. Employing
              advanced measures, we ensure a trusted environment. Our robust
              strategies protect against risks, fostering confidence and
              enabling smooth, secure interactions with peace of mind.
            </SmallSize1>
          </Box>
          <Box>
            <Image src={security} />
            <TinyTitle>BEST VALUE</TinyTitle>
            <SmallSize1>
              We prioritize your needs, offering optimal solutions at
              competitive rates. Our commitment to quality and affordability
              ensures you receive the best value proposition, empowering your
              business success and forging lasting partnerships.
            </SmallSize1>
          </Box>
          <Box>
            <Image src={delivery} />
            <TinyTitle>DELIVERY INSURANCE</TinyTitle>
            <SmallSize1>
              Our comprehensive coverage mitigates risks during transit,
              providing financial protection against loss or damage. With this
              added layer of security, you can ensure customer satisfaction and
              maintain your reputation for reliable deliveries.
            </SmallSize1>
          </Box>
          <Box>
            <Image src={quality} />
            <TinyTitle>HIGHEST QUALITY</TinyTitle>
            <SmallSize1>
              Embrace excellence as a seller with our highest quality products.
              Meticulously sourced and crafted, our offerings stand out for
              their superior performance and durability. Elevate customer
              satisfaction by delivering items that exemplify uncompromising
              quality, building trust and loyalty.
            </SmallSize1>
          </Box>
          <Box>
            <Image src={trust} />
            <TinyTitle>TRUST</TinyTitle>
            <SmallSize1>
              We prioritize transparency, reliability, and consistency. By
              delivering on promises and upholding ethical practices, we build
              lasting relationships with customers. Our commitment to trust
              ensures mutually beneficial interactions and fosters a loyal
              customer base.
            </SmallSize1>
          </Box>
        </AlignBox>
      </Info>
    </Container>
  );
};

export default Expilation;
const Container = styled.div`
  width: 100%;
  background-color: #f5fbfd;
`;
const Info = styled.div`
  width: 90%;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 20px;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 900;
  text-align: left;
  ${mobile({ fontSize: "20px" })}
`;
const TinyTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 20px auto;
`;

const SmallSize = styled.div`
  font-size: 14px;
  width: 40%;
  text-align: left;
  margin-top: 10px;
  ${mobile({ width: "100%" })}
`;
const SmallSize1 = styled.div`
  font-size: 13px;
  text-align: left;
  margin-top: 10px;
  padding-right: 25px;
`;
const Box = styled.div`
  border: 1px solid rgb(226 232 240);
  border-radius: 15px;
  padding: 30px 20px;
  border-width: thin;
`;
const Image = styled.img`
  mix-blend-mode: darken;
`;
const AlignBox = styled.div`
  display: grid;
  margin-top: 40px;
  margin-bottom: 40px;
  grid-template-columns: auto auto auto;
  gap: 40px;
  ${mobile({ gridTemplateColumns: "auto" })}
`;
