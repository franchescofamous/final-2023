import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Popup = () => {
  let { extrait } = useContext(AppContext);
  return <div>{extrait}</div>;
};

export default Popup;
