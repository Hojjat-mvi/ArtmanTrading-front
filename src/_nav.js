import { CNavItem, CNavGroup } from "@coreui/react";

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
    component: CNavGroup,
    name: "Orders & Shipments",
    to: "/pages/forms",
    items: [
      {
        component: CNavItem,
        name: "Buying Orders",
        to: "/pages/orders",
      },
      {
        component: CNavItem,
        name: "Incoming Shipments",
        to: "/pages/forms/shipments",
      },
      {
        component: CNavItem,
        name: "Outgoing Shipments",
        to: "/pages/forms/shipmentsOutgoing",
      },
      {
        component: CNavItem,
        name: "Selling Orders",
        to: "/pages/forms/selling",
      },
    ],
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
    name: "Materials",
    to: "/pages/materials",
  },
  {
    component: CNavItem,
    name: "Transit Companies",
    to: "/pages/transit",
  },
  {
    component: CNavItem,
    name: "Companies",
    to: "/pages/companies",
  },
  {
    component: CNavItem,
    name: "Users",
    to: "/pages/users",
  },
];

export default _nav;
