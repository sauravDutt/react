import { motion } from "framer-motion";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import StorageIcon from "@mui/icons-material/Storage";
import SellIcon from "@mui/icons-material/Sell";
import PasswordIcon from "@mui/icons-material/Password";
import DigitalArt from "./DigitalArt";
// import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  return (
    <div className="treasury-outter">
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
      <DigitalArt />

      <div className="memberCard-outter">
        <div className="card-outter">
          <div className="treasury-head">
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
