
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

const OriginStoryContent = () => {
  return (
    <>
    <br/>
    <br/>
    <hr/>  
    <br/>  
    <p className="originPtag-info">
      1% of the cost price goes straight to the treasury. 90% of the treasury amount is devided equaly between buyer (<strong>skankhunt420</strong>) and seller (<strong>sauravd069</strong>) and 10% will go to Good Time Design for platform fee.
      <br/><br/>
      <span className="smallText-two">£1,000 X 1 / 100  =  <strong>£10</strong>. 
      <br/> £10 - £1 (GTD platform fee) = <strong>£9</strong> <br/> sauravd069 = <strong>£4.50 </strong>and skankhunt420 = <strong>£4.50</strong></span>
    </p>
    </>

  );
};
const Game = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionConfig>
    <div className="margin-top-imp">
      <div className="lcac-outter">
        <h1 className="lcac-outter-h1"><span className="second-font">goodtime.design <br/><br/></span>( GTD / about )</h1>
        <br />
        <p>
          Good Time Design (GTD) is an online community of fine art enthusiasts, a consortium between independent designers, manufacturers, digital creators and artists, providing a transparent trade of digital (tangible) assets.
        </p>
        <p>
          Good time design is creating a community of fine art enthusiasts by providing a platform for transparent trade of art, offering utilities like acquiring and selling unique assets, while keeping a record of the province. 
        </p>
        <p>
          Good Time Design is a members-only community, with a £1 joining fee; 50% of the joining fee goes into the member’s community treasury wallet. <i>50p</i>
        </p>
        <p>
          The community treasury receives one percent of each transaction. 
        </p>
        <br/>
        <h1 className="lcac-outter-h1">F A Q</h1>
        <br/>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="lca-title"><i>Q1.</i></h1>
          <h2 className="subHeading-last">There is an artwork listed on the platform by sauravd069 for £ 1,000 /- and skankhunt420 acquires it, what happens in the application ?</h2>
          <div className="folio-card-icon-outter-lca">
            {isOpen ? <OriginStoryContent /> : null}
              
          <h3>{isOpen ? "" : "..."}</h3>
          <br/>
          </div>
        </motion.div>
        <br/>
        <motion.div 
          className="default"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="lca-title"><i>Q2.</i></h1>
          <h2 className="subHeading-last">How can a member Cash Out their treasury balance ?</h2>
          <div className="folio-card-icon-outter-lca">
          <h3>...</h3>
          </div>
        </motion.div>


        <br/><br/><br/><br/><br/><br/>
      </div>

    </div>
    </MotionConfig>
  );
};
export default Game;
