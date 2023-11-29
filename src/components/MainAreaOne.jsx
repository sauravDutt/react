import { useEffect, useState } from "react";
import Banner from "./Banner";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

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
    <div className="mainArea">
      {/* These are banners */}
      <div className="gal">
        <div>
          <h1>timeinabottle.wtf</h1>
          <p>
            Time in a Bottle, is a <strong>community</strong> (NFT collection),
            each illustration is it's own unique NFT (Non Fungible Tokens), each
            NFT holder is a <strong>member of "Time in a Bottle Co."</strong>.
          </p>
        </div>
      </div>
      <Banner
        className="bannerBoiler cat"
        position="positionRight"
        title="Community"
        description="in Time in a Bottle, we maintain a community treasury called the 'Gtown Journal Treasury' every editor(NFT holder) has a say in the collected fund."
        heidBtn="heidBtn"
      />
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
      <div className="song-outter">
        <div className="songImg"></div>
        <div className="play-outter">
          <PlayerOutter />
        </div>
      </div>
      <div className="clubIn"></div>
      <Banner
        className="bannerBoiler community"
        position="positionRight"
        title="Become an editor."
        description="Every art in the Gtown Journal, tells a story, a memory and a vision, of decentralized trade of inspiritional art and expressing the love for the city."
        buttonText="join the editor dashbord"
        heidBtn="showBtn"
      />
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
  );
};
export default MainAreaOne;
