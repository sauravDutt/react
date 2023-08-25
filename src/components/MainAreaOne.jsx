import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">

            {/* These are normal article with an img div */}
            <Article articleImg="articleOne" />
            <Article articleImg="five" />

            {/* These are banners */}
            <div className="gal">
                <div>
                    <h1>Create</h1>
                    <p>Expressive Illustrations, inspiring literature, convert them into non-fungible tokens.</p>
                </div>
            </div>
            <Banner className="bannerBoiler cat" />

            {/* These are custom article with background img  */}

            <Banner className="bannerBoiler one" />
            <Banner className="bannerBoiler two" />
            <Banner className="bannerBoiler three" />
            <Banner className="bannerBoiler community"/>
        </div>
    );
}
export default MainAreaOne