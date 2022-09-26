import styles from "./GLoginBtn.module.css";

function GLoginBtn() {

    return (
        <div className={styles. container}>
            <a href='http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect'> 로그인</a>
        </div>
      );
}

export default GLoginBtn;


