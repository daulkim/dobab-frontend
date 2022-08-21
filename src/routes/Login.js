import GLoginBtn from '../component/GLoginBtn';
import styles from "./Login.module.css";

const Login = () => {

  return (
    <div className={styles.container}>
    <div><h1> DoBob Login</h1></div>
    <GLoginBtn/>
    </div>
  )
}

export default Login;