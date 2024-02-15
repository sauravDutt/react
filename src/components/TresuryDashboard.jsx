import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import SendIcon from "@mui/icons-material/Send";

const TreasuryDashboard = ({ isAuth, userName, userImageUrl }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return <div className="treasury-outter"></div>;
};

export default TreasuryDashboard;
