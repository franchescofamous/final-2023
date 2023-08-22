import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Stream.module.css";
import axios from "axios";

const Stream = () => {
  axios
    .get("http://localhost:5000/musics")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
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
        <section className={style.userName}></section>
      </header>
      <section className={style.trackList}>
        <article className={style.track}></article>
        <article className={style.track}></article>
      </section>
    </div>
  );
};

export default Stream;
