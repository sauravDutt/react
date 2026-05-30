import DesignerIntro from './DesignerIntro';
import MusicPlay from './MusicPlay';
import Github from './Github';
import AboutDispenser from './AboutDispenser'
import CSC from './CSC';
import { MotionConfig } from "framer-motion";

const Portfolio = () => {
    return(
         <div className="article-outter">
              <div className='upper-spacing'></div>
              <MotionConfig transition={{ duration: 0.5 }}>
                <DesignerIntro/>
                <CSC/>
                <AboutDispenser/>
                <Github/>
                <MusicPlay/>
              </MotionConfig>
              <div className='upper-spacing-two'></div>
        </div>
    )
}

export default Portfolio;