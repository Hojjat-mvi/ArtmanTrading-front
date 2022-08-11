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
    component: CNavGroup,
    name: "Create Form",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Form1",
        to: "/forms/validation",
      },
      {
        component: CNavItem,
        name: "Form2",
        to: "/forms/validation2",
      },
      {
        component: CNavItem,
        name: "Form3",
        to: "/forms/validation3",
      },
      {
        component: CNavItem,
        name: "Form4",
        to: "/forms/validation4",
      },
    ],
  },
  {
    component: CNavItem,
    name: "agents",
    to: "/pages/agents",
  },
  {
    component: CNavItem,
    name: "exchanges",
    to: "/pages/exchanges",
  },
  {
    component: CNavItem,
    name: "orders",
    to: "/pages/orders",
  },
  {
    component: CNavItem,
    name: "materials",
    to: "/pages/materials",
  },
  {
    component: CNavItem,
    name: "transit",
    to: "/pages/transit",
  },
  {
    component: CNavItem,
    name: "users",
    to: "/pages/users",
  },
];

export default _nav;
