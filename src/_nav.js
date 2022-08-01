import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form1',
        to: '/forms/validation',
      },
      {
        component: CNavItem,
        name: 'Form2',
        to: '/forms/validation2',
      },
    ],
  },
]

export default _nav
