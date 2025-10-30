import { useState } from "react";
import Banner from "./Banner";
import { motion, MotionConfig } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
// import BlurOnIcon from "@mui/icons-material/BlurOn";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";
import useMeasure from "react-use-measure";
import { useNavigate } from "react-router-dom";
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// import DigitalArt from "./DigitalArt";
// import DigitalArtOne from "./DigitalArtOne";
// import DigitalArtTwo from "./DigitalArtTwo";

const OriginStoryContent = () => {
  return (
    <p className="originPtag">
      <strong>Good Time Design</strong>, or <strong>"GTD"</strong> is a platform for young designers to raise awareness about their personal project and it's impact towards sustainability, the platform caters to independent designers, design students and design studios.<br/><br/>
      GTD offers a conceptual design marketplace where a designer can showcase and sell their conceptual designs (IP). GTD also offers a utility to raise capital, where designer's can raise funds against the equity of their IP.
      <br/>
      <span className="smallText-two">IP - <strong>interlectual property</strong>.</span>
    </p>
  );
};

const MainAreaOne = () => {
  let [ref, { height }] = useMeasure();
  
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
      const showFolioLCA = () => {
        navigate("/lca_estimation_in_conceptual_design")
      }
      const showInfo = () => {
        navigate("/lcac")
      }
      const showMarketplace = () => [
        navigate("/designer_marketplace")
      ]
      // const showChairDesign = () => {
      //   navigate('/chair')
      // }
  
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="mainArea-outter">
        <div className="mainArea">
          {/* These are banners */}
          <div className="gal">
            <div>
              <h1>Goodtime.design</h1>
              <p>
                Good Time Design, is a conceptual <strong>design</strong> marketplace, for sustainable design solutions. <br/>
                {/* <span className="smallText-two">1% of every transaction goes to the community <strong>treasury</strong>. </span> */}
              </p>
            </div>
          </div>
{/*           
          <div className="main-artwork-two-outter">
        <DigitalArt />
        <DigitalArtOne />
        <DigitalArtTwo />
        <div className="littleWidth"></div>
      </div> */}
      <Banner
            className="bannerBoiler cat"
            position="positionRight"
            title="market"
            description="GTD xxxxxx xxxxxxx xxxxxxx xxxxxx xxxxxxx xx xxxxxxxx x xxxxxxx x x x x x x xxxxxxxxxxxxxx. x x x x xxxxxxx xxx."
            heidBtn="heidBtn"
          />
          <motion.div style={{ marginBottom: "15px" }} animate={{ height }}>
            <div ref={ref} className="left-discover">
              <div className="div-left">
                <h1>
                  good time. design{" "}
                  <span className="small"> About</span>
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
          {/* <h1 className="portfolio-title">Study</h1> */}
          <div className="sauravDutt-projects">
            <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showInfo}
        >
          <h2 className="subHeading-cool">Make your money grow, invest in a concept design.</h2>
          <h1 className="lca-title"> market</h1>
          <div className="folio-card-icon-outter-lca">
          <AddBusinessIcon sx={{ fontSize: 35, marginTop: -5 }}/>
          </div>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showMarketplace}
        >
           <h2 className="subHeading-cool">Explore the Good Time Design Marketplace, click on the marketplace button below </h2>
          <h1 className="lca-title"> marketplace</h1>
          <div className="folio-card-icon-outter-lca">
          <StoreRoundedIcon sx={{ fontSize: 35, marginTop: -5 }}/>
          </div>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioLCA}
        >
          <h1 className="lca-title"><i>life cycle assessment calculator</i></h1>
          <h2 className="subHeading-last">Sustainable approach towards conceptual product design.</h2>
          <div className="folio-card-icon-outter-lca">
          <h3>...</h3>
          </div>
        </motion.div>
        {/* <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showChairDesign}
        >
          <h1 className="lca-title">Design form and aesthetics <br/><i>"good time design chair".</i></h1>
          <div className="folio-card-icon-outter-lca">
            <br/>
          <h3>...</h3>
          </div>
        </motion.div> */}
      </div>
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
        </div>

        <div className="mainAreaTwo">
          <GtownMap />
        </div>
      </div>
    </MotionConfig>
  );
};
export default MainAreaOne;
