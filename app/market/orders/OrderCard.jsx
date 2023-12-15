import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const OrderCard = ({ order }) => {
  return (
    <Paper
      elevation={0.2}
      className="px-2 py-1 mb-2 flex justify-between items-center"
    >
      <img
        src={order.image}
        alt="img"
        className="rounded-lg w-[50px] h-[50px]"
      />
      <Stack>
        <Typography fontSize="small">order number: {order.id}</Typography>
        <Typography fontSize="small">{order.name}</Typography>
        <Typography fontSize="small">{order.price} Pi</Typography>
      </Stack>
      <Stack>
        <Typography
          fontSize={"small"}
          className="px-3 py-[3px] mb-[3px] rounded-lg bg-green-500"
        >
          pending
        </Typography>
        <Typography
          fontSize={"small"}
          className="px-3 py-[3px] rounded-lg bg-red-400"
        >
          cancel
        </Typography>
      </Stack>
    </Paper>
  );
};

export default OrderCard;
