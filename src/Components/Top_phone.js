import { useState } from "react";
import { TopSong } from "./Music Player/Top";
import Player from "./Music Player/Player";

function TopPhone()
{
    const [select, setSelect] = useState(TopSong[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = TopSong;
  const handleClick = (props) => {
    setSelect(props.music);
    setfake(true);
    setImage(props.img)
    setShow(true);
  }
  return(
    <div className="TopPhone">
          {song.map((obj) => (
            <>
              <div key={obj.id} className="Artist_SongList ">
                <label style={{ display: 'flex', cursor: 'pointer' }}>
                  <img src={obj.img} alt="Error" height="25" />
                  <h4 style={{marginLeft: '50px',color:'white'}} onClick={() => handleClick(obj)}>{obj.title}</h4>
                </label>
              </div>
            </>
          ))}
          {show && (
            <div className="player">
              <Player
                select={select}
                fake={fake}
                setfake={setfake}
                song={TopSong}
                autoplay={autoplay}
                setautoplay={setautoplay}
                image={image}
                setImage={setImage}
              />
            </div>
          )}
        </div>
  )
}
export default TopPhone;