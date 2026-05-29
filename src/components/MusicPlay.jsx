import { useState, useRef } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const MusicPlay = () => {

    const[isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if(isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return(
         <div className="music-outter">
            <h1>A Shadow's Lament </h1>
            <h3>- Pianza</h3>
            <p>
                A Shadow's Lament by Pianza, released in 2023 is a perfect song for my portfolio background music.
            </p>
            <audio ref={audioRef} src={process.env.PUBLIC_URL+"/music/backgroundMusic.mp3"} />
            <button onClick={togglePlay} className={isPlaying ? "musicActive" : "musicBtn"}>
                {isPlaying ? <PauseIcon style={{ fontSize: 30}}/> : <PlayArrowIcon style={{ fontSize: 30}}/>}
            </button>
        </div>
    )
} 

export default MusicPlay;