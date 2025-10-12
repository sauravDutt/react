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
            <h2 className="subHeading-treasury">Transaction History</h2>
            <h2 className="subHeading-treasury" style={{float: "right", marginTop: "-40px", marginRight: "20px", fontWeight: "400",fontSize:"15px"}}>[ 15/10/2025 ]</h2>
            <div className="treasury-top-story">
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} >
                    <div>
                      <p>
                        <i>Skank Hunt</i> acquired <b>incomplete R8</b> from <i>Saurav Dutt</i> for £1,000.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 9</h2></div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>Skank Hunt</i> <b>Cashed out</b> treasury wallet balance of £100.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd normal">
                      <h2>£ 100</h2>
                    </div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>New Member</i> added, payed joining fee of <b>£1</b>.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 50p</h2></div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>Saurav Dutt</i> acquired an original <b>Banksy</b>, for £10,000.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 90</h2></div>
                </motion.div>
                <br/>
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
            <div className="exta-space">
              <h2>Events</h2>
              <h1>Weekly <strong className="second-text">blackjack</strong> evenings, with receipts going to a collectively decided charity.</h1>
              <button>Sign up</button>
            </div>
            <br/><br/><br/>
        </div>
        </MotionConfig>
        
    )
}

export default Treasury;