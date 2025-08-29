import { useState } from "react"


const Chair = () => {

    let [isImgUrl, setIsImgUrl ] = useState('/img/desk.png')

    const showDesignInspiration = () => {
        setIsImgUrl('/img/csc.png')
        console.log(isImgUrl)
    }

    return(
        <div className="chair-Outter">
            <div className="chair-brief">
                <h1>
                    Design Form and Aesthetics, “good time design chair”
                </h1>
                <p>
                    The objective is to express personal aesthetics and design a prototype of a chair. The folio is structured in the following order. 
                </p>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <p style={{textAlign:"right", marginRight: "25px", marginTop:"22px"}}>----------{'>'}</p>
            </div>
            <div className="chair-structure">
                <ol>
                    <li>Final Model Process</li>
                    <li>Prototype Concept </li>
                    <li>Ideation Sketches</li>
                    <li>Manifesto</li>
                    <li>Personal Aesthetics Mood Board </li>
                    <li>Mind Map of Personal Aesthetics </li>
                    <li onClick={showDesignInspiration}>Design Inspiration</li>
                </ol>
            </div>
            <div className="chair-intro">
                <img src={process.env.PUBLIC_URL + isImgUrl } alt="img" srcset="" />
            </div>
        </div>
    )
}


export default Chair

