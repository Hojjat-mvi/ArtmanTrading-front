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

// eslint-disable-next-line react/prop-types
export const CreationModal = ({ url, header }) => {
  const [visible, setVisible] = useState(false);
  const [postRequest, setPostRequest] = useState("");


  const SubmitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: `http://127.0.0.1:8000/api/${url}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: postRequest,
      },
    };
    try {
      await axios(config);
      alert("success");
    } catch (event) {
      alert("error");
    }
  };

  return (
    <div>
      <>
        <CButton className="col-12" onClick={() => setVisible(!visible)}>
          Create New
        </CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle> {`new ${header}`} </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              label="name"
              value={postRequest}
              onChange={(event) => {
                setPostRequest(event.target.value);
              }}
              placeholder={`enter the ${header} name`}
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
