import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProductList from "./components/ProductList";
import MarketHeader from "./components/MarketHeader";
import ProductCategories from "./components/ProductCategories";
import MarketBottom from "./components/MarketBottom";
// import CartContextProvider from "./cartContext";

const MarkertPlace = () => {
  return (
    <div className="relative">
      <div className="m-4">
        <MarketHeader />
      </div>
      <ProductCategories />
    </div>
  );
};

export default MarkertPlace;
