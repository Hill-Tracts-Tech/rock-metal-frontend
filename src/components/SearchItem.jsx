import { Close } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchItem = ({ searchPopup, setSearchPopup, searchValue }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  console.log(searchValue, "value");

  const ProfileTogglePopup = () => {
    setSearchPopup(false);
  };

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://api.rockmetaltshirt.com/api/products/?searchTerm=${searchValue}`
        );
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <ProfileOverlay isOpenProfile={searchPopup}>
        <ProfilePopupContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ margin: "25px 0" }}> Your Searched Products</h2>
            <CloseBtn onClick={ProfileTogglePopup}>
              <Close />
            </CloseBtn>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {products?.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  {products.map((product) => (
                    <Link
                      to={`/product/${product._id}`}
                      onClick={() => setSearchPopup(false)}
                      style={{
                        width: "250px",
                        minHeight: "200px",
                        border: "1px solid",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <img
                        style={{ height: "100px", width: "80px" }}
                        src={product?.img}
                        alt=""
                      />
                      <h2>{product?.title}</h2>
                      <p>{product?.desc}</p>
                      <small style={{ marginTop: "25px" }}>
                        Price: {product.price}
                      </small>
                    </Link>
                  ))}
                </div>
              ) : (
                <div>
                  <h2>No Item Found</h2>
                </div>
              )}
            </div>
          )}
        </ProfilePopupContent>
      </ProfileOverlay>
    </div>
  );
};

export default SearchItem;

const ProfileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpenProfile ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 99999999;
`;

const ProfilePopupContent = styled.div`
  width: 80%;
  height: 80vh; /* Limit the maximum height of the modal content */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds viewport height */
  margin: auto;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999999999999999;
  a {
    text-decoration: none;
    color: black;
  }
`;

const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: #ececec;
`;
