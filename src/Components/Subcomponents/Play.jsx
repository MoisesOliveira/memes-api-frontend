import { useRef } from "react";
import '../styles/Play.css'

const Player = () =>{
    let playlist = ['http://10.0.0.107/thud.mp3','http://10.0.0.107/cash_register.mp3']
    let n = 0;
    let audio = new Audio(playlist)
    const play = useRef(null)
    let onclick = (e) =>{
        
        audio.src = playlist[n];
        
        if(e.currentTarget.classList.contains("bi-play")){
            e.currentTarget.classList.remove("bi-play")
            e.currentTarget.classList.add("bi-pause")
            audio.play();
        }
        else{
            e.currentTarget.classList.remove("bi-pause")
            e.currentTarget.classList.add("bi-play")
            audio.pause()
        }
        }
        let nextTrack = (e) =>{
            n++;
            audio.src = playlist[n];
            audio.play()
        }
        let previousTrack =(e) =>{
            n--;
            if(n<0){
                n = 0;
            }
            audio.src = playlist[n];
            if(play.current.classList.contains("bi-pause")){
                e.current.classList.remove("bi-pause")
                play.current.classList.add("bi-play")
            }
            audio.play()
        }

        

    return(
        <div style={{display: 'inline-flex'}}>
        <div>
        <button  class="but btn btn-outline-dark bi bi-skip-backward" onClick={previousTrack} style={{width: '30px'}}></button>
        </div>
        <div>
        <button ref={play} class="but first btn btn-dark bi bi-play" onClick={onclick} style={{width: '30px'}} />
        </div>
        <div>
        <button  class="but first btn btn-outline-dark bi bi-skip-forward" onClick={nextTrack} style={{width: '30px'}} />
        </div> 

        </div>
    )
}
export default Player;