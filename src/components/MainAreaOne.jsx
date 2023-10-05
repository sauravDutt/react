
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
        };

        getArticles();
    });


    return(
        <div className="mainArea">         
            
            {/* These are banners */}
            <div className="gal">
                <div>
                    <h1>SauravDutt.com</h1>
                    <p>Welcome to sauravdutt.com, a gallery of expressive illustrations, inspiring literature and maybe some poetry in the future. to know more about me go to <a href="https://about.sauravdutt.com/" target="blank">about.sauravdutt.com</a></p>
                </div>
            </div>
            <Banner className="bannerBoiler cat" position="positionRight" title="Simba" description="Interducing Simba, my local Indian street cat born in March of 2021. Following are illustrations of my neighbourhood ↓"/>

            {/* These are custom article with background img  */}

            <Banner className="bannerBoiler one" position="positionLeft" bigText="bigText"/>
            <Banner className="bannerBoiler two" position="positionRight" bigText="bigText"/>
            <Banner className="bannerBoiler three" position="positionLeft" bigText="bigText"/>
            <div className="club"></div>
            <div className="clubIn"></div>
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