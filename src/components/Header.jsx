import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

const Header = ({setLoginBtn, setSignUpBtn}) => {

    const logInBtn = () => {
        setLoginBtn(true);
    }

    const showHome = () => {
        setLoginBtn(false);
        setSignUpBtn(false);
    }

    return(
        <div className="header-outter">
            <div className="buttons-outter">
                <div className="button-outter" onClick={showHome}><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter"><NewspaperRoundedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter" onClick={logInBtn}><AccountCircleOutlinedIcon fontSize='large' sx={{width: '100%'}}/></div>
            </div>
        </div>
    );
}

export default Header;