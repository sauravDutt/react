import { useState } from "react"


const Chair = () => {

    let [isImgUrl, setIsImgUrl ] = useState('/img/desk.png')

    const showDesignInspiration = () => {
        setIsImgUrl('/img/csc.png')
        console.log(isImgUrl)
    }
    const showMindMap = () => {
        setIsImgUrl('/img/handToolsOutter.png')
    }
    const showPersonalAesthetics = () => {
        setIsImgUrl('/img/one.png')
    }
    const showManifesto = () => {
        setIsImgUrl('/img/Part2.png')
    }
    const showIdeation = () => {
        setIsImgUrl('/img/glass.png')
    }
    const showPrototype = () => {
        setIsImgUrl('/img/cereal.png')
    }
    const showFinalModel = () => {
        setIsImgUrl('/img/v6.png')
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
                    <li onClick={showFinalModel}>Final Model Process</li>
                    <li onClick={showPrototype}>Prototype Concept </li>
                    <li onClick={showIdeation}>Ideation Sketches</li>
                    <li onClick={showManifesto}>Manifesto</li>
                    <li onClick={showPersonalAesthetics}>Personal Aesthetics Mood Board </li>
                    <li onClick={showMindMap}>Mind Map of Personal Aesthetics </li>
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

