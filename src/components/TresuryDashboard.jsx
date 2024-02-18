import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <div className="treasury-outter">
      <div className="treasury-dashboard-head">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        ></motion.div>
      </div>
      <div className="digitalArt-outter">
        <div></div>
        <div className="digitalArt-info"></div>
      </div>
    </div>
  );
};

export default TreasuryDashboard;
