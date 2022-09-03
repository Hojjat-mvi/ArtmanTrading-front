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
import { toast,ToastContainer } from "react-toastify";
import Pagination from "src/components/Pagination";


const Transit = () => {
  const [transits, setTransit] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [address,setAddress] = useState(`http://localhost:8000/api/transit-companies`)


  const Navigate = useNavigate();

  const getTransits = async (url) => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        url,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTransit(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getTransits(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/transit-companies?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTransit(result.data.data);
    } catch (e) {
      toast.error("can not send data");
    }
  };

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
              <DeletionModal
                resource={transit.id}
                reRender={getTransits}
                url={"transit-companies"}
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
          <CNavbarBrand href="#">transits</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Transit Companies"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              value={searchTerm}
            />
            <CButton type="submit" color="success" variant="outline" onClick={search}>
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CreationModal url={"transit-companies"} header={"Transit"} reRender={getTransits}/>
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
      <Pagination url={'http://localhost:8000/api/transit-companies'} onUrlChange={setAddress}/>
    </>
  );
};

export default Transit;
