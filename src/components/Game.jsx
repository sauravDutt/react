import { Container, Row, Col } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const PlayerOutter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <AudioPlayer
              src={process.env.PUBLIC_URL + "/songs/songOne.mp3"}
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
        <h1 className="podcastTitle">podcast.</h1>
        <div className="sceneOne"></div>
        <div className="song-outter-outter">
          <div className="play-outter">
            <PlayerOutter />
          </div>
        </div>
        <div className="comments-outter"></div>
      </div>
    </div>
  );
};
export default Game;
