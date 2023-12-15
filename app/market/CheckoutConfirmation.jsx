import {
  Avatar,
  AvatarGroup,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Stack,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { soleilContext } from "./cartContext";
import Link from "next/link";
import { Cancel } from "@mui/icons-material";
import Confetti from "react-confetti";

const CheckoutConfirmation = ({ open, setOpen }) => {
  const { state, checkout } = useContext(soleilContext);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [state.cart]);

  const handleCheckout = () => {
    checkout();
    setOpen(false);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <Dialog open={Boolean(open)} onClose={() => setOpen(false)}>
        <DialogTitle>
          Do you confirm that you're going to pay {total} Pi for the following
          {state.cart.length > 0 ? " product" : " products"}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {total} Pi will be deducted from your account balance and if you
            don't have enough fund on your account you will be redirected to
            deposit page?
          </DialogContentText>
          <AvatarGroup>
            {state.cart.map((pro) => (
              <Avatar key={pro.id}>
                <img src={pro.image} />
              </Avatar>
            ))}
          </AvatarGroup>
        </DialogContent>
        <DialogActions>
          <button
            className="px-3 py-2 rounded-lg bg-blue-500"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-3 py-2 rounded-lg bg-green-500"
            onClick={handleCheckout}
          >
            Confirm
          </button>
        </DialogActions>
      </Dialog>
      <Drawer
        anchor="bottom"
        open={Boolean(isOpen)}
        onClose={() => setIsOpen(false)}
        className="absolute top-1/2 left-1/2  text-center"
      >
        {isOpen && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={100}
          />
        )}
        <Box className="h-screen w-[100%] mt-[250px] relative">
          <Cancel
            onClick={() => setIsOpen(false)}
            className="absolute -top-[230px] right-2"
          />

          <div className="mb-[20px]">
            congratulation U have successfull paid your order, wait for seller
            confirmation and shippment
          </div>
          <div className="mb-[20px]">
            Now u can track status of your orders here
          </div>
          <Link
            href="/market/orders"
            className="px-4 py-2 rounded-lg mt-[20px] w-[150px] mx-auto bg-yellow-500"
          >
            View My Orders
          </Link>
        </Box>
      </Drawer>
    </div>
  );
};

export default CheckoutConfirmation;
