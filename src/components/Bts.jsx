// import { motion } from "framer-motion";


const Bts = () => {

    return(
        <div className="btsOutter-outter">
            <div className="btsOutter-boxs">
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