import React, { useContext } from "react";
import { soleilContext } from "../../cartContext";
import { Paper, Stack, Typography } from "@mui/material";
import OrderCard from "../OrderCard";

const PendingOrders = () => {
  const { state } = useContext(soleilContext);

  return (
    <div>
      PendingOrders {state.orders.length}
      {state.orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default PendingOrders;
