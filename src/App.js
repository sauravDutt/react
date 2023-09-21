
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
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  
  return(
    <Router>
      <div className="header-outter">
          <div className="buttons-outter">
            <Link to='/' className="button-outter"><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link> : <Link to='/create-article' className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>}
            <Link to ='/news'className="button-outter"><NewspaperRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
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
        <Route path='/dashboard' element={<UserDashboardPage setIsAuth={setIsAuth} userData={userData}/>} />
        <Route path='/create-article' element={<CreateArticle isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
