import { Container, Row, Col } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PasswordIcon from "@mui/icons-material/Password";
const PlayerOutter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <AudioPlayer
              src={process.env.PUBLIC_URL + "/songs/MainAudio.mp3"}
              showFilledVolume
              // other props here
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Game = () => {
  return (
    <div className="margin-top-imp">
      <div className="podcast-outter">
        <div className="sceneOne"></div>
        <h1 className="podcastTitle">
          gtown<span className="second">radio</span>
        </h1>
        <div className="song-outter-outter">
          <div className="play-outter">
            <PlayerOutter />
          </div>
        </div>
        <div className="comments-outter">
          <p>
            * This is a members only Podcast please enter your membership id to
            continue.
          </p>
          <div className="memberID-btn">
            <PasswordIcon fontSize="large" sx={{ width: "100%" }} />
            <input type="password" placeholder="Member ID"></input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Game;
