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
import { CreationModal } from "../../components/CreationModal";
import { toast } from "react-toastify";
import Pagination from "src/components/Pagination";
import { AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState(`http://localhost:8000/api/materials`);

  const Navigate = useNavigate();

  const getMaterials = async (url) => {
    const token = localStorage.getItem("token");

    try {
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMaterials(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getMaterials(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/materials?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMaterials(result.data.data);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const makeTableRow = () => {
    return (
      <>
        {materials.map((material) => (
          <CTableRow key={material.id}>
            <CTableHeaderCell scope="col" className="col-9">
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
                <BiShow />
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/materials/Edit", { state: { material } });
                }}
              >
                <AiFillEdit />
              </CButton>
              <DeletionModal
                resource={material.id}
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
          <CNavbarBrand>Materials</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Materials"
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
            <CreationModal
              url={"materials"}
              header={"Material"}
              reRender={getMaterials}
            />
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
      <Pagination
        url={"http://localhost:8000/api/materials"}
        onUrlChange={setAddress}
      />
    </>
  );
};

export default Materials;
