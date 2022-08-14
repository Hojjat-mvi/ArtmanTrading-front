import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CFormInput,
  CButton,
  CFormCheck,
} from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DeletionModal } from "../../components/DeletionModal";
import { CreationModal } from "../../components/CreationModal";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  const Navigate = useNavigate();

  const getExchanges = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/exchanges`);
      setExchanges(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {exchanges.map((exchange) => (
          <CTableRow key={exchange.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {exchange.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/exchanges/Show", { state: { exchange } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/exchanges/Edit", { state: { exchange } });
                }}
              >
                edit
              </CButton>
              <DeletionModal resource={exchange.id} reRender={getExchanges} url={"exchanges"} />
            </CTableHeaderCell>
          </CTableRow>
        ))}
      </>
    );
  };

  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">exchanges</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search exchanges"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CreationModal url={"exchanges"} header={'Exchange'}/>
          </CCol>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable small hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Exchanges;
