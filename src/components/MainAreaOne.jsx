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
          <h1>Gtownjournal.com</h1>
          <p>
            Gtown Journal, is a community (NFT collection), each illustration is
            it's own unique NFT (Non Fungible Tokens),{" "}
            <strong>each NFT holder is a member of the Gtown Journal</strong>.
          </p>
        </div>
      </div>
      <Banner
        className="bannerBoiler cat"
        position="positionRight"
        title="Community"
        description="in Gtown Journal, we maintain a community treasury called the 'Gtown Journal Treasury' every editor(NFT holder) has a say in the collected fund."
        heidBtn="heidBtn"
      />
      <Banner
        className="bannerBoiler one"
        position="positionLeft"
        title=""
        description=""
        heidBtn="heidBtn"
      />
      <Banner
        className="bannerBoiler two"
        position="positionRight"
        title=""
        description=""
        heidBtn="heidBtn"
      />
      <Banner
        className="bannerBoiler three"
        position="positionLeft"
        title=""
        description=""
        heidBtn="heidBtn"
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
        title="Become an editor."
        description="Every art in the Gtown Journal, tells a story, a memory and a vision, of decentralized trade of inspiritional art and expressing the love for the city."
        buttonText="join the editor dashbord"
        heidBtn="showBtn"
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
