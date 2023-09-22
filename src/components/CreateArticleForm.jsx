import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const CreateArticleForm = ({isAuth}) => {

    let navigate = useNavigate();
    
    useEffect(() => {

        if(!isAuth) {
            navigate('/login');
        }

    });


    return(
        <div className="form-outter">
            <h1>
                Create Article form
            </h1>
        </div>
    );
}

export default CreateArticleForm;