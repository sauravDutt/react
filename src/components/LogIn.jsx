import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LogIn({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userName", result.user.displayName);
      setIsAuth(true);
      navigate("/dashboard");
    });
  };

  return (
    <div className="login-outter">
      <div className="loginContainer">
        <img src={process.env.PUBLIC_URL + "/img/gal.png"} alt="club5" />
        <AccountCircleOutlinedIcon
          fontSize="large"
          sx={{ mt: 7, mb: 1, width: "100%", fontSize: 50 }}
        />
        <p>
          To continue with this utility you first need to sign in with your
          google account. The users will automaticaly sign out once they exit or
          close the application, for security purposes.
        </p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Signin with Google
        </button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
