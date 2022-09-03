import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilMenu,
} from "@coreui/icons";
import { logout } from "src/Store/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarToggle);
  const { authentication } = useSelector((store) => store.authentication);

  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    return dispatch(logout());
  };

  useEffect(() => {
    if (authentication === false) {
      navigate("/login");
    }
  }, [authentication]);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() =>
            dispatch({ type: "set", sidebarShow: !sidebarShow.sidebarShow })
          }
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav>
          <CButton color="dark" variant="ghost" onClick={submit}>
            Logout
          </CButton>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
