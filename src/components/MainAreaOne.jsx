import { useState } from "react";
import Banner from "./Banner";
import { motion, MotionConfig } from "framer-motion";
import "react-h5-audio-player/lib/styles.css";
// import BlurOnIcon from "@mui/icons-material/BlurOn";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GtownMap from "./GtownMap";
import useMeasure from "react-use-measure";
import { useNavigate } from "react-router-dom";
// import DigitalArt from "./DigitalArt";
// import DigitalArtOne from "./DigitalArtOne";
// import DigitalArtTwo from "./DigitalArtTwo";

const OriginStoryContent = () => {
  return (
    <p className="originPtag">
      <strong>Good Time Design</strong>, or <strong>"GTD"</strong> is an online platform for independent designers in the early stages of product development. The Life Cycle Assessment Calculator utility illustrates and analyses every step of a product's (concept's) life cycle.
      <br/>
      <span className="smallText-two">Designs that meet the <strong>GTD estimate criteria</strong> are offered a chance to be listed in the GTD marketplace.</span>
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
      const showChairDesign = () => {
        navigate('/chair')
      }
  
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="mainArea-outter">
        <div className="mainArea">
          {/* These are banners */}
          <div className="gal">
            <div>
              <h1>Goodtime.design</h1>
              <p>
                Good Time Design is a conceptual design marketplace for independent designers to showcase and sell their work.. <br/>
                <span className="smallText-two">10% of every transaction goes to the community <strong>treasury</strong>. </span>
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
            title="lca calculator"
            description="The Life Cycle Assessment Calculator estimates the conceptual design. This utility illustrates and analyses each step of a product's life cycle."
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
          <div className="sauravDutt-projects">
            <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioLCA}
        >
          <h1 className="lca-title"><i>" life cycle assessment calculator "</i> for estimation in conceptual design.</h1>
          <div className="folio-card-icon-outter-lca">
          <h3>Saurav Dutt</h3>
          </div>
        </motion.div>
        <motion.div 
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
        </motion.div>
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
