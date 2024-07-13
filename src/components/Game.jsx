import { Container, Row, Col } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PasswordIcon from "@mui/icons-material/Password";
import Banner from "./Banner";
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
        <div className="song-outter-outter">
          <div className="play-outter">
            <PlayerOutter />
          </div>
        </div>
        <Banner
          className="bannerBoiler one"
          position="positionLeft"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoiler two"
          position="positionRight"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoiler three"
          position="positionLeft"
          title=""
          description=""
          heidBtn="heidBtn"
        />
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
