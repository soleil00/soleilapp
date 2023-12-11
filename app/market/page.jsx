import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";
import ProductList from "./components/ProductList";
import MarketHeader from "./components/MarketHeader";

const MarkertPlace = () => {
  return (
    <div className="m-4">
      <Breadcrumbs separator={<NavigateNext />}>
        <Link href="/">Home</Link>
        <Link href="/market">Market</Link>
      </Breadcrumbs>
      <MarketHeader />
      <ProductList />
    </div>
  );
};

export default MarkertPlace;
