import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect} from 'react';
// import axios from 'axios';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';
import SignUp from './components/SignUp';
// import News from './components/News';


const graphCMS = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/cllt4kd4j35f101ue560af6gk/master');
 
const QUERY = gql`
{
  articles {
    title,
    description,
    date,
    img(locales: en, forceParentLocale: false) {
      url
    }
    userName,
    userImage {
      url
    }
  }
}
`


function App() {
  // Article Data from GraphQL CMS tool
  const [article, setArticle] = useState([]);

  async function getArticleData() {
      setArticle(await graphCMS.request(QUERY));
  }



  let articleData = article.articles;

  // const [newsData, setNewsData] = useState({});
  const [showNews, setShowNews] = useState(false);
  // const [loading, setLoading] = useState(false);

  //Login and SignUp
  const [loginBtn, setLoginBtn] = useState(false);
  const [signUpBtn, setSignUpBtn] = useState(false);

  // News json variable -----  News Section Start ----------------------------------------------------------------------
  // let result;

  // async function getNewsData() {
  //   try {
  //     // ⛔️ TypeError: Failed to fetch
  //     // 👇️ incorrect or incomplete URL
  //     const response = await fetch('https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Ffeeds.feedburner.com%2Fndtvnews-top-stories');
  
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  
  //     result = await response.json();
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  
  // getNewsData();
  // console.log(result)
  
  // News Section End --------------------------------------------------------------------------------------------------

  useEffect(() => {
    getArticleData();
  }, []);

  // console.log(newsData);
  
  if(loginBtn) {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn} setShowNews={setShowNews}/>
      <NavBar />
      <LogIn setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn}/>
      
      </div>
    );
  }
  if(signUpBtn) {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn} setShowNews={setShowNews}/>
      <NavBar /> 
      <SignUp setLoginBtn={setLoginBtn}/>
      
      </div>
    );
  } 
  if(showNews) {
    return(
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn} setShowNews={setShowNews}/>
      <NavBar />
      
      {/* {loading ? "Loading..." : <div className='newsOutter'>
          {newsData.map((news) => {
            return(
              <News news={news}/>
            );
            
          })}
        </div>
      } */}
      
      </div>
    );
  } else {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn} setShowNews={setShowNews}/>
      <NavBar />
      <MainAreaOne articleData={articleData}/>

      
      </div>
    );
  }

  
}

export default App;
