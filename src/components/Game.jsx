
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
     After verifying the authenticity of the chair design, the platform covers the £50 cost of intellectual property registration. As a result, the net value of the concept design is <strong>£9,950</strong>.
     </p>
     <p>
    GTD charges a commission of 1% from both the buyer and the seller, calculated on the net design value (excluding the IP registration cost). In this case, <strong>1%</strong> of £9,950 equals £99.50.
     </p>
     <p>
      The seller (designer) receives £9,850.50 (£9,950 minus the seller commission of £99.50).
      The buyer is charged a total of £10,099.50, which includes the listed price of £10,000 plus a 1% buyer commission of £99.50.
     </p>
<br/><p>
      <span className="smallText-two">£10,000 - £50  =  <strong>£9,950.00</strong>. 
      <br/>1% of £9,950.00 = <strong>£99.50</strong> <br/> @skankhunt420 = <strong>£9,850.50</strong> (£9,950.00 - £99.5)<br/> manufacturer = <strong>£10,099.50</strong>(£10,0000 + £99.50)</span>
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
          Goodtime.design is a conceptual design marketplace created to empower independent industrial designers and connect them directly with manufacturers seeking original, sustainable, and <strong>manufacturing ready product concepts</strong>. The platform enables designers to monetise their CAD work and Product Design Specifications (PDS) while ensuring proper intellectual property protection and fair commercial opportunities.
        </p>
        <p>
          Designers can submit original concept designs along with full documentation for review. Once a design is verified as genuine, original, and technically sound, GTD funds the required intellectual property registration and enters into an agreement with the designer, granting the platform exclusive rights to list and monetise the design. This removes upfront financial barriers for designers while maintaining transparency and ownership value.
        </p>
        <p>
          Approved designs are listed with flexible commercial options. Manufacturers may purchase full intellectual property and manufacturing rights outright, or acquire partial rights through a capital-raising model tied directly to the design. This allows designers to raise funding by offering a defined percentage of rights in their concept, similar to equity, while retaining long-term participation through royalties. Manufacturers who acquire sufficient rights gain the ability to mass-produce the design for retail, with designers continuing to benefit from perpetual royalty arrangements.
        </p>
        <p>
          GTD operates with a low-commission structure, earning a small percentage from successful transactions while covering initial IP costs. The platform prioritises sustainable, practical designs that can be produced through 3D printing or injection moulding, offering manufacturers vetted concepts ready for production and designers a legitimate path to market.
        </p>
        <p>
          By lowering barriers to entry and formalising the relationship between designers and manufacturers, goodtime.design aims to unlock global opportunities for talented independent designers and support the creation of simple, sustainable products for modern manufacturing.
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
          <h2 className="subHeading-last">A redesigned concept chair is listed on the platform by <strong>@skankhunt420</strong> for £10,000 /- and a chair manufacturer acquires it, what is happening in the application?</h2>
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
