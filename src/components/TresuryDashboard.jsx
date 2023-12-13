import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <div className="treasury-outter">
      <div className="treasury-head">
        <h1>Treasury</h1>
        <div>
          <div className="treasury-amount">
            <h2>₹ 1,851.91</h2>
          </div>
        </div>
      </div>
      <div className="treasury-info-main">
        <div className="treasury-pTag">
          <div>
            <section></section> <h2>9G8T1969</h2>
          </div>
        </div>
      </div>
      <div className="treasury-groupchat-outter">
        <div className="messages-outter"></div>
        <div className="chat-input-outter">
          <div className="chatroom-userInfo">
            <img src={userImageUrl} alt="userImage" />
            <h3>{userName}</h3>
          </div>
          <div className="message-textarea-outter">
            <textarea></textarea>
            <button>
              <SendIcon fontSize="large" sx={{ width: "100%" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryDashboard;
