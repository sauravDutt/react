

const BtsCard = () => {
    return(
        <>
        <div className="bts-card"></div>
        </>
    )
}

const Bts = () => {

  
    return(
        <div className="btsOutter-outter">
            <div className="btsOutter">
            <div className="bts-content-div">
                <h2>behind the scenes.</h2>
                <p>21 / 11 / 2024</p>
            </div>
            </div>
            
            <div className="bts-products-div">
                <BtsCard>
                </BtsCard>
                <BtsCard> </BtsCard>
            </div>
        </div>
    )
}

export default Bts;