import { useState, useRef, useEffect} from 'react';
import './Player.css'

function Player({ select, fake, setfake, song, autoplay, setautoplay, image, setImage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(select);
  const clickRef = useRef();
  const [currentSong, setCurrentSong] = useState(select);
  const [isSkip, setIsSkip] = useState(false);
  const [seekbar, setSeekBar] = useState({});
  const [repeat,setRepeat] = useState(true);
  const change = select;

  
  const handleDuration=(props)=>
  {
    const minutes = Math.floor(props / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(props % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }
 
  useEffect(() => {
    if (autoplay) {
      setIsPlaying(true);
      setautoplay(false);
    }
  }, [autoplay, setautoplay, setIsPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    }
    else {

      audioRef.current.pause()
    }

  }, [isPlaying])

  useEffect(() => {
    if (fake && change !== currentSong) {
      setCurrentSong(change);
      setIsPlaying(true);
      setfake(false);
    }
  }, [change, currentSong, isPlaying, setfake, fake])

  useEffect(() => {
    if (isSkip) {
      audioRef.current.play()
      setIsSkip(false);
    }

  }, [isSkip])

  const playPause = () => {
    setIsPlaying(!isPlaying);
  }

  const skipBack = () => {
    const index = song.findIndex(x => x.music === currentSong)
    if (index === 0) {
      setCurrentSong(song[song.length - 1].music)
      setImage(song[song.length - 1].img)
    }
    else {
      setCurrentSong(song[index - 1].music)
      setImage(song[index - 1].img)
    }
  }
  const skipNext = () => {
    const index = song.findIndex(x => x.music === currentSong)
    
    if (index === song.length - 1) {
      setCurrentSong(song[0].music);
      setImage(song[0].img);
    }
    else {
      setCurrentSong(song[index + 1].music);
      setImage(song[index + 1].img)
    }
  }
  // eslint-disable-next-line 
  useEffect(()=>{
    if(audioRef.current.currentTime===audioRef.current.duration && repeat)
    { 
      skipNext();
      setIsPlaying(true);
      setfake(false);
    }
  })
  useEffect(()=>{
    if(!repeat)
    {
      audioRef.current.loop=true;
    }
    else
    {
      audioRef.current.loop=false;
    }
  },[repeat])
  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const ct = audioRef.current.currentTime;

    setSeekBar({ ...seekbar, "progress": ct / duration * 100, "length": duration })
  }
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;

    audioRef.current.currentTime = divprogress / 100 * seekbar.length;
  }

  return (
    <>

      <div className='Musicplayer'>
      <div className='navigation'>
        <div className='navigation_wrapper' onClick={checkWidth} ref={clickRef}>
          <div className='seek_bar' style={{ color: 'green', width: `${seekbar.progress + "%"}` }}>
          </div>
        </div>
      </div>
        <div className='playerImage'>
          <img src={image} alt="Error" />
        </div>
        <audio src={currentSong} autoPlay ref={audioRef} onTimeUpdate={onPlaying}/>
        <div id='ct'>
          <p>{handleDuration(audioRef.current.currentTime)}</p>
        </div>

        <div className='Player_comp'>

          <img src="prev.png" alt="error" height="30" onClick={skipBack} style={{ margin: '20px' }} id="phone_player_img" />


          <img src={isPlaying ? "pause.png" : "play.png"} alt="Error" onClick={playPause} className="player_img" id="phone_player_img1" />

          <img src="next.png" alt="error" height="30" onClick={skipNext} style={{ margin: '20px' }} id="phone_player_img" />


        </div>
        <div id='duration'>
          <p>{handleDuration(audioRef.current.duration)}</p>
        </div>

        {repeat?
        <img className='repeat' src="repeat1.png" alt="error" height={"30"} onClick={()=>setRepeat(!repeat)} style={{ margin:'20px'}}/>
          :
        <img className='repeat' src="repeat2.png" alt="error" height={"30"} onClick={()=>setRepeat(!repeat)} style={{ margin:'20px'}}/>

        }
          

      </div>
    </>
  );
}

export default Player;
