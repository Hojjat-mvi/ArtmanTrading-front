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
    ],
  },
  {
    component: CNavGroup,
    name: "Manage Orders",
    to: "/base",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [{ component: CNavItem, name: "Tables", to: "/base/tables" }],
  },
];

export default _nav;
