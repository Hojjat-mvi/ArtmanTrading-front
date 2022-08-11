import React from 'react'
import { Edit } from './pages/orders/Edit'
import { Validation2 } from './views/forms/validation/Validation2'
import { Validation3 } from './views/forms/validation/Validation3'
import { Validation4 } from './views/forms/validation/Validation4'


// Base
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))




//Forms
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// Pages
//// Agents
const Agents = React.lazy(() => import('./pages/agents/Agent'))
const agentEdit = React.lazy(() => import('./pages/agents/Edit'))
const agentShow = React.lazy(() => import('./pages/agents/Show'))
const Order = React.lazy(() => import('./pages/orders/Tables'))


//// Exchanges
const Exchanges = React.lazy(() => import('./pages/exchanges/Exchange'))
const exchangeEdit = React.lazy(() => import('./pages/exchanges/Edit'))
const exchangeShow = React.lazy(() => import('./pages/exchanges/Show'))

//// Materials
const Materials = React.lazy(() => import('./pages/materials/Material'))
const materialEdit = React.lazy(() => import('./pages/materials/Edit'))
const materialShow = React.lazy(() => import('./pages/materials/Show'))

//// Orders
const Orders = React.lazy(() => import('./pages/orders/Order'))
const orderEdit = React.lazy(() => import('./pages/orders/Edit'))
const orderShow = React.lazy(() => import('./pages/orders/Show'))

//// Transit
const Transit = React.lazy(() => import('./pages/transit/Transit'))
const transitEdit = React.lazy(() => import('./pages/transit/Edit'))
const transitShow = React.lazy(() => import('./pages/transit/Show'))

//// Users
const Users = React.lazy(() => import('./pages/users/User'))
const userEdit = React.lazy(() => import('./pages/users/Edit'))
const userShow = React.lazy(() => import('./pages/users/Show'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/pages/agents' , name: 'Agents', element: Agents , exact: true},
  { path: '/pages/agents/Edit' , name: 'agentEdit', element: agentEdit },
  { path: '/pages/agents/Show' , name: 'agentShow', element: agentShow },

  { path: '/pages/exchanges' , name: 'Exchanges', element: Exchanges , exact: true},
  { path: '/pages/exchanges/Edit' , name: 'exchangeEdit', element: exchangeEdit },
  { path: '/pages/exchanges/Show' , name: 'exchangeShow', element: exchangeShow },

  { path: '/pages/materials' , name: 'materials', element: Materials , exact: true},
  { path: '/pages/materials/Edit' , name: 'materialEdit', element: materialEdit },
  { path: '/pages/materials/Show' , name: 'materialShow', element: materialShow },

  { path: '/pages/orders' , name: 'orders', element: Orders , exact: true},
  { path: '/pages/orders/Edit' , name: 'orderEdit', element: orderEdit },
  { path: '/pages/orders/Show' , name: 'orderShow', element: orderShow },

  { path: '/pages/transit' , name: 'Transit', element: Transit , exact: true},
  { path: '/pages/transit/Edit' , name: 'transitEdit', element: transitEdit },
  { path: '/pages/transit/Show' , name: 'transitShow', element: transitShow },

  { path: '/pages/users' , name: 'Users', element: Users , exact: true},
  { path: '/pages/users/Edit' , name: 'userEdit', element: userEdit },
  { path: '/pages/users/Show' , name: 'userShow', element: userShow },
  
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables/Edit', name: 'Edit', element: Edit },
  { path: '/forms/validation', name: 'Form', element: Validation },
  { path: '/forms/validation2', name: 'Form2', element: Validation2 },
  { path: '/forms/validation3', name: 'Form3', element: Validation3 },
  { path: '/forms/validation4', name: 'Form4', element: Validation4 },
  
]

export default routes
