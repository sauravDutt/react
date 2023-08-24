import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">

            {/* These are normal article with an img div */}
            <Article articleImg="articleOne" />
            <Article articleImg="five" />

            {/* These are banners */}
            <Banner title='gal' />
            <Banner title="cat"/>

            {/* These are custom article with background img  */}
            <Article title="blinders"/>
            <Article />

            <Banner title={"one"} />
            <Banner title={"two"} />
            <Banner title={"three"} />
            <Article title="goku" />
        </div>
    );
}
export default MainAreaOne