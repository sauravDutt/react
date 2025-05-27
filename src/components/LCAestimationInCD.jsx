import Youtube from "react-youtube-embed";

const LCAestimationInCD = () => {
    return(
        <div className="Folio-outter">
            <div><h1 className="folioTitle">GoodTime Design<span className="seconfont">/LCAC</span></h1></div>
            <div className="lca-banner">
                <div></div>
                <div className="right-lca">
                    <h1>Life <br/>Cycle <br/>Assessment <br/>Calculator</h1>
                    <p>for estimation in conceptual design.</p>
                </div>
            </div>
            <div style={{width: '330px', height: '290px', margin:'0 auto',marginTop:'20px', padding: '10px'}}>
                <Youtube id='cYOC8_jJcII'/>
                <h2>Introduction to Life Cycle Assessment</h2>
            </div>
            <div className="page"></div>
            <div className="page"></div>
            <div></div>
        </div>
    )
}

export default LCAestimationInCD;