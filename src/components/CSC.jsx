import { motion, MotionConfig } from "framer-motion";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { useState } from "react";


const CSC = () => {
    const [typeOfImg, setTypeOfImg] = useState(1);

    const FirstImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/DesignOne.png"} alt="profile" className="designIntroduction-img" />
            <h4 className="view-angle-h4">Home View</h4>
            </>
        )
    }
     const SecondImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/DesignTwo.png"} alt="profile" className="designIntroduction-img-down" />
            <h4 className="view-angle-h4">Right View</h4>
            </>
        )
    }
     const ThirdImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/DesignThree.png"} alt="profile" className="designIntroduction-img-down" />
            <h4 className="view-angle-h4">Top View</h4>
            </>
        )
    }
     const FourthImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/back.png"} alt="profile" className="designIntroduction-img-small-back" />
            <h4 className="view-angle-h4">Back View</h4>
            </>
        )
    }
    const FifthImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/mainMachine.png"} alt="profile" className="designIntroduction-img-down" />
            <h4 className="view-angle-h4-upper">Internal Mechanism</h4>
            </>
        )
    }
    const SixthImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/front.png"} alt="profile" className="designIntroduction-img-small" />
            <h4 className="view-angle-h4">Front View</h4>
            </>
        )
    }
    const SeventhImg = () => {
        return(
            <>
            <img src={process.env.PUBLIC_URL+"/img/newTwo.png"} alt="profile" className="designIntroduction-img-sm" />
            <h4 className="view-angle-h4">Logic</h4>
            </>
        )
    }

    const ShowImg = ({typeOfImg}) => {
        switch(typeOfImg) {
            case 1:
                return <FirstImg/>;
            case 2:
                return <SecondImg/>;
            case 3:
                return <ThirdImg/>;
            case 4:
                return <FifthImg/>;
            case 5:
                return <FourthImg/>;
            case 6:
                return <SixthImg/>;
            case 7:
                return <SeventhImg/>;
            default:
                return <SeventhImg/>;
        }
    }
 

    

    return(
        <MotionConfig transition={{ duration: 0.5 }}>
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="csc-outter"
        >
            <div className="Behind-product-text">
                <h1>treat dispenser</h1>
                <p>Conceptual Design<br/>Logic</p>
            </div>
            <div className="control-btns-outter">
                <button onClick={() => {setTypeOfImg(1)}}><RestartAltRoundedIcon style={{ fontSize: 30}}/></button>
                <button onClick={() => {setTypeOfImg(typeOfImg + 1)}}><NavigateNextIcon style={{ fontSize: 30}}/></button>
            </div>
            
            {ShowImg({ typeOfImg }) }
        </motion.div>
        </MotionConfig>
    )
}


export default CSC;