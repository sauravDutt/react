import { useNavigate } from "react-router-dom";
import GtownMap from "./GtownMap";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
const InfoGtown = ({ setIsAuth }) => {
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
    <div className="info-outter">
      <div className="infoOneDiv">
        <div className="treasury-info-main"></div>
        <div className="treasury-head">
          <h1>editorial board</h1>
        </div>
        <div className="info-gtown-map">
          <div>
            <h2>Become an Editor</h2>
            <p>
              Mint your <strong>Gtown Journal Membership Card</strong> today, by
              clicking on the "Mint" button below, every membership comes with a
              unique block of land in the live map.
            </p>
            <button
              className="login-with-google-btn"
              onClick={signInWithGoogle}
            >
              Signin
            </button>
          </div>
          <div>
            <GtownMap />
          </div>
        </div>
        <br />
        <p>
          *40% of every user transaction, goes in the user's treasury dashboard,
          enter your unique membership id below to log in.
        </p>
      </div>

      {/* <span className="lastSpan">
        *enter your unique membership id, and press <SavingsRoundedIcon />{" "}
        button to access treasury dashboard.
      </span> */}
    </div>
  );
};

export default InfoGtown;
