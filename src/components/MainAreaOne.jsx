
import { useEffect, useState } from "react";
import Banner from "./Banner";

import {getDocs, collection} from 'firebase/firestore';
import { db } from "../firebase-config";

const MainAreaOne = () => {

    const [articleList, setArticleList] = useState([]);
    const articleCollectionRef = collection(db, "article");
    useEffect(() => {
        const getArticles = async () => {
            const data = await getDocs(articleCollectionRef);
            setArticleList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getArticles();
    });


    return(
        <div className="mainArea">         
            
            {/* These are banners */}
            <div className="gal">
                <div>
                    <h1>SauravDutt.com</h1>
                    <p>A community of expressive illustrators, inspiring writers and creative content creators, all documenting Gtown with their artwork.</p>
                </div>
            </div>
            <Banner className="bannerBoiler cat" position="positionRight" title="Create" description="Create your personalised articles, illustrations and artwork. Tell your story !!"/>

            {/* These are custom article with background img  */}

            <Banner className="bannerBoiler one" position="positionLeft" bigText="bigText"/>
            <Banner className="bannerBoiler two" position="positionRight" bigText="bigText"/>
            <Banner className="bannerBoiler three" position="positionLeft" bigText="bigText"/>
            <Banner className="bannerBoiler community" position="positionRight" title="Leave me a message" description="To leave a message click on the sign in button below. You'r articles or messages will appear here ↓"/>
            {articleList?.map((post) => {
                return(
                    <div className='articleBoiler'>
                        <h1>{post.title}</h1>
                        <p><span className="bigQuots">" </span>{post.content}<span className="bigQuots"> "</span></p>
                        <div className="userTag">
                            <img src={post.author.photoUrl} alt={post.author.name}/>
                            <p>{post.author.name}</p>
                        </div>
                    </div>
                );
            })}   
            <Banner className="narrow" />
        </div>
    );
}
export default MainAreaOne