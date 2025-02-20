import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import axios from "axios";
import "./styles.css";
import styled from "styled-components";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { sliderItems } from "../../data";
import Skeleton from "react-loading-skeleton";

export default function Slider() {
  const [sliders, setSliders] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getSliders = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_PRODUCTION === "YES"
            ? "https://api.rockmetaltshirt.com/api/sliders"
            : "http://localhost:5000/api/sliders"
        );
        setSliders(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getSliders();
  }, []);
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <>
      {loading ? (
        <SliderSkeletor>
          <Skeleton width={700} height={400} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Skeleton width={600} height={30} />
            <Skeleton width={600} height={50} />
            <Skeleton width={100} height={40} />
          </div>
        </SliderSkeletor>
      ) : (
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
          className="mySwiper"
        >
          {(sliders.length > 0 ? sliders : sliderItems)?.map((item) => (
            <SwiperSlide>
              <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Link to="/all-products">
                    <Button>SHOW NOW</Button>
                  </Link>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

const SliderSkeletor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0 40px;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ display: "block" })}
  ${tablet({ display: "block" })}
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
  ${mobile({ fontSize: "35px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  border: 0.5px solid gray;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    color: teal;
  }
`;
