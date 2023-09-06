// import { GraphQLClient, gql } from 'graphql-request';
import { useState} from 'react';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import axios from 'axios';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';
import News from './components/News';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

// const graphCMS = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/cllt4kd4j35f101ue560af6gk/master');
 
// const QUERY = gql`

// {
//   articles {
//     title,
//     description,
//     date,
//     img(locales: en, forceParentLocale: false) {
//       url
//     }
//     userName,
//     userImage {
//       url
//     }
//   }
// }
// `


function App() {
  // Article Data from GraphQL CMS tool
  // const [article, setArticle] = useState([]);

  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  // async function getArticleData() {
  //     setArticle(await graphCMS.request(QUERY));
  // }



  // let articleData = article.articles;

  // useEffect(() => {
  //   getArticleData();
  // }, []);
  return(
    <Router>
      <div className="header-outter">
          <div className="buttons-outter">
            <Link to='/' className="button-outter"><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            <Link to='/' className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            <Link to ='/news'className="button-outter"><NewspaperRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><AccountCircleOutlinedIcon fontSize='large' sx={{width: '100%'}}/></Link> : <Link className="button-outter-logout"><img src={userData.user.photoURL} alt="userImage" className='logOutBtnImg'/></Link>}
          </div>
      </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainAreaOne/>}/>
        <Route path='/login' element={<LogIn setIsAuth={setIsAuth} setUserData={setUserData}/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
