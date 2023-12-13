import {
  AccountBox,
  ChatBubble,
  ChatTwoTone,
  Home,
  MenuOutlined,
  ShoppingCart,
} from "@mui/icons-material";

export const marketnav = [
  { name: "Home", icon: <Home />, href: "/market" },
  { name: "Cart", icon: <ShoppingCart />, href: "/market/cart" },
  { name: "My Chats", icon: <ChatTwoTone />, href: "/market/chats" },
  { name: "My Orders", icon: <MenuOutlined />, href: "/market/orders" },
  { name: "Account", icon: <AccountBox />, href: "/market/account" },
];
