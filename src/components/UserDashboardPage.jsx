import {signOut} from 'firebase/auth'
import { auth } from '../firebase-config';


const UserDashboardPage = ({setIsAuth, userData}) => {

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
                    <span>Welcome</span> to a simpler time, when Journalism was pure knowledge,  
                </p>
            </div>
        </div>
    );
}

export default UserDashboardPage;