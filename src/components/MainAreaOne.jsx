
import Article from "./Article";
import Banner from "./Banner";


const MainAreaOne = ({articleData}) => {
    console.log(articleData);

    return(
        <div className="mainArea">         
            
            {/* These are banners */}
            <div className="gal">
                <div>
                    <h1>Gtown Journal</h1>
                    <p>A community of expressive illustrators, inspiring writers and creative content creators, all documenting Gtown with their artwork.</p>
                </div>
            </div>
            <Banner className="bannerBoiler cat" position="positionRight" title="Create" description="Create your personalised articles, illustrations and artwork. Tell your story !!"/>

            {/* These are custom article with background img  */}

            <Banner className="bannerBoiler one" position="positionLeft" bigText="bigText"/>
            <Banner className="bannerBoiler two" position="positionRight" bigText="bigText"/>
            <Banner className="bannerBoiler three" position="positionLeft" bigText="bigText"/>
            <Banner className="bannerBoiler community" position="positionRight" title="Join the Community" description='Join our exclusive online community by clicking on the sign in button below.'/>
            {articleData?.map((post) => {
                return(
                    <Article post={post} /> 
                );
            })}   
        </div>
    );
}
export default MainAreaOne