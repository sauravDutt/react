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
                Create an <sub> article</sub>
            </h1>
            <div>
                <label>Article title </label>
                <input type="text"/>
                <label>Article content</label>
                <textarea></textarea>
                <button>Post</button>
            </div>
        </div>
    );
}

export default CreateArticleForm;