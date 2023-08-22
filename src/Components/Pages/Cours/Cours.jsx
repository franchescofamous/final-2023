import React from "react";
import Popup from "../../Layout/Popup";
import { AppContext } from "../../Context/AppContext";

const Cours = ({ extrait }) => {
  /* let [nom, setNom] = useState("Gerard"); */
  return (
    <div>
      <h1>Cours</h1>
      <AppContext.Provider value={{ extrait }}>
        <Popup />
      </AppContext.Provider>
    </div>
  );
};

export default Cours;
