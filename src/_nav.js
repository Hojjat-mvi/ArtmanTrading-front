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
    name: "Forms",
    to: "/pages/forms",
    items: [
      {
        component: CNavItem,
        name: "buyingOrders",
        to: "/pages/forms/buyingOrders",
      },
      {
        component: CNavItem,
        name: "incomingShipments",
        to: "/pages/forms/incomingShipments",
      },
      {
        component: CNavItem,
        name: "outgoingShipments",
        to: "/pages/forms/outgoingShipments",
      },
      {
        component: CNavItem,
        name: "sellingOrders",
        to: "/pages/pages/sellingOrders",
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
