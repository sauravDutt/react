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
            <div>
                <h1>
                    Create an <span>article</span>
                </h1>
            </div>
            <div>
                <h1>
                    Upload an <span>illustration</span>
                </h1>
            </div>
        </div>
    );
}

export default CreateArticle;
