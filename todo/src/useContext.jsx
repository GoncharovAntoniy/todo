import React from "react";
import { createContext, useState } from "react";



export const MyContext = createContext();

const Context = (props) => {


  const [showUpdate, setShowUpdate] = useState(false);

  function toggleshowUpDate() {
    setShowUpdate(!showUpdate);
  }

  return (
    <MyContext.Provider value={[toggleshowUpDate, showUpdate, setShowUpdate]}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
