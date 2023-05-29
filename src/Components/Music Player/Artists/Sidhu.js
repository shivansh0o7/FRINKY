import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./Sidhu.css";

function Sidhu()
{
    const sidhu=[
        {
            "title":"295",
            "music":"Music/Artists/Sidhu Moose Wala/295.mp3",
            "img":"Artists/Sidhu/295.jpg",
            "id":1
        },
        {
            "title":"East Side Flow",
            "music":"Music/Artists/Sidhu Moose Wala/East Side Flow.mp3",
            "img":"Artists/Sidhu/East.jpg",
            "id":2
        },
        {
            "title":"GOAT",
            "music":"Music/Artists/Sidhu Moose Wala/GOAT.mp3",
            "img":"Artists/Sidhu/Goat.jpeg",
            "id":3
        },
        {
            "title":"LEGEND",
            "music":"Music/Artists/Sidhu Moose Wala/LEGEND.mp3",
            "img":"Artists/Sidhu/Legend.jpg",
            "id":4
        },
        {
            "title":"LEVELS",
            "music":"Music/Artists/Sidhu Moose Wala/LEVELS.mp3",
            "img":"Artists/Sidhu/Levels.jpg",
            "id":5
        },
        {
            "title":"NEVER FOLD",
            "music":"Music/Artists/Sidhu Moose Wala/NEVER FOLD.mp3",
            "img":"Artists/Sidhu/Never.jpg",
            "id":6
        },
        {
            "title":"Same Beef Song",
            "music":"Music/Artists/Sidhu Moose Wala/Same Beef Song.mp3",
            "img":"Artists/Sidhu/Same.jpg",
            "id":7
        },
        {
            "title":"So High",
            "music":"Music/Artists/Sidhu Moose Wala/So High.mp3",
            "img":"Artists/Sidhu/So.jpg",
            "id":8
        },
        {
            "title":"THE LAST RIDE",
            "music":"Music/Artists/Sidhu Moose Wala/THE LAST RIDE.mp3",
            "img":"Artists/Sidhu/The.jpg",
            "id":9
        },
        {
            "title":"These Days",
            "music":"Music/Artists/Sidhu Moose Wala/These Days.mp3",
            "img":"Artists/Sidhu/These.jpg",
            "id":10
        },
    ]
    const [select, setSelect] = useState(sidhu[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = sidhu;
  const handleClick = (props) => {
    setSelect(props.music);
    setfake(true);
    setImage(props.img)
    setShow(true);
  }
  return (
    <div className="Head">
      <Nav />
      <div className="main_bh">
        {/* {click?
      <Alert setClick={setClick}/>
      :""
      } */}

        <div className="Wallpaper">
          <img
            id="wall_sidhu"
            src="Artists/Sidhu/Sidhu.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
            Arijit Singh (born 25 April 1987) is an Indian singer and music composer. The recipient of several accolades including a National Film Award and six Filmfare Awards, he has recorded songs in several Indian languages. He is regarded as one of the best and the most versatile playback singers of this generation.He is also known for his humble personality and simple lifestyle.

            Singh began his career when he participated in the contemporary reality show, Fame Gurukul in 2005, but didn't receive widespread recognition before the release of "Tum Hi Ho" and "Chahun Main Ya Naa" in 2013.He was declared the most-streamed Indian artist of 2020, 2021 and 2022 by Spotify. He is the most followed Asian soloist on Spotify.
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px", fontWeight: 'bold' }}><i>List:-</i></p>
        </div>
        <div style={{ border: '1px dashed black', marginBottom: '20px' }}></div>
        <div className="list_head">
          <div id="hardy_number">No.</div>
          <div id="hardy_name">Name</div>
        </div>



        <div className="phone_hardy">
          {song.map((obj) => (
            <>
              <div key={obj.id} className="Artist_SongList ">
                <label style={{ display: 'flex', cursor: 'pointer' }}>
                  {obj.id < 10 ? <h4 id="Art_Number">{obj.id}.&nbsp;&nbsp;</h4> : <h4 id="Art_Number">{obj.id}.</h4>}
                  <img src={obj.img} alt="Error" height="25" />
                  <h4 id="Art_name" onClick={() => handleClick(obj)}>{obj.title}</h4>
                </label>
              </div>
            </>
          ))}
        </div>

        {show && (
          <div>
            <Player
              select={select}
              fake={fake}
              setfake={setfake}
              song={sidhu}
              autoplay={autoplay}
              setautoplay={setautoplay}
              image={image}
              setImage={setImage}
            />
          </div>
        )}
        {/* For empty space */}
        <div className="space">
        </div>
      </div>
    </div>
  )
}
export default Sidhu;