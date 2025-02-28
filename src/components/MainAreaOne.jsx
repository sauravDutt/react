import { useState } from "react";
import Banner from "./Banner";

import { motion, MotionConfig } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
// import BlurOnIcon from "@mui/icons-material/BlurOn";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";
import useMeasure from "react-use-measure";
import DigitalArt from "./DigitalArt";
import DigitalArtOne from "./DigitalArtOne";
import DigitalArtTwo from "./DigitalArtTwo";

const OriginStoryContent = () => {
  return (
    <p className="originPtag">
      <strong>Good Time Products</strong>, formerly known as{" "}
      <i>"Good Time Products"</i>, is an online <strong>Consortium</strong> of Digital Creators (illustrators, graphic designers, product designers, artists, etc.), a decentralized platform for <strong>transparent trade of original digital ideas</strong> (intellectual property), and a community driven by creativity, innovation, and storytelling. 
      
    </p>
  );
};

const MainAreaOne = () => {
  let [ref, { height }] = useMeasure();
  
  const [isOpen, setIsOpen] = useState(false);

 
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
          <div className="main-artwork-two-outter">
        <DigitalArt />
        <DigitalArtOne />
        <DigitalArtTwo />
        <div className="littleWidth"></div>
      </div>
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
          {/* <div className="podcast-banner-div">
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
          </div> */}
          <div className="podcast-banner"></div>
          <p p className="comingSoonUtilities">click here for <a href="/bts">behind the scenes</a></p>
          
         
          <br/>
        </div>

        <div className="mainAreaTwo">
          <GtownMap />
        </div>
      </div>
    </MotionConfig>
  );
};
export default MainAreaOne;
