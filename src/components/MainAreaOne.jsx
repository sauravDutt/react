import { useEffect, useState } from "react";
import Banner from "./Banner";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { motion, MotionConfig } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";
import useMeasure from "react-use-measure";

const OriginStoryContent = () => {
  return (
    <p className="originPtag">
      <strong>Good Time Journal</strong>, formerly known as{" "}
      <i>"Gtown Journal"</i>, is an online <strong>Consortium</strong> of Digital Creators (illustrators, graphic designers, product designers, artists, etc.), a decentralized platform for <strong>transparent trade of original digital ideas</strong> (intellectual property), and a community driven by creativity, innovation, and storytelling. 
      <br/>
      All the Good Time Journal members will have access to the marketplace where they can upload their digital art. The artwork will then go under a background check, the literature review or the context or the theory behind the creation will be carefully investigated, and a verified sign will be released. After this, the member will be allowed to set a value for their artwork. 10 percent of every artwork sold will be stored in an online treasure, and access will be provided to all the members where they can vote where the collected treasure will be spent. 
      <br/>To become a member expore the{" "}
      <strong>
        <i>Utility</i> 
      </strong>{" "}
      section below.
    </p>
  );
};

const MainAreaOne = () => {
  let [ref, { height }] = useMeasure();
  const [articleList, setArticleList] = useState([]);
  const articleCollectionRef = collection(db, "article");
  const [isOpen, setIsOpen] = useState(false);

  const getArticles = async () => {
    const data = await getDocs(articleCollectionRef);
    setArticleList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getArticles();
  });
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="mainArea-outter">
        <div className="mainArea">
          {/* These are banners */}
          <div className="gal">
            <div>
              <h1>Goodtimeproducts.com</h1>
              <p>
                Good Time Products, is a <strong>Community</strong>, a{" "}
                <strong>Consortium</strong> of Digital Creators, Writers,
                Illustrators, Storytellers and like minded fine art enthusiasts.
              </p>
            </div>
          </div>
          <Banner
            className="bannerBoiler cat"
            position="positionRight"
            title="Consortium"
            description="in Good Time Products, we maintain a community treasury called the 'Good Time Treasury' every member has a say in the collected fund."
            heidBtn="heidBtn"
          />
          <motion.div style={{ marginBottom: "35px" }} animate={{ height }}>
            <div ref={ref} className="left-discover">
              <div className="div-left">
                <h1>
                  Good time products.{" "}
                  <span className="small"> Origin Story</span>
                </h1>
                {isOpen ? <OriginStoryContent /> : null}
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "Read Less" : "Read More"}
                </button>
              </div>
              <img
                className={
                  isOpen ? "oneImage-discover-new" : "oneImage-discover"
                }
                src={process.env.PUBLIC_URL + "/img/dlf.png"}
                alt="Img"
              />
            </div>
          </motion.div>
          {/* <div className="right-discover">
            <img
              className="twoImage-discover"
              src={process.env.PUBLIC_URL + "/img/two.png"}
              alt="Img"
            />
            <div className="div-right">
              <h1>Freestyle independent artists</h1>
              <button>Read More</button>
            </div>
          </div> */}

          <div className="club"></div>

          <Banner
            className="bannerBoiler community"
            position="positionRight"
            title="Good times product designer."
            description="Become a'Good Time Products designer', in three easy steps."
            buttonText="START"
            heidBtn="showBtn"
          />
          <div className="podcast-banner-div">
            <h1>Utility</h1>
            <p className="utilities-info">
              Good Time Produts, offer two utilities at the moment. To become a
              Good Time Journal Member write us at{" "}
              <a href="mailto:skankhunt.69s@gmail.com" className="phoneNumber">
                <strong>skankhunt.69s@gmail.com</strong>
              </a>{" "}
              or feel free to call the front dest at{" "}
              <a href="tel:+447909452498" className="phoneNumber">
                <strong>+44 79094 52498</strong>.
              </a>
            </p>
            <div className="buttons-banner-outter">
              <div>
                <section to="/gtown" className="button-outter">
                  <BlurOnIcon fontSize="large" sx={{ width: "100%" }} />
                </section>
                <p>Designer's Marketplace</p>
              </div>
              <div>
                <section to="/play" className="button-outter">
                  <PlayArrowIcon fontSize="large" sx={{ width: "100%" }} />
                </section>
                <p>Open Mic</p>
              </div>
            </div>
          </div>
          <div className="podcast-banner"></div>
          <p className="comingSoonUtilities"> More utilities coming soon.</p>
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
          <p>click here for <a href="/bts">behind the scenes</a></p>
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
    </MotionConfig>
  );
};
export default MainAreaOne;
