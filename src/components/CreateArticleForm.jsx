import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";

const CreateArticleForm = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  const articleCollectionRef = collection(db, "article");
  const createArticle = async () => {
    await addDoc(articleCollectionRef, {
      title,
      content,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        photoUrl: auth.currentUser.photoURL,
      },
    });
    navigate("/");
  };

  return (
    <div className="form-outter">
      <h1>
        Leave a <sub> message</sub>
      </h1>
      <div>
        <label>Message title </label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Message content</label>
        <textarea
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></textarea>
        <button onClick={createArticle}>Post</button>
      </div>
    </div>
  );
};

export default CreateArticleForm;
