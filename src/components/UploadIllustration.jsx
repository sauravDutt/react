import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const UploadIllustration = ({isAuth}) => {

    let navigate = useNavigate();
    
    useEffect(() => {

        if(!isAuth) {
            navigate('/login');
        }

    });

    return(
        <div className="form-outter">
            <h1>Upload an <sub> Illutstration</sub></h1>
            <div>
                <label>Upload a file </label>
                <input type="file"/>
                <label>Caption</label>
                <input type="text"/>
                <button>upload</button>
            </div>
        </div>
    );
}

export default UploadIllustration;