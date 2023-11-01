import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ChatBotOne = ({ isAuth }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="chatBot-outter">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;
