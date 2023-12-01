import LockIcon from "@mui/icons-material/Lock";

const InfoGtown = () => {
  return (
    <div className="info-outter">
      <div className="infoOneDiv">
        <h1>Gtown treasury</h1>
        <p>
          <strong>Gtown Journal Treasury</strong> is your share of the collected
          funds over the sale of our unique Gtown Journal illustrations and
          artwork. Members can join and collectively decide where to use the
          funds.
        </p>
        <img src={process.env.PUBLIC_URL + "/img/infoImg.png"} alt="info" />
      </div>
      <div className="memberLogin-outter">
        <h1>member id.</h1>
        <div className="cardIcon">
          <LockIcon fontSize="large" sx={{ width: "100%" }} />
        </div>
        <input className="memberId" type="password" />
      </div>
    </div>
  );
};

export default InfoGtown;
