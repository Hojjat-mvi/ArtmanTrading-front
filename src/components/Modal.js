import React from "react";
import { useState } from "react";
import {
  CModal,
  CButton,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CModalBody,
  CFormInput,
} from "@coreui/react";
export const Modal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <>
        <CButton onClick={() => setVisible(!visible)}>create new agent</CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle> new agent </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              label="agents"
              value={''}
              onChange={(event) => {
                setPostRequest(event.target.value);
              }}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </>
    </div>
  );
};

export default Modal;
