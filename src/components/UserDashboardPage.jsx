import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    <MotionConfig>
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
      <motion.div 
        className="userLogout-two"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="userDetails-two">
          <img 
            className="bestChair-img"
            src={process.env.PUBLIC_URL + "/img/bestChair.png"}
            alt="Img"
            srcset="" 
            />
          <h2>Goodtime.design<span className="smallText-user"><br/><br/>a community built for designers.</span></h2>
          <div className="grid-class">
            <h1>...</h1>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="userLogout-three"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <h2>Raise Capital</h2>
        <h1>upload your conceptual design.</h1>
        <h3><ArrowForwardIcon/></h3>
      </motion.div>
      <br/><br/>
      {/* <div className="userStats">
        <p>
          <span>Dashboard</span>
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
          <img src={process.env.PUBLIC_URL + "/img/club5.jpg"} alt="club5" />
          <br />
        </p>
        {articleList?.map((post) => {
            return (
              <div className="articleBoiler" key={post.id}>
                <h1>{post.title}</h1>
                <p>
                  <span className="bigQuots">" </span>
                  {post.content}
                  <span className="bigQuots"> "</span>
                </p>
                <div className="userTag">
                  <img src={post.author.photoUrl} alt={post.author.name} />
                  <p>{post.author.name}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
    </MotionConfig>
  );
};

export default UserDashboardPage;
