import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">

            {/* These are normal article with an img div */}
            <Article articleImg="articleOne" />
            <Article articleImg="five" />

            {/* These are banners */}
            <Banner className="bannerBoiler gal" />
            <Banner className="bannerBoiler cat" />

            {/* These are custom article with background img  */}
            
            <Article />

            <Banner className="bannerBoiler one" />
            <Banner className="bannerBoiler two" />
            <Banner className="bannerBoiler three" />
            <Banner className="bannerBoiler community"/>
            <Article title="goku" />
        </div>
    );
}
export default MainAreaOne