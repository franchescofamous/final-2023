import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  let [nameInput, setNameInput] = useState("");
  let [passwordInput, setPasswordInput] = useState("");
  let [userList, setUserList] = useState(null);

  let navigate = useNavigate();

  let { setName } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUserList(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Login Page </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          /*  let user = { nom: nameInput, mdp: passwordInput };
          console.log(user); */
          let myUser = userList.filter(
            (elt) => elt.nom === nameInput && elt.mdp === passwordInput
          );
          myUser.length > 0 && setName(nameInput);
          myUser.length > 0 && navigate("/stream");
          // myUser.length > 0 ? navigate("/stream"), setUser() : console.log("nop");
        }}
      >
        <label htmlFor="name">Nom de l'utilisateur</label>
        <input
          type="text"
          id="name"
          onInput={(e) => {
            setNameInput(e.target.value);
          }}
        />

        <br />

        <label htmlFor="mdp">Mot de passe:</label>
        <input
          type="password"
          name=""
          id="mdp"
          onInput={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <br />
        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default Login;
