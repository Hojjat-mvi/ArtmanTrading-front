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
import { Modal } from "../../pages/orders/Modal";

const Materials = () => {
  const [materials, setMaterials] = useState([]);

  const Navigate = useNavigate();

  const getMaterials = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/materials`);
      setMaterials(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {materials.map((material) => (
          <CTableRow key={material.id}>
            <CTableHeaderCell scope="col" className="col-12">
              {material.name}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/materials/Show", { state: { material } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/materials/Edit", { state: { material } });
                }}
              >
                edit
              </CButton>
              <Modal
                orderId={material}
                reRender={getMaterials}
                url={"materials"}
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
          <CNavbarBrand href="#">materials</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Materials"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable borderless hover>
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

export default Materials;
