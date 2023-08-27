// import gtownAbout from '../img/gtownAbout.jpg'

const Article = ({post}) => {

    return(
        <div className='articleBoiler'>
            <div className='imgBoiler'>
                <img src={post.img.url} alt={post.title}/>
            </div>
            <h1>{post.title}</h1>
            <h4>{post.date}</h4>
            <p><span className="bigQuots">" </span>{post.description}<span className="bigQuots"> "</span></p>
            <div className="userTag">
                <img src={post.userImage.url} alt={post.userName}/>
                <p>{post.userName}</p>
            </div>
        </div>
    );
}


export default Article;