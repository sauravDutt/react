import { useEffect, useState } from "react";
import Banner from "./Banner";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const MainAreaOne = () => {
  const [articleList, setArticleList] = useState([]);
  const articleCollectionRef = collection(db, "article");
  const getArticles = async () => {
    const data = await getDocs(articleCollectionRef);
    setArticleList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getArticles();
  });
  return (
    <div className="mainArea">
      {/* These are banners */}
      <div className="gal">
        <div>
          <h1>SauravDutt.com</h1>
          <p>
            A gallery of expressive illustrations, inspiring literature and
            maybe some poetry in the future. To know more about me go to{" "}
            <a href="https://about.sauravdutt.com/" target="blank">
              about.sauravdutt.com
            </a>
          </p>
        </div>
      </div>
      <Banner
        className="bannerBoiler cat"
        position="positionRight"
        title="Simba"
        description="Interducing Simba, my local Indian street cat born in March of 2021. Following are illustrations of my neighbourhood ↓"
      />
      <Banner
        className="bannerBoiler one"
        position="positionLeft"
        title=""
        description=""
      />
      <Banner
        className="bannerBoiler two"
        position="positionRight"
        title=""
        description=""
      />
      <Banner
        className="bannerBoiler three"
        position="positionLeft"
        title=""
        description=""
      />
      <div className="club"></div>
      <div className="gameBtn-info">
        <section>
          <h1>Golf⛳</h1>Click on the{" "}
          <span>
            <GolfCourseIcon fontSize="medium" />
          </span>{" "}
          button below to access a joint card for handicapping while playing
          your round.
        </section>
      </div>
      <div className="clubIn"></div>
      <Banner
        className="bannerBoiler community"
        position="positionRight"
        title="Leave me a message"
        description="To leave a message click on the sign in button below. You'r articles or messages will appear here ↓"
      />
      {articleList?.map((post) => {
        return (
          <div className="articleBoiler" key={post.id}>
            <h1>{post.title}</h1>
            <p>
              <span className="bigQuots">" </span>
              {post.content}
              <span className="bigQuots"> "</span>
            </p>
            <div className="userTag">
              <img src={post.author.photoUrl} alt={post.author.name} />
              <p>{post.author.name}</p>
            </div>
          </div>
        );
      })}
      <Banner className="narrow" position="" title="" description="" />
    </div>
  );
};
export default MainAreaOne;
