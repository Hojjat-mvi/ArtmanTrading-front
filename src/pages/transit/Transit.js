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

const Transit = () => {
  const [transits, setTransit] = useState([]);

  const Navigate = useNavigate();

  const getTransits = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/transit-companies`);
      setTransit(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getTransits();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {transits.map((transit) => (
          <CTableRow key={transit.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {transit.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/transit/Show", { state: { transit } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/transit/Edit", { state: { transit } });
                }}
              >
                edit
              </CButton>
              <DeletionModal orderId={transit} reRender={getTransits} url={"transit-companies"} />
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
          <CNavbarBrand href="#">transits</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Transit Companies"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CreationModal url={"transit-companies"} header={'Transit'}/>
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

export default Transit;
