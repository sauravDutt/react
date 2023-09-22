
import { useState} from 'react';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import UserDashboardPage from './components/UserDashboardPage';
import CreateArticle from './components/CreateArticle';
import './index.css';
import News from './components/News';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import ForumIcon from '@mui/icons-material/Forum';
import CreateArticleForm from './components/CreateArticleForm';
import UploadIllustration from './components/UploadIllustration';



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  
  return(
    <Router>
      <div className="header-outter">
          <div className="buttons-outter">
            <Link to='/' className="button-outter"><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link> : <Link to='/create' className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>}
            <Link to ='/news'className="button-outter"><ForumIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><AccountCircleOutlinedIcon fontSize='large' sx={{width: '100%'}}/></Link> 
              : 
            <Link className="button-outter-logout" to='/dashboard'><img src={userData.user.photoURL} alt="userImage" className='logOutBtnImg'/></Link>}
          </div>
      </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainAreaOne/>}/>
        <Route path='/login' element={<LogIn setIsAuth={setIsAuth} setUserData={setUserData}/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/dashboard' element={<UserDashboardPage setIsAuth={setIsAuth} userData={userData} isAuth={isAuth}/>} />
        <Route path='/create' element={<CreateArticle isAuth={isAuth}/>}/>
        <Route path='/create-article' element={<CreateArticleForm isAuth={isAuth}/>}/>
        <Route path='/upload-illustration' element={<UploadIllustration isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
