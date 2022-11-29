import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  // const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const ress = await axios.post("http://localhost:5000/api/order", {
          userId: "6305c9b87c26d62f20d08f7a",
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: "2",
          })),
          amount: cart.total,
          address: data.card.address_city,
        });
        console.log(ress);
        setOrderId(ress.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Error.`}
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
