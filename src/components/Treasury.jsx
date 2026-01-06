
import { motion, MotionConfig } from "framer-motion";
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
                        <i>Skank Hunt</i> is <b>raising</b> £1,000 for 10% of "<i>cerial-despencer redesign</i>" <b>offering</b> 5% each with nationwide manufacturing rights. 
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
                        <i>GTD</i> designed a New WFH desk accessory,<b>offering</b> the concept's manufacturing rights for £50p.
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 50p</h2></div>
                </motion.div>
                <motion.div className="transaction1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <p>
                        <i>@skankhunt</i> is <b>raising</b> £5,000 for 25% of his IP. <b>offering</b> 5% each with nationwide manufacturing rights. 
                      </p>
                    </div>
                    <div className="treasuryAmountAdd green"><h2>£ 1,000</h2></div>
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