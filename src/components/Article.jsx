// import gtownAbout from '../img/gtownAbout.jpg'

const Article = ({title, articleImg}) => {

    return(
        <div className={title ? title:'articleBoiler'}>
            <div className={articleImg ? articleImg:'imgBoiler'}></div>

        </div>
    );
}


export default Article;