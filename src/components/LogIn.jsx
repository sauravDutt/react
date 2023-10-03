
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';



export default function LogIn({setIsAuth, setUserData}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      setUserData(result);
      
    });
  }
  
  return (
      <div className='login-outter'>
        <div className='loginContainer'>
          <AccountCircleOutlinedIcon fontSize='large' sx={{mt:2, mb:2 ,width: '100%', fontSize: 50}}/>
          <p>
            To leave a message you first need to sign in with your google account.
          </p>
          <button className='login-with-google-btn' onClick={signInWithGoogle}>Signin with Google</button>
        </div>
      </div>
  );
}