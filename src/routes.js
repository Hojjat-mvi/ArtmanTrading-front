import React from "react";

// Base
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));

// Forms
const buyingOrders = React.lazy(() =>
  import("./pages/forms/buyingOrders/BuyingOrders")
);
const incomingShipments = React.lazy(() =>
  import("./pages/forms/incomingShipments/IncomingShipments")
);
const outgoingShipments = React.lazy(() =>
  import("./pages/forms/outgoingShipments/OutgoingShipments")
);
const sellingOrders = React.lazy(() =>
  import("./pages/forms/sellingOrders/SellingOrders")
);

//// Agents
const Agents = React.lazy(() => import("./pages/agents/Agent"));
const agentEdit = React.lazy(() => import("./pages/agents/Edit"));
const agentShow = React.lazy(() => import("./pages/agents/Show"));

//// Exchanges
const Exchanges = React.lazy(() => import("./pages/exchanges/Exchange"));
const exchangeEdit = React.lazy(() => import("./pages/exchanges/Edit"));
const exchangeShow = React.lazy(() => import("./pages/exchanges/Show"));

//// Materials
const Materials = React.lazy(() => import("./pages/materials/Material"));
const materialEdit = React.lazy(() => import("./pages/materials/Edit"));
const materialShow = React.lazy(() => import("./pages/materials/Show"));

//// Orders
const Orders = React.lazy(() =>
  import("./pages/forms/buyingOrders/orders/Order")
);
const orderEdit = React.lazy(() =>
  import("./pages/forms/buyingOrders/orders/Edit")
);
const orderShow = React.lazy(() =>
  import("./pages/forms/buyingOrders/orders/Show")
);

//// Transit
const Transit = React.lazy(() => import("./pages/transit/Transit"));
const transitEdit = React.lazy(() => import("./pages/transit/Edit"));
const transitShow = React.lazy(() => import("./pages/transit/Show"));

//// Users
const Users = React.lazy(() => import("./pages/users/User"));
const userEdit = React.lazy(() => import("./pages/users/Edit"));
const userShow = React.lazy(() => import("./pages/users/Show"));

//// companies
const companies = React.lazy(() => import("./pages/companies/Company"));
const CompanyEdit = React.lazy(() => import("./pages/companies/Edit"));
const CompanyShow = React.lazy(() => import("./pages/companies/Show"));

// shipments(incoming)
const shipments = React.lazy(() =>
  import("./pages/forms/incomingShipments/shipment/Shipment")
);
const shipmentEdit = React.lazy(() =>
  import("./pages/forms/incomingShipments/shipment/Edit")
);
const shipmentShow = React.lazy(() =>
  import("./pages/forms/incomingShipments/shipment/Show")
);

// shipments(outgoing)
const shipmentOutgoing = React.lazy(() =>
  import("./pages/forms/outgoingShipments/shipment/Shipment")
);
const outShipmentShow = React.lazy(() =>
  import("./pages/forms/outgoingShipments/shipment/Show")
);
const outShipmentEdit = React.lazy(() => import('./pages/forms/outgoingShipments/shipment/Edit'))

//selling
const selling = React.lazy(() =>
  import("./pages/forms/sellingOrders/orders/Selling")
);
const sellingShow = React.lazy(() => import('./pages/forms/sellingOrders/orders/Show'))
const sellingEdit = React.lazy(() => import('./pages/forms/sellingOrders/orders/Edit'))


const routes = [
  { path: "/pages/forms/selling", name: "selling", element: selling },
  { path: "/pages/forms/sellingShow", name: "sellingShow", element: sellingShow },
  { path: "/pages/forms/sellingEdit", name: "sellingEdit", element: sellingEdit },
  { path: "/pages/forms/shipments", name: "shipments", element: shipments },
  {
    path: "/pages/forms/shipments/Edit",
    name: "shipmentEdit",
    element: shipmentEdit,
  },
  {
    path: "/pages/forms/shipments/Show",
    name: "shipmentShow",
    element: shipmentShow,
  },
  {
    path: "/pages/forms/shipmentsOutgoing",
    name: "shipments",
    element: shipmentOutgoing,
  },
  {
    path: "/pages/forms/outShipmentShow",
    name: "outShipmentShow",
    element: outShipmentShow,
  },
  {
    path: "/pages/forms/outShipmentEdit",
    name: "outShipmentEdit",
    element: outShipmentEdit,
  },
  { path: "/", exact: true, name: "Home" },
  { path: "/pages/agents", name: "Agents", element: Agents, exact: true },
  { path: "/pages/agents/Edit", name: "agentEdit", element: agentEdit },
  { path: "/pages/agents/Show", name: "agentShow", element: agentShow },

  {
    path: "/pages/exchanges",
    name: "Exchanges",
    element: Exchanges,
    exact: true,
  },
  {
    path: "/pages/exchanges/Edit",
    name: "exchangeEdit",
    element: exchangeEdit,
  },
  {
    path: "/pages/exchanges/Show",
    name: "exchangeShow",
    element: exchangeShow,
  },

  {
    path: "/pages/materials",
    name: "materials",
    element: Materials,
    exact: true,
  },
  {
    path: "/pages/materials/Edit",
    name: "materialEdit",
    element: materialEdit,
  },
  {
    path: "/pages/materials/Show",
    name: "materialShow",
    element: materialShow,
  },

  { path: "/pages/orders", name: "orders", element: Orders, exact: true },
  { path: "/pages/orders/Edit", name: "orderEdit", element: orderEdit },
  { path: "/pages/orders/Show", name: "orderShow", element: orderShow },

  { path: "/pages/transit", name: "Transit", element: Transit, exact: true },
  { path: "/pages/transit/Edit", name: "transitEdit", element: transitEdit },
  { path: "/pages/transit/Show", name: "transitShow", element: transitShow },

  { path: "/pages/users", name: "Users", element: Users, exact: true },
  { path: "/pages/users/Edit", name: "userEdit", element: userEdit },
  { path: "/pages/users/Show", name: "userShow", element: userShow },

  {
    path: "/pages/companies",
    name: "companies",
    element: companies,
    exact: true,
  },
  { path: "/pages/companies/Edit", name: "CompanyEdit", element: CompanyEdit },
  { path: "/pages/companies/Show", name: "CompanyShow", element: CompanyShow },

  { path: "/base/spinners", name: "Spinners", element: Spinners },
  {
    path: "/pages/forms/buyingOrders",
    name: "buyingOrders",
    element: buyingOrders,
  },
  {
    path: "/pages/forms/incomingShipments",
    name: "incomingShipments",
    element: incomingShipments,
  },
  {
    path: "/pages/forms/outgoingShipments",
    name: "outgoingShipments",
    element: outgoingShipments,
  },
  {
    path: "/pages/forms/sellingOrders",
    name: "sellingOrders",
    element: sellingOrders,
  },
];

export default routes;
