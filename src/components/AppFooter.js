import React from "react";
import { CFooter } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCoffee } from "@coreui/icons";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span>Made with lots of {<CIcon icon={cilCoffee} />}</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
