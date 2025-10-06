import { auth } from "../firebase-config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';


const Treasury = ({ setIsAuth, isAuth }) => {
let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const showWallet = () => {
    console.log(user);
  }
    
    return(
      <MotionConfig>
        <div className="treasury-Main-outter">
            <h1>Treasury</h1>
            <div className="treasury-total">
                <h2>£ 7,851.91</h2>
            </div>
            <h2 className="subHeading-treasury">History</h2>
            <div className="treasury-top-story">
                <div className="transaction1">
                    <div></div>
                    <div className="treasuryAmountAdd"></div>
                </div>
                <div className="transaction1">
                    <div></div>
                    <div className="treasuryAmountAdd"></div>
                </div>
                <div className="transaction1">
                    <div></div>
                    <div className="treasuryAmountAdd"></div>
                </div>
                <div className="transaction1">
                    <div></div>
                    <div className="treasuryAmountAdd"></div>
                </div>
                <br />
            </div>
            <motion.div 
              className="userLogout-treasury"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
                <div className="userImageDashboard-outter">
                <img src={user.photoURL} alt="User" />
                </div>
                <div className="userDetails">
                <h2>{user.displayName}</h2>
                <p>{user.email}<br/><strong>4AS0831</strong></p>
                <button onClick={showWallet} className="cashout-btn"><AccountBalanceWalletRoundedIcon sx={{fontSize: 40}}/></button>
                </div>
                <div className="onlineDot"></div>
            </motion.div>
        </div>
        </MotionConfig>
        
    )
}

export default Treasury;