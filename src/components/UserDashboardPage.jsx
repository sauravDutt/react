import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import five from "../img/five.png";
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
          <span>Welcome</span> to <strong>SauravDutt.com</strong>, a portfolio
          website build to showcase expressive illustrations and storytelling
          artwork with inspirational pieces of literature and maybe poetry.
          <br />
          <img src={five} alt="five" />
          <br />
          Thank you, <span>{user.displayName}</span> for sparing some of your
          valuable time and making an effort, your kind words will go a long
          way.
          <Link to="/create" className="messageBtn">
            <strong className="messageBtn"> Leave a message.</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserDashboardPage;
