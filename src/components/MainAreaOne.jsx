import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">
            <Article title="articleOne" />
            <Banner/>
            <Article />
            <Banner />
            <Article />
        </div>
    );
}
export default MainAreaOne