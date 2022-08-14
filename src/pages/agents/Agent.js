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

const Tables = () => {
  const [agents, setAgents] = useState([]);

  const Navigate = useNavigate();

  const getAgents = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/agents`);
      setAgents(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {agents.map((agent) => (
          <CTableRow key={agent.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {agent.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/agents/Show", { state: { agent } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/agents/Edit", { state: { agent } });
                }}
              >
                edit
              </CButton>
              <DeletionModal
                resource={agent.id}
                reRender={getAgents}
                url={"agents"}
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
          <CNavbarBrand href="#">Agents</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Agents"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CreationModal url={"agents"} header={'Agent'}/>
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

export default Tables;
