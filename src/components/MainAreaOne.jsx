import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect} from 'react';
// import Article from "./Article";
import Banner from "./Banner";

const graphCMS = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/cllt4kd4j35f101ue560af6gk/master');

const QUERY = gql`
  {
    articles{
      title,
      description,
      img{
        id,
        url
      },
      date
    }
  }
`

const MainAreaOne = () => {
    // Article data
    const [article, setArticle] = useState([]);

    async function getArticleData() {
        setArticle(await graphCMS.request(QUERY));
    }

    useEffect(() => {
        getArticleData()
    }, []);

    let articles = article.articles
    console.log(articles)

    return(
        <div className="mainArea">

            {/* {articles.map((post) => {
                return(
                    <Article post={post}/>
                );
            })} */}
            
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