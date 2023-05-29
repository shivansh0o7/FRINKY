import {useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import { selectFav } from "./store/FavSlice";
import "./Favorite.css";
import Player from "./Music Player/Player";
import Nav from './navbar';


function Favorite()
{
    const counting = useSelector(selectFav);
    const [select, setSelect] = useState();
    const [fake, setfake] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);
    const [autoplay, setautoplay] = useState(false);
    const [image, setImage] = useState("");

    let count=1;

    const handleClick = (props) => {
        setSelect(props.music);
        setfake(true);
        setShowPlayer(true);
        setImage(props.img);
        if (count === 1) {
          setautoplay(true);
        }
        count = 2;
      };

    return(
        <div className="Favorite">
        <Nav/>
        <div>

        <div className="head_fav">
            <h1>Your <span><img src="favorite.png" height="100" alt="Error"/></span>Favorite Songs <span id="fav_icon"><img src="heart.png" alt="error" height="100" /></span></h1>
        </div>
        {/* //eslint-disable-next-line */}
        <marquee behavior="scroll" scrollamount="20" id="marquee">Below is your <b>Favorite Songs</b>&#10084;</marquee>
            <div className="TopSong">
            {counting?
             counting.map((obj)=>(
                <div key={obj.id} className="Songs">
                    <img src={obj.img} height="100" alt="error" onClick={()=>handleClick(obj)} id="BigImage"/>
                    <h2>{obj.title}</h2>
                    <p>{obj.artist}</p>
                </div>
            )):""
            }

            </div>
            {/* Empty Space */}
            <div className='space_fav'></div>
            {showPlayer && (
            <div className="player">
              <Player
                select={select}
                fake={fake}
                setfake={setfake}
                song={counting}
                autoplay={autoplay}
                setautoplay={setautoplay}
                image={image}
                setImage={setImage}
              />
            </div>
          )}
        </div>

        </div>
    )
}
export default Favorite;