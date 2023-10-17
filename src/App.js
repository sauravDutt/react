import { useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import UserDashboardPage from './components/UserDashboardPage';
import './index.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumIcon from '@mui/icons-material/Forum';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CreateArticleForm from './components/CreateArticleForm';
import Game from './components/Game';
import ChatBotOne from './components/ChatBotOne';



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  
  return(
    <Router>
      <div className="header-outter">
          <div className="buttons-outter">
            <Link to='/' className="button-outter"><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><ForumIcon fontSize='large' sx={{width: '100%'}}/></Link> : <Link to='/chatbot' className="button-outter"><ForumIcon fontSize='large' sx={{width: '100%'}}/></Link>}
            <Link to ='/game'className="button-outter"><GolfCourseIcon fontSize='large' sx={{width: '100%'}}/></Link>
            {!isAuth ? <Link to='/login' className="button-outter"><AccountCircleOutlinedIcon fontSize='large' sx={{width: '100%'}}/></Link> 
              : 
            <Link className="button-outter-logout" to='/dashboard'><img src={userData.user.photoURL} alt="userImage" className='logOutBtnImg'/></Link>}
          </div>
      </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainAreaOne/>}/>
        <Route path='/login' element={<LogIn setIsAuth={setIsAuth} setUserData={setUserData}/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/dashboard' element={<UserDashboardPage setIsAuth={setIsAuth} userData={userData} isAuth={isAuth}/>} />
        <Route path='/create' element={<CreateArticleForm isAuth={isAuth}/>}/>
        <Route path = '/chatbot' element={<ChatBotOne />}/>
      </Routes>
    </Router>
  );
  
}

export default App;
