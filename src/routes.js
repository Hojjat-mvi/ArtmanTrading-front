import React from 'react'
import { Edit } from './pages/orders/Edit'
import { Validation2 } from './views/forms/validation/Validation2'
import { Validation3 } from './views/forms/validation/Validation3'
import { Validation4 } from './views/forms/validation/Validation4'


// Base
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))




//Forms
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

//pages
const Agents = React.lazy(() => import('./pages/agents/Agent'))
const agentEdit = React.lazy(() => import('./pages/agents/Edit'))
const agentShow = React.lazy(() => import('./pages/agents/Show'))
const Order = React.lazy(() => import('./pages/orders/Tables'))
const orderEdit = React.lazy(() => import('./pages/orders/Edit'))






const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/pages/agents' , name: 'Agents', element: Agents , exact: true},
  { path: '/pages/agents/Edit' , name: 'Edit', element: agentEdit },
  { path: '/pages/agents/Show' , name: 'Show', element: agentShow },
  { path: '/pages/orders' , name: 'Table', element: Order },
  { path: '/pages/orders/Edit' , name: 'Edit', element: orderEdit },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables/Edit', name: 'Edit', element: Edit },
  { path: '/forms/validation', name: 'Form', element: Validation },
  { path: '/forms/validation2', name: 'Form2', element: Validation2 },
  { path: '/forms/validation3', name: 'Form3', element: Validation3 },
  { path: '/forms/validation4', name: 'Form4', element: Validation4 },
  
]

export default routes
