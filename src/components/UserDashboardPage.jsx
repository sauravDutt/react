import {signOut} from 'firebase/auth';
import { auth } from '../firebase-config';
import five from '../img/five.png';
import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';

const UserDashboardPage = ({setIsAuth, userData, isAuth}) => {

    let navigate = useNavigate();
    
    useEffect(() => {
        if(!isAuth) {
            navigate('/login');
        }
    });

    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    }

    console.log(userData)
    return(
        <div className="dashBoard-outter">
            <div className="userLogout">
                <div className='userImageDashboard-outter'>
                    <img src={userData.user.photoURL} alt="User"/>
                </div>
                <div className='userDetails'>
                    <h2>{userData.user.displayName}</h2>
                    <p>{userData.user.email}</p>
                    <button onClick={signOutUser}>Signout</button>
                </div>
                <div className='onlineDot'></div>
            </div>
            <div className='userStats'>
                <p>
                    <span>Welcome</span> to <strong>SauravDutt.com</strong>, a portfolio website build to showcase expressive illustrations and storytelling artwork with inspirational pieces of literature and maybe poetry.
                    <br/>
                    <img src={five} alt='five' />  
                    <br/>
                    Thank you,  <span>{userData.user.displayName}</span> for sparing some of your valuable time and making an effort, your kind words will go a long way.
                    <Link to='/create' className='messageBtn'><strong className='messageBtn'> Leave a message.</strong></Link>
                </p>
            </div>
        </div>
    );
}

export default UserDashboardPage;