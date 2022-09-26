import React from "react";

const valueContext = React.createContext({
  values:{},
  onValueChange : () => {}
});

export default valueContext;
export const ValueProvider = valueContext.Provider;
