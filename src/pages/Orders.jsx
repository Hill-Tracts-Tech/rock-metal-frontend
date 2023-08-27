import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Orders = () => {
  const { _id: userId } = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders/find/${userId}`);
        setOrders(res.data.data);
      } catch {}
    };
    getOrders();
  }, [userId]);

  return (
    <Container>
      <OrdersContainer>
        <Heading>Your Orders</Heading>
        {orders.map((order) => (
          <div key={order._id}>
            <div>
              {order.products.map((product) => {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                        margin: "10px 0",
                        borderBottom: "0.5px solid gray",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          gap: "20px",
                          flex: 2,
                        }}
                      >
                        <img
                          style={{ width: "80px" }}
                          src={product.img}
                          alt="product"
                        />
                        <div>
                          <h3>{product.title}</h3>
                          <p>Size: {product?.size}</p>
                          <p>Color: {product?.color}</p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4>Payment</h4>
                        <small>{order.status}</small>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4>Shipping Address</h4>
                        <small>{order?.address?.present}</small>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4>Shipping Status</h4>
                        <small>Pending</small>
                      </div>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <h4>Amount</h4>
                        <p>৳ {product.price}</p>
                        <p>Qty: {product.quantity}</p>
                        <p>Total: ৳ {product.quantity * product.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
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
`;
const Heading = styled.h2`
  margin-bottom: 40px;
`;
