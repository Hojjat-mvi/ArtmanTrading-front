import React, { useEffect, useState } from "react";
import {
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DeletionModal } from "../../components/DeletionModal";
import { toast } from "react-toastify";
import Pagination from "src/components/Pagination";
import UserCreationModal from "src/components/UserCreationModal";
import { BiShow } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

const Tables = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState(`http://localhost:8000/api/users`);

  const Navigate = useNavigate();

  const getUsers = async (url) => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(result.data.data);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getUsers(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/users?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(result.data.data);
    } catch (e) {
      toast.error("can not send data");
    }
  };

  const makeTableRow = () => {
    const roles = ["Administrator", "Documents", "Logistics", "Accounting"];
    return (
      <>
        {users.map((user) => (
          <CTableRow key={user.id}>
            <CTableHeaderCell scope="col" className="col-3">
              {user.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="col-3">
              {user.email}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="col-3">
              {roles[user.role]}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                disabled
                color="success"
                onClick={() => {
                  Navigate("/pages/users/Show", { state: { user } });
                }}
              >
                <BiShow />
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/users/Edit", { state: { user } });
                }}
              >
                <AiFillEdit />
              </CButton>
              <DeletionModal
                resource={user.id}
                reRender={getUsers}
                url={"users"}
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
          <CNavbarBrand href="#">Users</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Users"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              value={searchTerm}
            />
            <CButton
              type="submit"
              color="success"
              variant="outline"
              onClick={search}
            >
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <UserCreationModal
              url={"users"}
              header={"User"}
              reRender={getUsers}
            />
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
      <Pagination
        url={"http://localhost:8000/api/users"}
        onUrlChange={setAddress}
      />
    </>
  );
};

export default Tables;
