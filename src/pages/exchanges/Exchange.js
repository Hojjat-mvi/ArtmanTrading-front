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

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [address, setAddress] = useState(`http://localhost:8000/api/exchanges`);
  const [searchTerm, setSearchTerm] = useState("");

  const Navigate = useNavigate();

  const getExchanges = async (url) => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExchanges(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getExchanges(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/exchanges?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setExchanges(result.data.data);
    } catch (e) {
      toast.error(e.message);
    }
  };

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
              <DeletionModal
                resource={exchange.id}
                reRender={getExchanges}
                url={"exchanges"}
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
          <CNavbarBrand href="#">exchanges</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search exchanges"
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
              url={"exchanges"}
              header={"Exchange"}
              reRender={getExchanges}
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
        url={"http://localhost:8000/api/exchanges"}
        onUrlChange={setAddress}
      />
    </>
  );
};

export default Exchanges;
