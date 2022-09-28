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
import { AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const Selling = () => {
  const [sellings, setSellings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState(
    `http://localhost:8000/api/selling-orders`
  );

  const Navigate = useNavigate();

  const getSelling = async (url) => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSellings(result.data.data);
    } catch (e) {
      alert("error");
    }
  };

  useEffect(() => {
    getSelling(address);
  }, [address]);

  const search = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/selling-orders?search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSellings(result.data.data);
    } catch (e) {
      toast.error("can not send data");
    }
  };

  const makeTableRow = () => {
    return (
      <>
        {sellings.map((selling) => (
          <CTableRow key={selling.id}>
            <CTableDataCell scope="col" className="col-9">
              {" "}
              {selling.id}
            </CTableDataCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/forms/sellingShow", {
                    state: { selling },
                  });
                }}
              >
                <BiShow />
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/pages/forms/sellingEdit", {
                    state: { selling },
                  });
                }}
              >
                <AiFillEdit />
              </CButton>
              <DeletionModal
                resource={selling.id}
                reRender={getSelling}
                url={"selling-orders"}
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
          <CNavbarBrand>Selling Orders</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search Selling Orders"
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
                Navigate("/pages/forms/sellingOrders");
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
            <CTableHeaderCell scope="col">selling ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
      <Pagination
        url={"http://localhost:8000/api/selling-orders"}
        onUrlChange={setAddress}
      />
    </>
  );
};

export default Selling;
