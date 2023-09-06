import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';
import { auth } from '../firebase-config';
import gal from '../img/gal.png'


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
                <img src={gal} className='backgroundImgDashboard' alt='background img'/>
                <p>
                    <span>Welcome </span>is simply dummy text of the printing and typesetting industry. 
                    <i>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</i>, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum. <span>Gtown Journal</span> is simply <b>dummy text</b> of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum. <span>{userData.user.displayName}</span> is simply dummy text of the printing and typesetting industry. 
                    <b> Lorem Ipsum</b> has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                </p>
            </div>
        </div>
    );
}

export default UserDashboardPage;