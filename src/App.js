import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./components/LogIn";
import MainAreaOne from "./components/MainAreaOne";
import NavBar from "./components/NavBar";
import UserDashboardPage from "./components/UserDashboardPage";
import "./index.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import CreateArticleForm from "./components/CreateArticleForm";
import Game from "./components/Game";
import ChatBotOne from "./components/ChatBotOne";
import { auth } from "./firebase-config";
import TreasuryDashboard from "./components/TresuryDashboard";
import Freestyle from "./components/Freestyle";
import LCAestimationInCD from "./components/LCAestimationInCD";
import Chair from "./components/Chair";
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Treasury from "./components/Treasury";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  var userName;
  var userImageUrl;
  if (isAuth) {
    userName = user.displayName;
    userImageUrl = user.photoURL;
  }
  return (
    <Router>
      <div className="header-outter">
        <div className="buttons-outter">
          <Link to="/" className="button-outter">
            <HomeRoundedIcon fontSize="large" sx={{ width: "100%" }} />
          </Link>
          <Link to="/designer_marketplace" className="button-outter">
            <StoreRoundedIcon fontSize="large" sx={{ width: "100%" }} />
          </Link>
          <Link to="/treasury" className="button-outter">
            <AccountBalanceIcon fontSize="large" sx={{ width: "100%" }} />
          </Link>
          {!isAuth ? (
            <Link to="/login" className="button-outter">
              <AccountCircleOutlinedIcon
                fontSize="large"
                sx={{ width: "100%" }}
              />
            </Link>
          ) : (
            <Link className="button-outter-logout" to="/dashboard">
              <img
                src={user.photoURL}
                alt="userImage"
                className="logOutBtnImg"
              />
            </Link>
          )}
        </div>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainAreaOne />} />
        <Route path="/login" element={<LogIn setIsAuth={setIsAuth} />} />
        <Route path="/lcac" element={<Game />} />
        <Route path="/chair" element={<Chair/>}/>
        <Route path="/treasury" element={<Treasury isAuth={isAuth} userName={userName} userImageUrl={userImageUrl}/>}/>
        <Route
          path="/dashboard"
          element={<UserDashboardPage setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route path="/freeStyle" element={<Freestyle />} />
        <Route path="/create" element={<CreateArticleForm isAuth={isAuth} />} />
        <Route path="/gtown" element={<ChatBotOne isAuth={isAuth} />} />
        <Route path="/lca_estimation_in_conceptual_design" element={<LCAestimationInCD/>}/>
        <Route
          path="/designer_marketplace"
          element={
            <TreasuryDashboard
              isAuth={isAuth}
              userName={userName}
              userImageUrl={userImageUrl}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
