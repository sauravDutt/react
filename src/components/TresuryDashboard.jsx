import { motion } from "framer-motion";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import StorageIcon from "@mui/icons-material/Storage";
import SellIcon from "@mui/icons-material/Sell";
import DigitalArt from "./DigitalArt";
import DigitalArtOne from "./DigitalArtOne";
import DigitalArtTwo from "./DigitalArtTwo";
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = () => {



  // var log = [
  //   {
  //     memberId: "4ASO831"
  //   },
  //   {
  //     memberId: "4ASO953"
  //   }
  // ];

  // const showTDashboard = () => {

  // }
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
      <div className="main-artwork-outter">
        <DigitalArt />
        <DigitalArtOne />
        <DigitalArtTwo />
      </div>
    <div className="smallInfo">
      <div>
        <p>
          Join the waiting list.
        </p>
        <input type="email" name="useremail" id="email" placeholder="email.."/>
      </div>
      <div></div>
    </div>
    </div>
  );
};

export default TreasuryDashboard;
