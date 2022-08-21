import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import styles from "./GLoginBtn.module.css";

function GLoginBtn() {

    const onSuccess = (response) => {
        console.log(response);
    }
      
    const onFailure = (response) => {
        console.log(response);
    }

    return (
        <div className={styles. container}>
        <GoogleOAuthProvider  clientId={process.env.REACT_APP_GOOGLE_OAUTH_API_KEY}>
            <GoogleLogin
            buttonText="google login"
            onSuccess={onSuccess}
            onError={onFailure}
            />
        </GoogleOAuthProvider>
        </div>
      );
}

export default GLoginBtn;


