// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'; 

const Bts = () => {
    let navigate = useNavigate();
    const showFolioChair = () => {
        navigate("/chair");
      }
      const showFolioTools = () => {
        navigate("/tools");
      }
      const showFolioLCA = () => {
        navigate("/lca_estimation_in_conceptual_design")
      }
    return(
        <div className="btsOutter-outter">
          
            <div className="btsOutter-boxs">
            <div className="sauravDutt-projects">
            <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioLCA}
        >
          <h1>life cycle assessment estimation in conceptual design.</h1>
          <div className="folio-card-icon-outter-lca">
           < SchoolRoundedIcon fontSize="medium"/> <h3>Individual Project</h3>
          </div>
        </motion.div>
      <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioTools}
        >
          
          <img className="folio-cardImg" src={process.env.PUBLIC_URL + "/img/handToolsOutter.png"} alt="handToolImg" />
          <h1>Hand tools</h1>
          <div className="folio-card-icon-outter">
           < SchoolRoundedIcon fontSize="medium"/> <h3>Uni work</h3>
          </div>
        </motion.div>
        
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={showFolioChair}
        >
          <h1>Chair design</h1>
          <div className="folio-card-icon-outter">
           < SchoolRoundedIcon fontSize="medium"/> <h3>Uni work</h3>
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
                
            </div>
        </div>
    )
}

export default Bts;