import { motion } from "framer-motion";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import StorageIcon from "@mui/icons-material/Storage";
import SellIcon from "@mui/icons-material/Sell";
import PasswordIcon from "@mui/icons-material/Password";
import DigitalArt from "./DigitalArt";
import DigitalArtOne from "./DigitalArtOne";
import DigitalArtTwo from "./DigitalArtTwo";
import { useNavigate } from "react-router-dom";
// import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  let navigate = useNavigate();

  const showFolioChair = () => {
    navigate("/chair");
  }
  const showFolioTools = () => {
    navigate("/tools");
  }
  const showFolioHcd = () => {
    navigate("/hcd")
  }
  const showFolioLCA = () => {
    navigate("/lca_estimation_in_conceptual_design")
  }
  return (
    <div className="treasury-outter">
      <div className="sauravDutt-projects">
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioChair}
        >
          <h1>Chair Design</h1>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioTools}
        >
          <h1>Hand Tools</h1>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioHcd}
        >
          <h1>Human Centred Design</h1>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioLCA}
        >
          <h1>LCA estimation in conceptual design.</h1>
        </motion.div>
        
        <div className="default last">
          <div></div>
          <div>
            <p>Work in progress ...</p>
          </div>
        </div>
      </div>
      <div className="treasury-dashboard-head">
        <motion.div
          className="bidBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <TouchAppIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <StorageIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <SellIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <SkipPreviousIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
        <motion.div
          className="nextBtn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          <SkipNextIcon fontSize="large" sx={{ width: "90%" }} />
        </motion.div>
      </div>
      <div className="main-artwork-outter">
        <DigitalArt />
        <DigitalArtOne />
        <DigitalArtTwo />
        <div className="littleWidth"></div>
      </div>

      <div className="memberCard-outter">
        <div className="card-outter">
          <div className="treasury-head-new">
            <h1>Treasury</h1>
            <div>
              <div className="treasury-amount">
                <h2>£ 7,851.91</h2>
              </div>
            </div>
          </div>
          
          <div className="comments-outter">
            <p>
              * This is a members only Utility, enter your membership id to
              continue.
            </p>
            <div className="memberID-btn">
              <PasswordIcon fontSize="large" sx={{ width: "100%" }} />
              <input type="password" placeholder="Member ID"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryDashboard;
