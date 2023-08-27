// import gtownAbout from '../img/gtownAbout.jpg'

const Article = ({post}) => {

    return(
        <div className='articleBoiler'>
            <div className='imgBoiler'>
                <img src={post.img.url} alt={post.title}/>
            </div>
            <h1>{post.title}</h1>
            <h4>{post.date}</h4>
            <p>{post.description}</p>
        </div>
    );
}


export default Article;