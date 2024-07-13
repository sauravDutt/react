import { useEffect, useState } from "react";
import Banner from "./Banner";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { Container, Row, Col } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";

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

const MainAreaOne = () => {
  const [articleList, setArticleList] = useState([]);
  const articleCollectionRef = collection(db, "article");
  const getArticles = async () => {
    const data = await getDocs(articleCollectionRef);
    setArticleList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getArticles();
  });
  return (
    <div className="mainArea-outter">
      <div className="mainArea">
        {/* These are banners */}
        <div className="gal">
          <div>
            <h1>Goodtimejournal.com</h1>
            <p>
              Good Time Journal, is a{" "}
              <strong>Decentralised, Open source</strong> community of digital
              artist, writers, illustraters, story tellers and a{" "}
              <strong>consortium</strong> of art enthusiasts.
            </p>
          </div>
        </div>
        <Banner
          className="bannerBoiler cat"
          position="positionRight"
          title="Consortium"
          description="in Good Time Journal, we maintain a community treasury called the 'Good Time Treasury' every member has a say in the collected fund."
          heidBtn="heidBtn"
        />
        <div className="left-discover">
          <div className="div-left">
            <h1>
              Good time journalism.{" "}
              <span className="small"> by Gtown Journal</span>
            </h1>
            <button>Read More</button>
          </div>
          <img
            className="oneImage-discover"
            src={process.env.PUBLIC_URL + "/img/dlf.png"}
            alt="Img"
          />
        </div>
        <div className="right-discover">
          <img
            className="twoImage-discover"
            src={process.env.PUBLIC_URL + "/img/two.png"}
            alt="Img"
          />
          <div className="div-right">
            <h1>Freestyle independent artists</h1>
            <button>Enroll</button>
          </div>
        </div>
        <div className="song-outter">
          <div className="songImg"></div>
          <div className="song-title">
            <h2>
              <strong>Video Introduction</strong> #1
            </h2>
          </div>
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
        <div className="club"></div>

        <Banner
          className="bannerBoiler community"
          position="positionRight"
          title="Join the Gtownjournal community."
          description="Become a member and express your unique Art on the Gtown Journal Marketplace and Earn Rewards."
          buttonText="Become an Member"
          heidBtn="showBtn"
        />
        <div className="podcast-banner-div">
          <h1>Utility</h1>
          <p className="utilities-info">
            Good Time Journal, offers two utilities at the moment. To become a
            Gtown Journal Member visit our gallery at B 6/8, Park Drive Road,
            DLF City 5, Gurgaon, Haryana - 122009 or write us at{" "}
            <a href="mailto:info@gtownjournal.com" className="phoneNumber">
              <strong>info@gtownjournal.com</strong>
            </a>{" "}
            or feel free to call the front dest at{" "}
            <a href="tel:+919958479837" className="phoneNumber">
              <strong>+91 99584 79837</strong>.
            </a>
          </p>
          <div className="buttons-banner-outter">
            <div>
              <section to="/gtown" className="button-outter">
                <BlurOnIcon fontSize="large" sx={{ width: "100%" }} />
              </section>
              <p>Community Bulletin</p>
            </div>
            <div>
              <section to="/play" className="button-outter">
                <PlayArrowIcon fontSize="large" sx={{ width: "100%" }} />
              </section>
              <p>Podcast</p>
            </div>
          </div>
        </div>
        <div className="podcast-banner"></div>
        <p className="comingSoonUtilities"> More utilities coming soon .</p>
        <div className="clubIn"></div>
        {articleList?.map((post) => {
          return (
            <div className="articleBoiler" key={post.id}>
              <h1>{post.title}</h1>
              <p>
                <span className="bigQuots">" </span>
                {post.content}
                <span className="bigQuots"> "</span>
              </p>
              <div className="userTag">
                <img src={post.author.photoUrl} alt={post.author.name} />
                <p>{post.author.name}</p>
              </div>
            </div>
          );
        })}
        <Banner
          className="narrow"
          position=""
          title=""
          description=""
          heidBtn="heidBtn"
        />
      </div>

      <div className="mainAreaTwo">
        <GtownMap />
      </div>
    </div>
  );
};
export default MainAreaOne;
