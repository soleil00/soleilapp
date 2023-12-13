"use client";

import {
  BatteryChargingFullRounded,
  CarCrash,
  CatchingPokemon,
  Construction,
  ElectricBike,
  HdrEnhancedSelect,
  House,
  Shop,
  ShowerSharp,
} from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProductList from "./ProductList";
import Furnitures from "./categories/Furnitures";
import Electronics from "./categories/Electronics";
import Clothing from "./categories/Clothing";
import ToysAndGames from "./categories/ToysAndGames";
import Sports from "./categories/Sports";
import Jewelry from "./categories/Jewelry";
import HealthAndBeauty from "./categories/HealthAndBeauty";
import HomeAppliances from "./categories/HomeAppliances";
import ConstructionMaterials from "./categories/ConstructionMaterials";
import GroceriesAndFood from "./categories/GroceriesAndFood";

const ProductCategories = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <TabContext value={tabValue}>
      <Box sx={{ borderColor: "divider", width: "100%", borderBottom: 1 }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          allowScrollButtonsMobile
          textColor="secondary"
          style={{ fontSize: "small" }}
        >
          <Tab value="1" label="All" style={{ minWidth: "initial" }} />
          <Tab value="2" label="Electronic" style={{ minWidth: "initial" }} />
          <Tab value="12" label="Furnitures" style={{ minWidth: "initial" }} />
          <Tab
            value="11"
            label="Real Estates"
            style={{ minWidth: "initial" }}
          />
          <Tab value="3" label="Clothing" style={{ minWidth: "initial" }} />
          <Tab
            value="4"
            label="Kitchen appliances"
            style={{ minWidth: "initial" }}
          />
          <Tab
            value="5"
            label="Health & Beauty"
            style={{ minWidth: "initial" }}
          />
          <Tab value="6" label="Sports" style={{ minWidth: "initial" }} />
          <Tab value="7" label="Toys & Games" style={{ minWidth: "initial" }} />
          <Tab value="8" label="Jewelry" style={{ minWidth: "initial" }} />
          <Tab
            value="9"
            label="Groceries & food"
            style={{ minWidth: "initial" }}
          />
          <Tab
            value="10"
            label="Construction"
            style={{ minWidth: "initial" }}
          />
        </Tabs>
        <TabPanel value="1">
          <ProductList />
        </TabPanel>
        <TabPanel value="2">
          <Electronics />
        </TabPanel>
        <TabPanel value="3">
          <Clothing />
        </TabPanel>
        <TabPanel value="4">
          <HomeAppliances />
        </TabPanel>
        <TabPanel value="5">
          <HealthAndBeauty />
        </TabPanel>
        <TabPanel value="6">
          <Sports />
        </TabPanel>
        <TabPanel value="7">
          <ToysAndGames />
        </TabPanel>
        <TabPanel value="8">
          <Jewelry />
        </TabPanel>
        <TabPanel value="9">
          <GroceriesAndFood />
        </TabPanel>
        <TabPanel value="10">
          <ConstructionMaterials />
        </TabPanel>
        <TabPanel value="11">
          <CatchingPokemon />
        </TabPanel>
        <TabPanel value="12">
          <Furnitures />
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default ProductCategories;
