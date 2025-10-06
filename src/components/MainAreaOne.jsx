import { useState } from "react";
import Banner from "./Banner";
import { motion, MotionConfig } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
// import BlurOnIcon from "@mui/icons-material/BlurOn";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";
import useMeasure from "react-use-measure";
import { useNavigate } from "react-router-dom";

import InfoIcon from '@mui/icons-material/Info';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
// import DigitalArt from "./DigitalArt";
// import DigitalArtOne from "./DigitalArtOne";
// import DigitalArtTwo from "./DigitalArtTwo";

const OriginStoryContent = () => {
  return (
    <p className="originPtag">
      <strong>Good Time Design</strong>, or <strong>"GTD"</strong> an online community of fine art enthusiasts, a consortium between independent designers, manufacturers, digital creators and artists, providing a transparent trade of digital (tangible) assets.
      <br/>
      <span className="smallText-two">1% of every transaction goes to the community <strong>treasury</strong>.</span>
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
                Good Time Design, is an online consortium of fine art enthusisasts and independent designers. <br/>
                <span className="smallText-two">1% of every transaction goes to the community <strong>treasury</strong>. </span>
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
            title="Consortium"
            description="Every acquisition made through the platform contributes 1% of the total cost of the asset to the treasury. Shared equally between the buyer and seller."
            heidBtn="heidBtn"
          />
          <motion.div style={{ marginBottom: "35px" }} animate={{ height }}>
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
          <h2 className="subHeading">To learn more about goodtime.design, click on the info button below </h2>
          <h1 className="lca-title"> info</h1>
          <div className="folio-card-icon-outter-lca">
          <InfoIcon fontSize="large" sx={{ width: "100%" }}/>
          </div>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showMarketplace}
        >
           <h2 className="subHeading">Explore the Good Time Marketplace, click on the marketplace button below </h2>
          <h1 className="lca-title"> marketplace</h1>
          <div className="folio-card-icon-outter-lca">
          <StoreRoundedIcon fontSize="large" sx={{ width: "100%" }}/>
          </div>
        </motion.div>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioLCA}
        >
          <h1 className="lca-title"><i>" life cycle assessment calculator "</i>.</h1>
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
