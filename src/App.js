
import { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';
import SignUp from './components/SignUp';
import News from './components/News';


function App() {
  // News
  const [newsData, setNewsData] = useState([]);
  const [showNews, setShowNews] = useState(false);

  //Login and SignUp
  const [loginBtn, setLoginBtn] = useState(false);
  const [signUpBtn, setSignUpBtn] = useState(false);


  //Make api call to news api
  async function getNewsData() {
    //Make news api call using axios
    const resp = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=59051ea4f46a456a89138ee2b8c878f3");
    setNewsData(resp.data.articles);
    
  }

  useEffect(() => {
    getNewsData();
  }, []);

  console.log(newsData);

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
      {/* <MainAreaOne/> */}
        <div className='newsOutter'>
          {newsData.map((news) => {
            return(
              <News news={news}/>
            );
            
          })}
        </div>
      
      </div>
    );
  } else {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn} setShowNews={setShowNews}/>
      <NavBar />
      <MainAreaOne/>

      
      </div>
    );
  }

  
}

export default App;
