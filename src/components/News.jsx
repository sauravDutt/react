import SendIcon from '@mui/icons-material/Send';

const News = () => {

    return(
        <div className="news-outter">
            <h1><sup>Chatbot </sup><span>powered by <strong>Google Bard</strong></span></h1>
            <div className="chatbot-outter">

            </div>
            <div className="chatbot-input">
                <input type='text'/>
                <button><SendIcon fontSize='large' sx={{width: '100%'}}/></button>
            </div>
        </div>
        
    );
}

export default News; 