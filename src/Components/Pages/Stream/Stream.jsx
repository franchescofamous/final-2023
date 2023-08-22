import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./Stream.module.css";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

const Stream = () => {
  let [playlist, setPlaylist] = useState(null);
  let { name } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/musics")
      .then((res) => {
        console.log(res.data);
        setPlaylist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // playlist? : <p> ...chargement</p>

  let tracks = playlist ? (
    playlist.map((music) => {
      return <article className={style.track} key={music.id}></article>;
    })
  ) : (
    <p> ... chargement</p>
  );
  return (
    <div>
      <header className={style.head}>
        <menu>
          <nav>
            <ul>
              <li>
                <NavLink>Login</NavLink>
              </li>
              <li>
                <NavLink>Playlist</NavLink>
              </li>
            </ul>
          </nav>
        </menu>
        <section className={style.userName}>{name}</section>
      </header>
      <section className={style.trackList}>{tracks}</section>
    </div>
  );
};

export default Stream;
