
import Article from "./Article";
import Banner from "./Banner";


const MainAreaOne = ({articleData}) => {


    return(
        <div className="mainArea">

            {articleData?.map((post) => {
                return(
                    <Article post={post} />
                );
            })}            
            
            {/* These are banners */}
            <div className="gal">
                <div>
                    <h1>Gtown Journal</h1>
                    <p>A community of expressive illustrators, inspiring writers and creative content creators, all documenting Gtown with their art.</p>
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