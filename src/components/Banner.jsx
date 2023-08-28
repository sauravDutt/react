
const Banner = ({className, position, title, bigText, description}) => {
     
    
    if (className) {
        return(
            <div className={`${className}`}>
                <div className={position}>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        );
        }
        
}

export default Banner;