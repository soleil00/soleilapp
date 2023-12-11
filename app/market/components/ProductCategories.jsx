"use client";

import {
  BatteryChargingFullRounded,
  CarCrash,
  CatchingPokemon,
  Construction,
  HdrEnhancedSelect,
  House,
  ShowerSharp,
} from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProductList from "./ProductList";

const ProductCategories = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <TabContext value={tabValue}>
      <Box sx={{ borderColor: "divider", width: "100%", bottomBorder: 1 }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          allowScrollButtonsMobile
          textColor="secondary"
        >
          <Tab value="1" label="All" />
          <Tab value="2" label="Electronic" />
          <Tab value="12" label="Vehicles" />
          <Tab value="11" label="Real Estates" />
          <Tab value="3" label="Clothing" />
          <Tab value="4" label="Kitchen appliances" />
          <Tab value="5" label="Health & Beauty" />
          <Tab value="6" label="Sports" />
          <Tab value="7" label="Toys & Games" />
          <Tab value="8" label="Jewelry" />
          <Tab value="9" label="Groceries & food" />
          <Tab value="10" label="Construction" />
        </Tabs>
        <TabPanel value="1">
          {" "}
          <ProductList />{" "}
        </TabPanel>
        <TabPanel value="2">programming in react</TabPanel>
        <TabPanel value="3">jungle is the best</TabPanel>
        <TabPanel value="4">
          {" "}
          <House />{" "}
        </TabPanel>
        <TabPanel value="5">
          <BatteryChargingFullRounded />{" "}
        </TabPanel>
        <TabPanel value="6">
          <ShowerSharp />{" "}
        </TabPanel>
        <TabPanel value="7">
          hen sher <HdrEnhancedSelect />{" "}
        </TabPanel>
        <TabPanel value="8">
          hen sher <HdrEnhancedSelect />{" "}
        </TabPanel>
        <TabPanel value="9">
          hen sher <HdrEnhancedSelect />{" "}
        </TabPanel>
        <TabPanel value="10">
          <Construction />{" "}
        </TabPanel>
        <TabPanel value="11">
          <CatchingPokemon />{" "}
        </TabPanel>
        <TabPanel value="12">
          <CarCrash />{" "}
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default ProductCategories;
