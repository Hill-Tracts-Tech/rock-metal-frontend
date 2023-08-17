import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";
import { sliderItems } from "../../data";
import styled from "styled-components";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { mobile } from "../../responsive";

export default function Slider() {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        {sliderItems.map((item) => (
          <SwiperSlide>
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ display: "block" })}
`;

const ImgContainer = styled.div`
  height: auto;
  width: 100%;
  flex: 1;
  ${mobile({ display: "block" })}
`;

const Image = styled.img`
  height: 80%;
  object-fit: contain;
  mix-blend-mode: darken;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ display: "block" })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border: 0.5px solid gray;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.5s;
  &:hover {
    background-color: lightblue;
  }
`;
