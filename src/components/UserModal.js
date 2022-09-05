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
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const UserModal = ({ url, header, reRender }) => {
  const initialValues = {
    name: "",
    email: "",
    role: "",
    password:""
  };

  const [visible, setVisible] = useState(false);
  const [postRequest, setPostRequest] = useState(initialValues);

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
        name: postRequest.name,
        email: postRequest.email,
        role: postRequest.role,
        password: postRequest.password
      },
    };
    try {
      await axios(config);
      toast.success("created");
      setVisible(false);
    } catch (e) {
      toast.error("not created");
    }
    reRender(`http://localhost:8000/api/${url}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostRequest({
      ...postRequest,
      [name]: value,
    });
  };

  console.log(postRequest);

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
              name="name"
              label="name"
              value={postRequest.name}
              onChange={handleInputChange}
              placeholder={`enter the ${header} name`}
            />{" "}
            <CFormInput
              type="email"
              name="email"
              label="email"
              value={postRequest.email}
              onChange={handleInputChange}
              placeholder={`enter the ${header} email`}
            />{" "}
            <CFormInput
              type="number"
              name="role"
              label="role"
              value={postRequest.role}
              onChange={handleInputChange}
              placeholder={`enter the ${header} role`}
            />
            <CFormInput
              type="password"
              name="password"
              label="password"
              value={postRequest.password}
              onChange={handleInputChange}
              placeholder={`enter the ${header} password`}
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

export default UserModal;
