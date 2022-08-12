import { useState, useRef } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import axios from "axios";

export const Modal = ({ orderId, reRender, url }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
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
                try {
                  await axios.delete(
                    `http://localhost:8000/api/${url}/${orderId.id}`
                  );
                  setVisible(false);
                  reRender();
                } catch (e) {
                  alert("delete failed");
                }
              }}
            >
              delete
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    </div>
  );
};
