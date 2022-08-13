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

const Tables = () => {
  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/users`);
      setUsers(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {users.map((user) => (
          <CTableRow key={user.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {user.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="col-12">
              {user.email}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="col-12">
              {user.role}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/users/Show", { state: { user } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/users/Edit", { state: { user } });
                }}
              >
                edit
              </CButton>
              <DeletionModal resource={user.id} reRender={getUsers} url={"users"} />
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
          <CNavbarBrand href="#">Users</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Users"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CButton className={"col-12"} color="primary">Create New</CButton>
          </CCol>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
