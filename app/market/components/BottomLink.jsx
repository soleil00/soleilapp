import { Badge, BottomNavigationAction,Avatar } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { soleilContext } from "../cartContext";

const BottomLink = ({ nav }) => {
  const { state } = useContext(soleilContext);

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
            <Badge badgeContent={state.cart.length} color="success">
              {nav.icon}
            </Badge>
          ) : nav.name === "Publish" ? (
            <Badge badgeContent={"Post"} color="success">
              <Avatar>{nav.icon}</Avatar>
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
