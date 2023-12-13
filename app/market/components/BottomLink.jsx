import { Badge, BottomNavigationAction } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { soleilContext } from "../cartContext";

const BottomLink = ({ nav }) => {
  const { cart } = useContext(soleilContext);

  return (
    <Link href={nav.href}>
      <BottomNavigationAction
        label={nav.name}
        icon={
          nav.name === "My Chats" ? (
            <Badge badgeContent={22} color="secondary">
              {nav.icon}
            </Badge>
          ) : nav.name === "Cart" ? (
            <Badge badgeContent={cart.length} color="success">
              {nav.icon}
            </Badge>
          ) : (
            nav.icon
          )
        }
      />
    </Link>
  );
};

export default BottomLink;
