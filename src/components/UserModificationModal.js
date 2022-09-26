import React from "react";
import { useState } from "react";
import {
  CModal,
  CButton,
  CFormSelect,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CModalBody,
  CFormInput,
} from "@coreui/react";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const UserModificationModal = ({ url, header, reRender }) => {
  const initialValues = {
    name: "",
    email: "",
    role: "",
    password: "",
    password_confirmation: "",
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
        password: postRequest.password,
        password_confirmation: postRequest.password_confirmation,
      },
    };
    try {
      await axios(config);
      toast.success("Successful");
      setVisible(false);
      setPostRequest(initialValues);
    } catch (e) {
      toast.error("Unsuccessful");
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

  return (
    <div>
      <>
        <CButton className="col-12" onClick={() => setVisible(!visible)}>
          Create New
        </CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle> {`New ${header}`} </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              name="name"
              label="Username"
              value={postRequest.name}
              onChange={handleInputChange}
              placeholder={`Enter Username`}
              className={"mb-2"}
            />{" "}
            <CFormInput
              type="email"
              name="email"
              label="Email address"
              value={postRequest.email}
              onChange={handleInputChange}
              placeholder={`Enter Email Address`}
              className={"mb-2"}
            />{" "}
            <CFormSelect
              name="role"
              label="Role"
              value={postRequest.role}
              onChange={handleInputChange}
              placeholder={`Select User's role`}
              className={"mb-2"}
            >
              <option value="" hidden>
                Choose...
              </option>
              <option value="0">Administration</option>
              <option value="1">Documents</option>
              <option value="2">Logistics</option>
              <option value="3">Accounting</option>
            </CFormSelect>
            <CFormInput
              type="password"
              name="password"
              label="Password"
              value={postRequest.password}
              onChange={handleInputChange}
              placeholder={`Enter ${header} password`}
              className={"mb-2"}
            />
            <CFormInput
              type="password"
              name="password_confirmation"
              label="Confirm Password"
              value={postRequest.password_confirmation}
              onChange={handleInputChange}
              placeholder={`Re-type password`}
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

export default UserModificationModal;
