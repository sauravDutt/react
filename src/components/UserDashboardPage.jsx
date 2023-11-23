import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const UserDashboardPage = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  const [user, setUser] = useState([]);
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <div className="dashBoard-outter">
      <div className="userLogout">
        <div className="userImageDashboard-outter">
          <img src={user.photoURL} alt="User" />
        </div>
        <div className="userDetails">
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <button onClick={signOutUser}>Signout</button>
        </div>
        <div className="onlineDot"></div>
      </div>
      <div className="userStats">
        <p>
          <span>Welcome</span> to <strong>Gtown Journal</strong>, a portfolio of
          a NFT Collection, a Community, a vision of decentralisation of art and
          documenting the city. Mint an illustration and become a contributer.
          <br />
          <img src={process.env.PUBLIC_URL + "/img/five.png"} alt="five" />
          <br />
          Thank you, <span>{user.displayName}</span> for taking time, we also
          appriciate your interest in becoming an editor at the Gtown Journal,
          please visit the gallery or any Gtown Journal exihibition near you.
          <br />
          <br />
          <Link to="/create" className="messageBtn">
            <strong className="messageBtn"> Leave a message.</strong>
          </Link>
          <br />
          **this message will be posted on the landing page.
          <br />
        </p>
      </div>
    </div>
  );
};

export default UserDashboardPage;
