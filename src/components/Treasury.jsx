
import { motion, MotionConfig } from "framer-motion";
import CategoryIcon from '@mui/icons-material/Category';
import PaymentsIcon from '@mui/icons-material/Payments';


const Treasury = ({ setIsAuth, isAuth }) => {

    
    return(
      <MotionConfig>
        <div className="treasury-Main-outter">
            <div className="treasury-total">
                <PaymentsIcon fontSize="large" style={{margin:'0 auto'}}/> <h1>raise capital</h1>
            </div>
           
            
            <h2 className="subHeading-treasury">Transaction History</h2>
            <h2 className="subHeading-treasury" style={{float: "right", marginTop: "-40px", marginRight: "20px", fontWeight: "400",fontSize:"15px"}}>[ 15/10/2025 ]</h2>
            <div className="treasury-top-story">
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} >
                    <div>
                      <p>
                        <i>Skank Hunt</i> raising capital <b>cerial-despencer redesign</b> ask is <i>£1,000 for 10%</i> in two installments.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 500</h2></div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>Saurav Dutt</i> <b>rased</b> capital for upcoming Cow Selective Cooling system.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd normal">
                      <h2>£ 1.5k</h2>
                    </div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>New Member</i> added, payed joining fee of <b>£1</b>.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 50p</h2></div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>Saurav Dutt</i> acquired an original <b>Banksy</b>, for £10,000.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 90</h2></div>
                </motion.div>
                <br/>
            </div>
            
            <div className="exta-space">
              <h2>Sign in with google account to use this utility.</h2>
              <h1>Sart raising capital against your Conceptual Designs.</h1>
              <button>Sign in</button>
            </div>
            <br/><br/><br/>
        </div>
        </MotionConfig>
        
    )
}

export default Treasury;