// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const ChatBotOne = ({ isAuth }) => {
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // });

  return (
    <div className="chatBot-outter">
      <div className="head-gtown">
        <div className="img-head-gtown">
          <img src={process.env.PUBLIC_URL + "/img/five.png"} alt="five" />
        </div>
        <div className="info-head-gtown">
          <h1>Gtown</h1>
          <span className="secondFont-head">journal.</span>
          <button className="gtown-mint">mint</button>
        </div>
      </div>
      <div></div>
      <div className="left-discover">
        <div className="div-left"></div>
        <div>
          <img
            className="oneImage-discover"
            src={process.env.PUBLIC_URL + "/img/one.png"}
            alt="Img"
          />
        </div>
      </div>
      <div className="right-discover">
        <div>
          <img
            className="twoImage-discover"
            src={process.env.PUBLIC_URL + "/img/two.png"}
            alt="Img"
          />
        </div>
        <div className="div-right"></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatBotOne;
