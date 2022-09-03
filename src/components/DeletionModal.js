/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export const DeletionModal = ({ resource, url,reRender }) => {
  const [visible, setVisible] = useState(false);
  

  return (
    <>
      <CButton color="danger" onClick={() => setVisible(!visible)}>
        Delete
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Delete order</CModalTitle>
        </CModalHeader>
        <CModalBody>are you sure you want to delete this item?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            cancel
          </CButton>
          <CButton
            color="danger"
            onClick={async () => {
              const token = localStorage.getItem("token");
              try {
                await axios.delete(
                  `http://localhost:8000/api/${url}/${resource}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                setVisible(false);
              } catch (e) {
                alert("delete failed");
              }
              reRender(`http://localhost:8000/api/agents`)
            }}
          >
            delete
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
