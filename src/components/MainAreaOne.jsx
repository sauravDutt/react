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
            <h1>Gtownjournal.com</h1>
            <p>
              Gtown Journal, is a <strong>Digital Art Marketplace</strong> and a{" "}
              <strong>community</strong>, a consortium of fine art enthusiasts,
              a decentralized network. A community built and run by Gtown
              members. Become a member of the <strong>"Gtown Journal"</strong>.
            </p>
          </div>
        </div>
        <Banner
          className="bannerBoiler cat"
          position="positionRight"
          title="Consortium"
          description="in Gtown Journal, we maintain a community treasury called the 'Gtown Journal Treasury' every member has a say in the collected fund."
          heidBtn="heidBtn"
        />
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
            Gtown Journal, offers two utilities at the moment. To become a Gtown
            Journal Member visit our gallery at B 6/8, Park Drive Road, DLF City
            5, Gurgaon, Haryana - 122009 or write us at{" "}
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
        <h1 className="mapHeding">
          Gtown <span className="second"> live!</span>
        </h1>
        <br />
        <div className="banner-realpoint">
          <GtownMap />
        </div>

        <p className="centerPara">
          Gtown live!, is an upcoming Gtown interactive map.
        </p>
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
