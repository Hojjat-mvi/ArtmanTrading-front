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
import axios from "axios";

export const CreationModal = ({ url }) => {
  const [visible, setVisible] = useState(false);
  const [postRequest, setPostRequest] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault()
    var config = {
      method: 'post',
      url: `http://127.0.0.1:8000/api/${url}`,
      data: {
        name: postRequest,
      },
    }
    try {
      await axios(config)
      alert('success')
    } catch (event) {
      alert('error')
    }
  }

  return (
    <div>
      <>
        <CButton className="col-12" onClick={() => setVisible(!visible)}>Create New</CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle> new agent </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              label="Name"
              value={postRequest}
              onChange={(event) => {
                setPostRequest(event.target.value);
              }}
              placeholder="enter the agent name"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={SubmitHandler}>
              {" "}
              create{" "}
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    </div>
  );
};

export default CreationModal;