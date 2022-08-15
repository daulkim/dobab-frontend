import * as React from 'react';
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav()  {
    return (
      <nav>
        <div className={styles.nav__container}>
          <div className={styles.home__container}>
            <NavLink className={styles.home__link} to="/meal-list">
              Do!Bob
            </NavLink>
          </div>
          <div className={styles.save__container}>
            <NavLink className={styles.other__link} to="/meal-save">
              식사등록
            </NavLink>
            </div>
            <div>
            <NavLink className={styles.other__link} to="/login">
              로그인
            </NavLink>
          </div>
        </div>
      </nav>
    );
}

export default Nav;