import React from 'react'

import { CWidgetStatsD, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" height={52} />}
            style={{ '--cui-card-cap-bg': '#3b5998' }}
            values={[
              { title: 'friends', value: '89K' },
              { title: 'feeds', value: '459' },
            ]}
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" height={52} />}
            style={{ '--cui-card-cap-bg': '#00aced' }}
            values={[
              { title: 'folowers', value: '973K' },
              { title: 'tweets', value: '1.792' },
            ]}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
