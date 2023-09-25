import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
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
                  {order.products.map((product) => {
                    return (
                      <div key={product._id}>
                        <SubContainer>
                          <ProductItem1>
                            <Img src={product.img} alt="product" />
                            <MobTil>{product.title}</MobTil>
                          </ProductItem1>
                          <ProductItem>
                            <Title>{product.title}</Title>
                            <p>
                              <B>Size: </B>
                              {product?.size}
                            </p>
                            <p>
                              <B> Color: </B>
                              {product?.color}
                            </p>
                          </ProductItem>
                          <ProductItem>
                            <Bold>Payment</Bold>
                            <small>{order?.paymentStatus}</small>
                          </ProductItem>
                          <ProductItem>
                            <Bold>
                              Shipping
                              <Br /> Address
                            </Bold>
                            <small>
                              {order?.data?.cus_add1 || order?.data?.cus_add2}
                            </small>
                          </ProductItem>
                          <ProductItem>
                            <Bold>
                              Shipping
                              <Br /> Status
                            </Bold>
                            <small>{order?.shippingStatus}</small>
                          </ProductItem>

                          <ProductItem>
                            <Bold>Amount</Bold>
                            <p> ৳ {product.price}</p>
                          </ProductItem>
                          <ProductItem>
                            <Bold>Quantity:</Bold>
                            <p style={{ marginLeft: "9px" }}>
                              {product.quantity}
                            </p>
                          </ProductItem>

                          <ProductItem>
                            <Bold>Total + Delivery:</Bold>
                            <p>
                              ৳{" "}
                              {product.quantity * product.price +
                                order?.deliveryCharge}
                            </p>
                          </ProductItem>
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
  ${mobile({ paddingBottom: "80px" })}
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
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const Img = styled.img`
  width: 80px;
  ${mobile({ width: "120px" })}
`;
const Title = styled.h3`
  display: block;
  ${mobile({ display: "none" })}
`;

const MobTil = styled.h4`
  display: none;
  ${mobile({ display: "block", fontSize: "20px", margin: "10px 0" })}
`;
const ProductItem = styled.div`
  flex: 1;
  justify-content: center;

  align-items: center;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0px",
  })}
`;
const ProductItem1 = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${mobile({
    display: "flex",
    justifyCntent: "center",
    alignItems: "center",
    marginBottom: "0px",
    flexDirection: "column",
  })}
`;

const Bold = styled.p`
  font-weight: 800;
  ${mobile({ fontWeight: "800" })};
`;
const B = styled.b`
  ${mobile({ fontWeight: "800" })};
`;
const Br = styled.br`
  display: block;
  ${mobile({ display: "none" })};
`;
