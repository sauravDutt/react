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
            <h1>Upload illustration form</h1>
        </div>
    );
}

export default UploadIllustration;