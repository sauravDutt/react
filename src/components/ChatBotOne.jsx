import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import PasswordIcon from "@mui/icons-material/Password";
import { motion } from "framer-motion";

const ChatBotOne = ({ isAuth }) => {
  let navigate = useNavigate();

  const onClickFunction = () => {
    navigate("/gtown-info");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // });
  return (
    <div className="chatBot-outter">
      <div className="head-gtown">
        <div className="img-head-gtown">
          <img src={process.env.PUBLIC_URL + "/img/five.png"} alt="five" />
        </div>
        <div className="info-head-gtown">
          <h1>Community</h1>
          <span className="secondFont-head">bulletin.</span>

          <div className="realpoint-branding-outter">
            <Link
              className="social-btns"
              to="https://www.instagram.com/gtownjournal"
              target="blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              <InstagramIcon className="gtown-btn" />
            </Link>
          </div>
        </div>
        <motion.div className="memberID-btn">
          <PasswordIcon fontSize="large" sx={{ width: "100%" }} />
          <input type="password" placeholder="Member ID"></input>
        </motion.div>
        <motion.div
          className="treasury-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          onClick={onClickFunction}
        >
          <SavingsRoundedIcon fontSize="large" sx={{ width: "100%" }} />
          <span>Treasury</span>
        </motion.div>
      </div>
      <div className="left-discover">
        <div className="div-left">
          <h1>Gurugram illustrations collection.</h1>
          <button>explore</button>
        </div>
        <img
          className="oneImage-discover"
          src={process.env.PUBLIC_URL + "/img/dlf.png"}
          alt="Img"
        />
      </div>
      <div className="right-discover">
        <img
          className="twoImage-discover"
          src={process.env.PUBLIC_URL + "/img/two.png"}
          alt="Img"
        />
        <div className="div-right">
          <h1>Hip hop collectables collection.</h1>
          <button>explore</button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;
