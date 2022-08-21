import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Login from "../Login";

function Nav()  {
  const [loginModal, setLoginModal] = useState(false);

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
            <input type="button" className ={styles.login__btn} value="로그인" onClick={() => setLoginModal(!loginModal)}/>
            {loginModal && (
              <Modal closeModal={() => setLoginModal(!loginModal)}>
                <Login />
              </Modal>
            )}
          </div>
        </div>
      </nav>
    );
}

export default Nav;