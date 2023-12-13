"use client";

import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ApprovedOrders from "./status/ApprovedOrders";
import PendingOrders from "./status/PendingOrders";
import ShippedOrders from "./status/ShippedOrders";
import UnratedOrders from "./status/UnratedOrders";

const Orders = () => {
  const [value, setValue] = useState("pending");

  const handleNewTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ width: { xs: "100%" } }}>
          <Tabs
            value={value}
            onChange={handleNewTab}
            scrollButtons="auto"
            textColor="secondary"
            variant="scrollable"
            indicatorColor="secondary"
            allowScrollButtonsMobile
          >
            <Tab value="pending" label="Pending" />
            <Tab value="approved" label="Approved" />
            <Tab value="shipped" label="Shipped" />
            <Tab value="unrated" label="UnRated" />
          </Tabs>
          <TabPanel value="pending">
            {" "}
            <PendingOrders />{" "}
          </TabPanel>
          <TabPanel value="approved">
            {" "}
            <ApprovedOrders />{" "}
          </TabPanel>
          <TabPanel value="shipped">
            {" "}
            <ShippedOrders />{" "}
          </TabPanel>
          <TabPanel value="unrated">
            {" "}
            <UnratedOrders />{" "}
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
};

export default Orders;
