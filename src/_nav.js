import React from "react";
import CIcon from "@coreui/icons-react";
import { cilNotes, cilPuzzle } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    badge: {
      color: "info",
    },
  },

  {
    component: CNavItem,
    name: "Agents",
    to: "/pages/agents",
  },
  {
    component: CNavItem,
    name: "Exchanges",
    to: "/pages/exchanges",
  },
  {
    component: CNavItem,
    name: "Orders",
    to: "/pages/orders",
  },
  {
    component: CNavItem,
    name: "Materials",
    to: "/pages/materials",
  },
  {
    component: CNavItem,
    name: "Transit",
    to: "/pages/transit",
  },
  {
    component: CNavItem,
    name: "Users",
    to: "/pages/users",
  },
];

export default _nav;
