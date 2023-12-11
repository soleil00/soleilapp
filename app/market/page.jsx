import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProductList from "./components/ProductList";
import MarketHeader from "./components/MarketHeader";
import ProductCategories from "./components/ProductCategories";

const MarkertPlace = () => {
  return (
    <div>
      <div className="m-4">
        <Breadcrumbs separator={<NavigateNext />}>
          <Link href="/">Home</Link>
          <Link href="/market">Market</Link>
        </Breadcrumbs>
        <MarketHeader />
        {/* <ProductList /> */}
      </div>
      <ProductCategories />
    </div>
  );
};

export default MarkertPlace;
