import {
  AccountBox,
  ChatBubble,
  ChatTwoTone,
  Home,
  MenuOutlined,
  ShoppingCart,
  Add,
} from "@mui/icons-material";

export const marketnav = [
  { name: "Home", icon: <Home />, href: "/market" },
  { name: "Cart", icon: <ShoppingCart />, href: "/market/cart" },
  {
    name: "Publish",
    icon: <Add color="secondary" fontSize="large" />,
    href: "/market/publish",
  },
  { name: "My Chats", icon: <ChatTwoTone />, href: "/market/chats" },
  { name: "Account", icon: <AccountBox />, href: "/market/account" },
];
