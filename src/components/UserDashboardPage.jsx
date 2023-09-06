import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';
import { auth } from '../firebase-config';


const UserDashboardPage = ({setIsAuth, userData}) => {
    let navigate = useNavigate()
    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate('/login');
        });
    }

    console.log(userData)
    return(
        <div className="dashBoard-outter">
            <div className="userLogout">
                <img src={userData.user.photoURL} alt="User"/>
                <div className='userDetails'>
                    <h2>{userData.user.displayName}</h2>
                    <p>{userData.user.email}</p>
                    <button onClick={signOutUser}>Sign out</button>
                </div>
                <div className='onlineDot'></div>
            </div>
            <div className='userStats'>

            </div>
        </div>
    );
}

export default UserDashboardPage;