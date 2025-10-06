import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="treasury-Main-outter">
            <h1>Treasury</h1>
            <div className="treasury-total">
                <h2>£ 7,851.91</h2>
            </div>
            <h2 className="subHeading-treasury">History</h2>
            <div className="treasury-top-story">
                
            </div>
            <div className="userLogout-treasury">
                <div className="userImageDashboard-outter">
                <img src={user.photoURL} alt="User" />
                </div>
                <div className="userDetails">
                <h2>{user.displayName}</h2>
                <p>{user.email}<br/>4AS0831</p>
                <button onClick={showWallet} className="cashout-btn"><AccountBalanceWalletRoundedIcon sx={{fontSize: 40}}/></button>
                </div>
                <div className="onlineDot"></div>
            </div>
        </div>
        
    )
}

export default Treasury;