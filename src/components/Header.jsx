import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const Header = () => {

    return(
        <div className="header-outter">
            <div className="buttons-outter">
                <div className="button-outter"><HomeRoundedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter"><PostAddRoundedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter"><StorefrontOutlinedIcon fontSize='large' sx={{width: '100%'}}/></div>
                <div className="button-outter"><AccountCircleOutlinedIcon fontSize='large' sx={{width: '100%'}}/></div>
            </div>
        </div>
    );
}

export default Header;