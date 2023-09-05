
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default function LogIn() {


  return (
      <div className='login-outter'>
        <div className='loginContainer'>
          <AccountCircleOutlinedIcon fontSize='large' sx={{mt:2, mb:2 ,width: '100%', fontSize: 50}}/>
          <p>
            To become a Gtown Journal content creater you first have to sign in with your google account.
          </p>
          <button className='login-with-google-btn'>Signin with Google</button>
        </div>
      </div>
  );
}