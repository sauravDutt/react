import Youtube from "react-youtube-embed";

const LCAestimationInCD = () => {
    return(
        <div className="Folio-outter">
            <div><h1 className="folioTitle">Good Time Design<span className="seconfont">/LCAC</span></h1></div>
            <div className="lca-banner">
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/lcaImg.png"} className="lcaImg-one" alt="LCA" />
                </div>
                <div className="right-lca">
                    <h1>Life <br/>Cycle <br/>Assessment <br/>Calculator</h1>
                </div>
            </div>
            <div style={{width: '330px', height: '320px', margin:'0 auto',marginTop:'30px', padding: '10px'}}>
                <Youtube id='cYOC8_jJcII'/>
                <p style={{fontSize: "12px", color: '#00000092'}}>Braskem, 2015. Life Cycle Assessment. [Online] <br/>
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
                    Extracting the raw materials, from nature we often directly damage the local environment
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
                    <br/>
                    <strong>3. Impact of using a Product</strong><br/>
                    When considering the impact of using a product, we need to lookat 2 things;<br/>
                    3.1. <strong>How much damage it does during it's lifetime</strong><br/>
                    example; How pollutin driving a car is or How much damage fertisisers do.<br/>
                    3.2 <strong>How long the product is used for</strong>
                    <br/><br/>
                    <strong>4. How we dispose of the product.</strong><br/>
                    If we placed in landfill, then we have taken up space that could have been used for nature, and chemicals might seep out into the surrounding ecosystems.<br/>
                    If we burn the waste products, they might release pollutents into the atmosphere.<br/>
                    We also have to consider the enery used to transport these waste items.<br/><br/>
                    Life Cycle Assessment of a Plastic Bag.<br/><br/>
                    <table>
                        <tr>
                            <td>
                                LCA Stages
                            </td>
                            <td>Plastic Bag</td>
                        </tr>
                        <tr>
                            <td>
                                1. Raw Materials
                            </td>
                            <td>
                                The raw material for a plastic bag is, Crude Oil, which is a finite resource and needs to be seperated using 
                                Fractional Distillation.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2. Manufacturing and Packaging 
                            </td>
                            <td>
                                For manufacturing of the plastic bag the hydrocarbons from Fractional distillation, will need to be cracked to make Alkenes and then these can undergo polymerisation to make plastic.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3. Using the Product 
                            </td>
                            <td>
                                In general plastic bags can be used multiple times.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4. Disposing of the product
                            </td>
                            <td>
                                they are <strong>not Biodegradable</strong> so they take up space in landfill or they might get into wild and harm animals.
                            </td>
                        </tr>
                    </table>
                    <br/>
                    
                    <br/>
                     <br/>
                    Gap in Life Cycle Assessment<br/><br/>
                    Making products involves loads of different steps, and it can be almost impossible to actualy quantify all of them.
                    it's very difficult to answer, How much energy was used or how many pollutions were produced and so on. <strong>Good Time Design</strong> solves this problem by introducing life cycle assessment calculator.
                    <br/><br/>
                    Our Life Cycle Assessment Calculator (LCAC), takes in a good render of the Peoduct's CAD and outputs an estimate of the entire product's life cycle, a report covering all the phases of a life cycle, i.e <br/>
                    <ul>
                        <li>Extracting and Peocessing of raw materials.</li>
                        <li>Manufacturing and Packaging of product.</li>
                        <li>Impact of using the product</li>
                        <li>How the product is disposed or recycled</li>
                    </ul>
                    The application meets the ISO 1404 and ISO 14044, standards that provide the framework and requirements for conduction life cycle assessments.
                    <ul>
                        <li>ISO 14040
                            <ul>
                                <li>Outlines the principles and framework of LCA</li>
                            </ul>
                        </li>
                        <li>ISO 14044
                            <ul>
                                <li>Specifies the requirements and guidelines for each phase of the LCA process</li>
                            </ul>
                        </li>
                    </ul>

                </p>
            </div>
        </div>
    )
}

export default LCAestimationInCD;   