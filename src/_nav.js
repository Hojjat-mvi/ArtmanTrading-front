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
    component: CNavGroup,
    name: "Manage Orders",
    to: "/base",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [{ component: CNavItem, name: "Tables", to: "/base/tables" }],
  },
  {
    component: CNavItem,
    name: "agents",
    to: "/pages/agents",
  },
  {
    component: CNavItem,
    name: "exchanges",
    to: "/forms/validation4",
  },
  {
    component: CNavItem,
    name: "orders",
    to: "/forms/validation4",
  },
  {
    component: CNavItem,
    name: "materials",
    to: "/forms/validation4",
  },
  {
    component: CNavItem,
    name: "transit",
    to: "/forms/validation4",
  },
  {
    component: CNavItem,
    name: "users",
    to: "/forms/validation4",
  },
];

export default _nav;
