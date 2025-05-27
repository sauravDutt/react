import Youtube from "react-youtube-embed";

const LCAestimationInCD = () => {
    return(
        <div className="Folio-outter">
            <div><h1 className="folioTitle">Good Time Design<span className="seconfont">/LCAC</span></h1></div>
            <div className="lca-banner">
                <div></div>
                <div className="right-lca">
                    <h1>Life <br/>Cycle <br/>Assessment <br/>Calculator</h1>
                    <p>for estimation in conceptual design.</p>
                </div>
            </div>
            <div style={{width: '330px', height: '320px', margin:'0 auto',marginTop:'30px', padding: '10px'}}>
                <Youtube id='cYOC8_jJcII'/>
                <p style={{fontSize: "12px", color: '#00000092'}}>*Braskem, 2015. Life Cycle Assessment. [Online] <br/>
Available at: <a href="https://www.youtube.com/watch?v=cYOC8_jJcII&ab_channel=Braskem" target="blank" style={{color: '#000'}}>https://www.youtube.com/watch?v=cYOC8_jJcII&ab_channel=Braskem</a>

</p>
                <h2>Introduction to Life Cycle Assessment</h2>
            </div>
            <div className="page">
                <p>
                    Life Cycle Assessment is used to analyse the different stages in a Product's Life Cycle in order to assess it's impact on the environment.
                    <br/><br/>
                    There are 4 main stages in a life cycle assessment<br/>
                        <strong>
                            1. Extracting and Processing the raw material<br/>
                            2. Manufacturing and Packaging your product<br/>
                            3. Using your product<br/>
                            4. Desposing of it<br/>
                        </strong>
                    <br/>
                    <strong>1. Extracting and Processing the raw materials</strong><br/>
                    Extracting the raw materials, from nature we often directly damage the local enfironment
                    for example; Cutting down forests for wood or Digging huge mines for minerals.<br/>
                    Processing the raw materials, indirectly damages the environment, because of the huge amount of energy required
                    like for example; Extracting metals from their ores, Fractinal Distillation of CRUDE oil for Plastic.. etc..
                    <br/><br/>
                    <strong>2. Manufacturing and Packaging</strong><br/>
                    The 3 main problems we face in manufacturing and packaging are as follows;<br/><br/>
                    1. Energy use<br/>
                    2. Pollution like Carbon Monooxide or Hidrogen Chloride.<br/>
                    3. Production of Waist products<br/>
                        3.1. Sometime we can use these waste products as raw material for something else.<br/>
                        3.2. Most of the time it's useless (have to be disposed of)<br/>
                </p>
            </div>
        </div>
    )
}

export default LCAestimationInCD;