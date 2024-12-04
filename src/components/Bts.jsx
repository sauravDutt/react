import { motion } from "framer-motion";


const Bts = () => {

    return(
        <div className="btsOutter-outter">
            <div className="btsOutter">
            <div className="bts-content-div">
                <h2>behind the scenes.</h2>
                <p>21 / 11 / 2024</p>
            </div>
            </div>
            
            <div className="bts-products-div">
                <div className="bts-card">
                    <div className="bts-btn-outter">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}></motion.div>
                    </div>
                </div>
                <div className="bts-card-one"> </div>
            </div>
        </div>
    )
}

export default Bts;