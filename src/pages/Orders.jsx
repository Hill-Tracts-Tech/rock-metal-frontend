import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import axios from "axios";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import { mobile } from "../responsive";
import img from "../assets/sad.png";

const Orders = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id || null;

  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [isGuestOrder, setIsGuestOrder] = useState(false);

  useEffect(() => {
    if (userId) {
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
    }
  }, [userId]);

  const handleGuestOrderSubmit = async (e) => {
    e.preventDefault();
    if (!orderId) {
      toast.error("Please enter a valid Order ID.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/orders/${orderId}`
      );
      setOrders([res.data.data]);
      setIsGuestOrder(true);
      setLoading(false);
    } catch (error) {
      toast.error("Order not found!");
      setLoading(false);
    }
  };

  return (
    <Container>
      <OrdersContainer>
        <Heading>Your Orders</Heading>
        {!userId && !isGuestOrder && (
          <GuestOrderForm onSubmit={handleGuestOrderSubmit}>
            <OrderInput
              type="text"
              placeholder="Enter your Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <SubmitButton type="submit">Find Order</SubmitButton>
          </GuestOrderForm>
        )}

        {isLoading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </>
        ) : (
          <>
            {orders.length === 0 ? (
              <EmptyDiv>
                <EmptyMessageImg src={img} alt="EmptyProduct" />
                <EmptyMessage>No orders found.</EmptyMessage>
              </EmptyDiv>
            ) : (
              <OrdersGrid>
                {orders.map((order) => (
                  <OrderCard key={order._id}>
                    {order.products.map((product) => (
                      <ProductInfo key={product._id}>
                        <Image src={product.img} alt={product.title} />
                        <Details>
                          <ProductTitle>{product.title}</ProductTitle>
                          <InfoRow>
                            <strong>Size:</strong> {product.size || "N/A"}
                          </InfoRow>
                          <InfoRow>
                            <strong>Color:</strong> {product.color || "N/A"}
                          </InfoRow>
                          <InfoRow>
                            <strong>Payment:</strong> {order.paymentStatus}
                          </InfoRow>
                          <InfoRow>
                            <strong>Shipping:</strong> {order.shippingStatus}
                          </InfoRow>
                          <InfoRow>
                            <strong>Quantity:</strong> {product.quantity}
                          </InfoRow>
                          <TotalPrice>
                            ৳{" "}
                            {product.quantity * product.price +
                              (order.deliveryCharge || 120)}
                          </TotalPrice>
                        </Details>
                      </ProductInfo>
                    ))}
                  </OrderCard>
                ))}
              </OrdersGrid>
            )}
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
  padding-top: 40px;
  ${mobile({ marginTop: "100px" })}
`;

const OrdersContainer = styled.div`
  background: #f9fafb;
  border-radius: 16px;
  padding: 40px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); */
  ${mobile({ padding: "20px" })}
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const Details = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const InfoRow = styled.p`
  margin: 5px 0;
  color: #555;
`;

const StatusBadge = styled.span``;

const TotalPrice = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #4ade80;
`;

const GuestOrderForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const OrderInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
  flex: 1;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #4ade80;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #3cb371;
  }
`;

const EmptyDiv = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const EmptyMessageImg = styled.img`
  width: 60%;
  margin-bottom: 20px;
`;

const EmptyMessage = styled.h1`
  font-size: 24px;
  color: #555;
`;

const SkeletonCard = styled(Skeleton)`
  height: 250px;
  border-radius: 12px;
`;
