import { useNavigate } from "react-router-dom";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import { motion } from "framer-motion";
import GtownMap from "./GtownMap";
const ChatBotOne = ({ isAuth }) => {
  let navigate = useNavigate();

  const onClickFunction = () => {
    navigate("/gtown-info");
  };
  return (
    <div className="chatBot-outter">
      <div className="head-gtown">
        <div className="img-head-gtown">
          <img src={process.env.PUBLIC_URL + "/img/five.png"} alt="five" />
        </div>
        <div className="info-head-gtown">
          <h1>16/05/2024</h1>
          <span className="secondFont-head">bulletin.</span>
          <section className="realpoint-branding-outter">
            working prototype
          </section>
        </div>

        <motion.div
          className="treasury-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          onClick={onClickFunction}
        >
          <SavingsRoundedIcon fontSize="large" sx={{ width: "100%" }} />
          <span>Gtown treasury.</span>
        </motion.div>
      </div>
      <div className="gtown-map-outter">
        <div></div>
        <GtownMap />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;
