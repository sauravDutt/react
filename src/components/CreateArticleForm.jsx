import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { db, auth} from "../firebase-config";

const CreateArticleForm = ({isAuth}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    let navigate = useNavigate();
    
    useEffect(() => {
        if(!isAuth) {
            navigate('/login');
        }
    });

    const articleCollectionRef = collection(db, "article");
    const createArticle = async () => {
        await addDoc(articleCollectionRef, {
                title, 
                content, 
                author: {name: auth.currentUser.displayName, id: auth.currentUser.uid, photoUrl: auth.currentUser.photoURL}
        });
        navigate('/');
    }

    return(
        <div className="form-outter">
            <h1>
                Create an <sub> article</sub>
            </h1>
            <div>
                <label>Article title </label>
                <input type="text" onChange={(event) => {setTitle(event.target.value)}}/>
                <label>Article content</label>
                <textarea onChange={(event) => {setContent(event.target.value)}}></textarea>
                <button onClick={createArticle}>Post</button>
            </div>
        </div>
    );
}

export default CreateArticleForm;