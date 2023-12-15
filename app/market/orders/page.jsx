"use client";

import { TabContext, TabPanel } from "@mui/lab";
import { Badge, Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import ApprovedOrders from "./status/ApprovedOrders";
import PendingOrders from "./status/PendingOrders";
import ShippedOrders from "./status/ShippedOrders";
import UnratedOrders from "./status/UnratedOrders";
import CancelledOrders from "./status/CancelledOrders";
import {
  Approval,
  Cancel,
  CancelPresentation,
  LocalShipping,
  Pending,
  PendingActions,
  RollerSkatingRounded,
} from "@mui/icons-material";
import { soleilContext } from "../cartContext";

const Orders = () => {
  const [value, setValue] = useState("pending");
  const { state } = useContext(soleilContext);

  const handleNewTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ width: { xs: "100%" } }}>
          <Tabs
            centered
            value={value}
            onChange={handleNewTab}
            scrollButtons="auto"
            textColor="secondary"
            variant="scrollable"
            indicatorColor="secondary"
            allowScrollButtonsMobile
          >
            <Tab
              value="pending"
              label="Pending"
              icon={
                <Badge badgeContent={state.orders.length}>
                  <PendingActions fontSize="small" />
                </Badge>
              }
            />
            <Tab
              value="cancelled"
              label="Cancelled"
              icon={<CancelPresentation fontSize="small" />}
            />
            <Tab
              value="approved"
              label="Approved"
              icon={<Approval fontSize="small" />}
            />
            <Tab
              value="shipped"
              label="Shipped"
              icon={<LocalShipping fontSize="small" />}
            />
            <Tab
              value="unrated"
              label="UnRated"
              icon={<RollerSkatingRounded fontSize="small" />}
            />
          </Tabs>
          <TabPanel value="pending">
            <PendingOrders />
          </TabPanel>
          <TabPanel value="cancelled">
            <CancelledOrders />
          </TabPanel>
          <TabPanel value="approved">
            <ApprovedOrders />
          </TabPanel>
          <TabPanel value="shipped">
            <ShippedOrders />
          </TabPanel>
          <TabPanel value="unrated">
            <UnratedOrders />
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
};

export default Orders;
