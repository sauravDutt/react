import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">
            <Article />
            <Banner/>
            <Article />
            <Banner />
            <Article />
        </div>
    );
}
export default MainAreaOne