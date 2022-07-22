import { React, useState } from 'react'
import { CForm, CCol, CFormInput, CButton } from '@coreui/react'
import axios from 'axios'

const CustomStyles = () => {
  const initialValues = {
    date_of_purchase: '',
    contract_no: '',
    analysis: '',
    company_id: '',
    material_id: '',
    analysis_result: '',
    sending_docs_to_seller: '',
    exchange_status: '',
    quantity: '',
    container_size: '',
    packaging_style: '',
    certificate_of_origin: '',
    buying_price: '',
    selling_price: '',
    packaging_weight: '',
    term: '',
    notes: '',
  }

  const [postRequest, setPostRequest] = useState('')
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const value = e.target.value
    setValues({
      ...values,
      [e.target.name]: value,
    })
  }

  const SubmitHandler = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/buy-orders/', values)
      alert('success')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <CForm className="row g-3">
      <CCol md={4}>
        <CFormInput
          type="text"
          label="agents"
          value={postRequest}
          onChange={(event) => {
            setPostRequest(event.target.value)
          }}
        />
      </CCol>
      {/*buying-orders-table*/}

      <CCol xs={4}>
        <CFormInput
          type="date"
          label="date_of_purchase"
          name="date_of_purchase"
          onChange={handleInputChange}
          value={values.date_of_purchase}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="contract_no"
          name="contract_no"
          onChange={handleInputChange}
          value={values.contract_no}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="company_id"
          name="company_id"
          onChange={handleInputChange}
          value={values.company_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="material_id"
          name="material_id"
          onChange={handleInputChange}
          value={values.material_id}
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          label="analysis"
          name="analysis"
          onChange={handleInputChange}
          value={values.analysis}
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          label="analysis_result"
          name="analysis_result"
          onChange={handleInputChange}
          value={values.analysis_result}
        />
      </CCol>

      <CCol xs={4}>
        <CFormInput
          type="number"
          label="sending_docs_to_seller"
          name="sending_docs_to_seller"
          onChange={handleInputChange}
          value={values.sending_docs_to_seller}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="quantity"
          name="quantity"
          onChange={handleInputChange}
          value={values.quantity}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="packaging_weight"
          name="packaging_weight"
          onChange={handleInputChange}
          value={values.packaging_weight}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="certificate_of_origin"
          name="certificate_of_origin"
          onChange={handleInputChange}
          value={values.certificate_of_origin}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="container_size"
          name="container_size"
          onChange={handleInputChange}
          value={values.container_size}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="packaging_style"
          name="packaging_style"
          onChange={handleInputChange}
          value={values.packaging_style}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="selling_price"
          name="selling_price"
          onChange={handleInputChange}
          value={values.selling_price}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="term"
          name="term"
          onChange={handleInputChange}
          value={values.term}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="notes"
          name="notes"
          onChange={handleInputChange}
          value={values.notes}
        />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit" onClick={SubmitHandler}>
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}

export default CustomStyles
