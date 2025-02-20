import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PrintIcon from "@material-ui/icons/Print";
import GetAppIcon from "@material-ui/icons/GetApp";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import axios from "axios";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const SuccessHeader = styled.div`
  background-color: #f0f9f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2e7d32;
  font-size: 1.8rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const OrderSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SummaryBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;

  p:first-child {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p:last-child {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #f5f5f5;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.4rem;
    margin: 0;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ProductDetails = styled.div`
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const TotalSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .total {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #eee;
  }
`;

const Note = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;

  h4 {
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &.primary {
    background-color: #1976d2;
    color: white;
    border: none;

    &:hover {
      background-color: #1565c0;
    }
  }

  &.secondary {
    background-color: white;
    color: #1976d2;
    border: 1px solid #1976d2;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const OrderReceive = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/${orderId}`
        );
        setOrder(res?.data?.data);
      } catch (err) {
        setError("Failed to fetch order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!order) return <Container>Order not found.</Container>;

  return (
    <Container>
      <SuccessHeader>
        <Title>
          <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 30 }} />
          Thank you. Your order has been received.
        </Title>
      </SuccessHeader>

      <OrderSummaryGrid>
        <SummaryBox>
          <p>Order Number</p>
          <p>{order.trackingId}</p>
        </SummaryBox>
        <SummaryBox>
          <p>Date</p>
          <p>{new Date(order.createdAt).toLocaleDateString()}</p>
        </SummaryBox>
        <SummaryBox>
          <p>Total</p>
          <p>{order.total_amount}৳</p>
        </SummaryBox>
        <SummaryBox>
          <p>Payment Method</p>
          <p>Cash On Delivery</p>
        </SummaryBox>
      </OrderSummaryGrid>

      <Card>
        <CardHeader>
          <h2>Order Details</h2>
        </CardHeader>
        <CardContent>
          <ProductList>
            {order.products.map((product, index) => (
              <ProductItem key={index}>
                <ProductDetails>
                  <h4>{product.title}</h4>
                  <p>
                    Size: {product.size} × Qty: {product.quantity}
                  </p>
                </ProductDetails>
                <Price>{product.price}৳</Price>
              </ProductItem>
            ))}
          </ProductList>

          <TotalSection>
            <div>
              <span>Subtotal</span>
              <span>{order.total_amount - order.deliveryCharge}৳</span>
            </div>
            <div>
              <span>Shipping (Flat rate)</span>
              <span>{order.deliveryCharge}৳</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{order.total_amount}৳</span>
            </div>
          </TotalSection>

          {order.note && (
            <Note>
              <h4>Note:</h4>
              <p>{order.note}</p>
            </Note>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Billing Address</h2>
        </CardHeader>
        <CardContent>
          <p>
            {order.guest.address.street},
            <br />
            {order.guest.address.city}, {order.guest.address.postcode}
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong>Phone: </strong>
            {order.guest.phone}
          </p>
        </CardContent>
      </Card>

      <ButtonGroup>
        <Button className="primary" onClick={() => window.print()}>
          <PrintIcon /> Print Invoice
        </Button>
        <Button
          className="secondary"
          onClick={() =>
            (window.location.href = `/download-invoice/${order._id}`)
          }
        >
          <GetAppIcon /> Download Invoice
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default OrderReceive;
