import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">
            <Article title="articleOne" />
            <Banner title="cat"/>
            <Article title="goku"/>
            <Banner title="me"/>
        </div>
    );
}
export default MainAreaOne