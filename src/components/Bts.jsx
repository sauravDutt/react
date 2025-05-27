// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 import { Container, Row, Col } from "react-bootstrap";
 import AudioPlayer from "react-h5-audio-player";
 import "react-h5-audio-player/lib/styles.css";
 import Banner from './Banner'


const PlayerOutter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <AudioPlayer
              src={process.env.PUBLIC_URL + "/songs/backgroundMusic.mp3"}
              showFilledVolume 
              // other props here
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Bts = () => {
    let navigate = useNavigate();
      const showFolioLCA = () => {
        navigate("/lca_estimation_in_conceptual_design")
      }
    return(
        <div className="btsOutter-outter">
          <div className="song-outter-outter">
          <div className="play-outter">
            <PlayerOutter />
          </div>
        </div>
          <div className="btsOutter-boxs">
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
      </div>
            <div className="btsOutter">
            <div className="bts-content-div">
                <h2>behind the scenes.</h2>
                <p>21 / 11 / 2024</p>
            </div>
            </div>
            </div>

            <div className="bts-products-div">
                {/* <div className="bts-card">
                    <div className="bts-btn-outter">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                    </div>
                </div> */}
                <div className="bts-card-one"> 
                  
                    <img src={process.env.PUBLIC_URL + "/img/Part2.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/ChairDesignOne.png"} alt="img" srcset="" className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/glass.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/download.png"} alt="Img" srcset="" className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/crosstrainerOne.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/crosstrainerTwo.png"} alt="Img" srcset="" className="floatRight"/>
                    <p>Product Design, <br/><span className="smallText">2024-2025</span></p>
                    <img src={process.env.PUBLIC_URL + "/img/csc.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/cube.png"} alt="Img" srcset="" className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/idea0.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/cereal.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/v6.png"} alt="Img" srcset="" className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/deskOne.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/desk.png"} alt="Img" srcset=""  className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/deskThree.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/handTools.png"} alt="Img" srcset=""  className="floatRight"/>
                    <img src={process.env.PUBLIC_URL + "/img/scarface.png"} alt="Img" srcset="" />
                    <img src={process.env.PUBLIC_URL + "/img/911Main.png"} alt="Img" srcset=""className="floatRight" />
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
        <Banner
          className="bannerBoiler four"
          position="positionRight"
          title=""
          description=""
          heidBtn="heidBtn"
        />

        <Banner
          className="bannerBoiler "
          position="positionRight five"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoiler "
          position="positionLeft six"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoiler "
          position="positionRight seven"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoilerBig "
          position="positionCenter eight"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoilerBig "
          position="positionCenter eleven"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoilerBig "
          position="positionCenter nine"
          title=""
          description=""
          heidBtn="heidBtn"
        />

        <Banner
          className="bannerBoilerBig "
          position="positionCenter twelve"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoilerBig "
          position="positionCenter ten"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
          className="bannerBoilerBig "
          position="positionCenter scarface"
          title=""
          description=""
          heidBtn="heidBtn"
        />
        <Banner
        className="bannerBoilerBig "
        position="positionCenter nineOne"
        title=""
        description=""
        heidBtn="heidBtn"
      />
            </div>
        </div>
    )
}

export default Bts;