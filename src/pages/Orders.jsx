import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest, userRequest } from "../requestMethods";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import { mobile } from "../responsive";

const Orders = () => {
  const { _id: userId } = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders/find/${userId}`);
        setOrders(res.data.data);
        setLoading(false);
      } catch (error) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    };
    getOrders();
  }, [userId]);

  console.log(orders, "orders");

  return (
    <Container>
      <OrdersContainer>
        <Heading>Your Orders</Heading>
        {isLoading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <Skeleton height={100} />
              </div>
            ))}
          </>
        ) : (
          <>
            {orders.map((order) => (
              <div key={order._id}>
                <div>
                  {/* <p>{order?._id}</p>
                  <p>{order?.total_amount}</p>
                  <p>{order?.paymentStatus}</p>
                  <p>{order?.products[0].title}</p>
                  <p>{order?.products.length}</p>
                  <img
                    style={{ width: "80px" }}
                    src={order?.products[0].img}
                    alt="product"
                  /> */}
                  {order.products.map((product) => {
                    return (
                      <div key={product._id}>
                        <SubContainer>
                          <ProductDetails>
                            <Img src={product.img} alt="product" />
                            <div>
                              <Title>{product.title}</Title>
                              <p>Size: {product?.size}</p>
                              <p>Color: {product?.color}</p>
                            </div>
                          </ProductDetails>
                          <ProductItem>
                            <Title1>Payment</Title1>
                            <small>{order?.paymentStatus}</small>
                          </ProductItem>
                          <ProductItem2>
                            <Title1>Shipping Address</Title1>
                            <small>
                              {order?.data?.cus_add1 || order?.data?.cus_add2}
                            </small>
                          </ProductItem2>
                          <ProductItem2>
                            <Title1>Shipping Status</Title1>
                            <small>{order?.shippingStatus}</small>
                          </ProductItem2>
                          <Flex>
                            <div>
                              <Title1 style={{ fontSize: "15px" }}>
                                Amount
                              </Title1>
                              <p> ৳ {product.price}</p>
                            </div>
                            <div>
                              <p>
                                <Bold>Qty:</Bold>
                                {product.quantity}
                              </p>
                            </div>
                          </Flex>
                          <ProductItem1>
                            <Bold>Total + Delivery:</Bold>
                            <p>
                              ৳{" "}
                              {product.quantity * product.price +
                                order?.deliveryCharge}
                            </p>
                          </ProductItem1>
                        </SubContainer>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </>
        )}
      </OrdersContainer>
    </Container>
  );
};

export default Orders;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const OrdersContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 50px;
  ${mobile({ padding: "0px 0 50px 0" })}
`;
const Heading = styled.h2`
  margin-bottom: 40px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 0.5px solid gray;
  ${mobile({ display: "grid", gridTemplateColumns: "auto auto" })}
`;
const ProductDetails = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  flex: 2;
`;
const Img = styled.img`
  width: 80px;
`;
const Title = styled.h3`
  ${mobile({ fontSize: "14px" })}
`;
const Title1 = styled.h4`
  ${mobile({ fontSize: "13px" })}
`;
const ProductItem = styled.div`
  flex: 1;
  ${mobile({ marginBottom: "0px" })}
`;
const ProductItem2 = styled.div`
  flex: 1;
  ${mobile({ marginBottom: "0px", marginTop: "8px" })}
`;
const ProductItem1 = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: "left", marginTop: "8px" })}
`;
const Flex = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginTop: "10px", display: "flex", gap: "70px" })}
`;

const Bold = styled.p`
  font-weight: 800;
  ${mobile({ fontWeight: "800" })};
`;
