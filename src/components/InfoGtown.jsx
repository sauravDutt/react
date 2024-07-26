import { useNavigate } from "react-router-dom";
import GtownMap from "./GtownMap";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Center } from "@react-three/drei";
import { bottomNavigationActionClasses } from "@mui/material";

const InfoGtown = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userName", result.user.displayName);
      setIsAuth(true);
      navigate("/dashboard");
    });
  };

  const UploadArticle = () => {
    return (
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto",
          justifyContent: "Center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2 style={{ marginTop: "10px", marginBottom: "0px" }}>Step Two</h2>
        <p
          style={{
            marginTop: "-5px",
            marginBottom: "5px",
          }}
        >
          Give your article a topic.
        </p>
        <input type="text" className="articleTitle"></input>

        <textarea className="textAreaArticle" cols={35}></textarea>
        <button style={{ marginTop: "-10px", width: "100px" }}>Submit</button>
      </div>
    );
  };

  const ShowGoogleBtn = () => {
    return (
      <div>
        <h2>Become an Editor</h2>
        <p>
          Join the Editorial board by simply, submit an original article with an
          illustration. an illustration.
        </p>
        <p>Sign in with your google account and navigate back to this page.</p>

        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Signin
        </button>
      </div>
    );
  };

  return (
    <div className="info-outter">
      <div className="infoOneDiv">
        <div className="treasury-info-main"></div>
        <div className="treasury-head">
          <h1>editorial board</h1>
        </div>
        <div className="info-gtown-map">
          <div>{isAuth ? <UploadArticle /> : <ShowGoogleBtn />}</div>
          <div>
            <GtownMap />
          </div>
        </div>
        <br />
      </div>

      {/* <span className="lastSpan">
        *enter your unique membership id, and press <SavingsRoundedIcon />{" "}
        button to access treasury dashboard.
      </span> */}
    </div>
  );
};

export default InfoGtown;
