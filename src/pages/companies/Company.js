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

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const Navigate = useNavigate();

  const getCompanies = async () => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.get(`http://localhost:8000/api/companies`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCompanies(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {companies.map((company) => (
          <CTableRow key={company.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {company.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/companies/Show", { state: { company } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/companies/Edit", { state: { company } });
                }}
              >
                edit
              </CButton>
              <DeletionModal
                resource={company.id}
                reRender={getCompanies}
                url={"companies"}
              />
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
          <CNavbarBrand href="#">companies</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search companies"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CreationModal url={"companies"} header={"company"} reRender={getCompanies}/>
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

export default Companies;
