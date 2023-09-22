import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const CreateArticle = ({isAuth}) => {

    let navigate = useNavigate();
    
    useEffect(() => {

        if(!isAuth) {
            navigate('/login');
        }

    });

    const goToArticleForm = () => {
        navigate('/create-article');
    }

    const goToIllustrationForm = () => {
        navigate('/upload-illustration');
    }

    return(
        <div className="createArticle-outter">
            <div onClick={goToArticleForm}>
                <h1>
                    Create an <span>article</span>
                </h1>
            </div>
            <div onClick={goToIllustrationForm}>
                <h1>
                    Upload an <span>illustration</span>
                </h1>
            </div>
        </div>
    );
}

export default CreateArticle;
