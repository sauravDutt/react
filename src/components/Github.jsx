import GitHubIcon from '@mui/icons-material/GitHub';

const Github = () => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return(
         <div className="workOne-outter">
            <h1>Github</h1>
            <h3>Web Development projects</h3>
            <p>
                Along with industrial product design I have a keen intrest in font-end web development. Explore my github repositories 
            </p>
            <button onClick={() => openInNewTab("https://github.com/sauravDutt")}>
                <GitHubIcon style={{ fontSize: 30}} />
            </button>
        </div>
    )
} 

export default Github;