// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";

const ChatBotOne = ({ isAuth }) => {
  // let navigate = useNavigate();

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
          <h1>Gtown</h1>
          <span className="secondFont-head">journal.</span>
          <motion.button
            className="gtown-mint"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            mint
          </motion.button>
          <div className="realpoint-branding-outter">
            <InfoIcon />
            <motion.a
              href="https://www.instagram.com/gtown_journal"
              target="blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
            >
              <InstagramIcon className="gtown-btn" />
            </motion.a>
          </div>
        </div>
      </div>
      <div></div>
      <div className="left-discover">
        <div className="div-left"></div>
        <div>
          <img
            className="oneImage-discover"
            src={process.env.PUBLIC_URL + "/img/one.png"}
            alt="Img"
          />
        </div>
      </div>
      <div className="right-discover">
        <div>
          <img
            className="twoImage-discover"
            src={process.env.PUBLIC_URL + "/img/two.png"}
            alt="Img"
          />
        </div>
        <div className="div-right"></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;
