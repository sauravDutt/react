import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">
            <Article title="articleOne" />
            <Banner title='gal' />
            <Article title="five" />
            <Banner title="cat"/>
            <Article title="goku"/>
            <Article title="blinders"/>
            <Article />
            <Banner title="me"/>
        </div>
    );
}
export default MainAreaOne