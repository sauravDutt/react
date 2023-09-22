import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const CreateArticle = ({isAuth}) => {

    let navigate = useNavigate();
    
    useEffect(() => {

        if(!isAuth) {
            navigate('/login');
        }

    });

    return(
        <div className="createArticle-outter">
            <div></div>
            <div></div>
        </div>
    );
}

export default CreateArticle;
