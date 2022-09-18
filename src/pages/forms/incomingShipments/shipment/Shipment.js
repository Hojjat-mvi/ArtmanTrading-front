import React, { useEffect, useState } from "react";
import {
  CCol,
  CTable,
  CTableBody,
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
} from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DeletionModal } from "../../../../components/DeletionModal";
import { toast } from "react-toastify";
import Pagination from "src/components/Pagination";

const Shipment = () => {
  const [shipments, setShipments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState(
    `http://localhost:8000/api/buying-shipment/buying_shipment/incoming-shipments`
  );

  const Navigate = useNavigate();

  const getShipment = async (url) => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShipments(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getShipment(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/buying-orders/incoming-shipments?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setShipments(result.data.data);
    } catch (e) {
      toast.error("can not send data");
    }
  };

  const makeTableRow = () => {
    return (
      <>
        {shipments.map((shipment) => (
          <CTableRow key={shipment.id}>
            <CTableDataCell scope="col" className="col-12">
              {" "}
              {shipment.id}
            </CTableDataCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/forms/incomingShipments/shipments/Show", { state: { shipment } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/forms/incomingShipments/shipments/Edit", { state: { shipment } });
                }}
              >
                edit
              </CButton>
              <DeletionModal
                resource={shipment.id}
                reRender={getShipment}
                url={"buying_order/incoming-shipments"}
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
          <CNavbarBrand href="#">shipment</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search shipment"
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
            <CButton
              className={"col-12"}
              color="primary"
              onClick={() => {
                Navigate("/pages/forms/incomingShipments/IncomingShipments");
              }}
            >
              Create New
            </CButton>
          </CCol>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">shipment ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
      <Pagination
        url={"http://localhost:8000/api/buying-orders/incoming-shipments"}
        onUrlChange={setAddress}
      />
    </>
  );
};

export default Shipment;
