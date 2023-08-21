import Article from "./Article";
import Banner from "./Banner";

const MainAreaOne = () => {

    return(
        <div className="mainArea">
            <Article title="articleOne" />
            <Article title="five" />
            <Banner title='gal' />
            <Banner title="cat"/>
            <Article title="goku"/>
            <Article title="blinders"/>
            <Article />
        </div>
    );
}
export default MainAreaOne