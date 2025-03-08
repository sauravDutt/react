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
      <strong>Good Time </strong>, formerly known as{" "}
      <i>"Good Time Journal"</i>, is an online portfolio of an indipendent product designer + web developer. The platform is also a marketplace for transparent trade of intilectual properties (designs) and innovative redesigned daily use products. 
      
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
              <h1>Goodtime.work</h1>
              <p>
                Good Time, is a portfolio of an indipendent product designer, an online marketplace for indipendenet product design and ready to ship products.
              </p>
            </div>
          </div>
          
          <div className="main-artwork-two-outter">
        <DigitalArt />
        <DigitalArtOne />
        <DigitalArtTwo />
        <div className="littleWidth"></div>
      </div>
      <Banner
            className="bannerBoiler cat"
            position="positionRight"
            title="Consortium"
            description="in Good Time, we maintain a community treasury called the 'Good Time Treasury' portion of every sale goes to the treasury."
            heidBtn="heidBtn"
          />
          <motion.div style={{ marginBottom: "35px" }} animate={{ height }}>
            <div ref={ref} className="left-discover">
              <div className="div-left">
                <h1>
                  Good time .{" "}
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
