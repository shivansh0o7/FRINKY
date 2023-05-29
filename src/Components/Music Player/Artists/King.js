import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";


function King()
{
    const king=[
        {
            "title":"Desi Dan Bilzeria",
            "music":"Music/Artists/King/Desi Dan Bilzeria.mp3",
            "img":"Artists/King/Desi.jpg",
            "id":1
        },
        {
            "title":"Ghumshudaa",
            "music":"Music/Artists/King/Ghumshudaa.mp3",
            "img":"Artists/King/Ghumshudaa.jpg",
            "id":2
        },
        {
            "title":"ILZAAM",
            "music":"Music/Artists/King/ILZAAM.mp4",
            "img":"Artists/King/ILZAAM.jpg",
            "id":3
        },
        {
            "title":"Na Ja Tu",
            "music":"Music/Artists/King/Na Ja Tu.mp3",
            "img":"Artists/King/Na.jpg",
            "id":4
        },
        {
            "title":"OOPS",
            "music":"Music/Artists/King/OOPS.mp3",
            "img":"Artists/King/oops.jpg",
            "id":5
        },
        {
            "title":"PABLO",
            "music":"Music/Artists/King/PABLO.mp3",
            "img":"Artists/King/Pablo.jpg",
            "id":6
        },
        {
            "title":"She Don't Give A",
            "music":"Music/Artists/King/She Don't Give A.mp3",
            "img":"Artists/King/She Don't Give A.jpg",
            "id":7
        },
        {
            "title":"Tu Aake Dekhle",
            "music":"Music/Artists/King/Tu Aake Dekhle.mp3",
            "img":"Artists/King/Tu Aake Dekhle.jpg",
            "id":8
        },
    ]
    const [select, setSelect] = useState(king[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = king;
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
          id="wall_king"
            src="Artists/King/King.jpg" alt="Error" />
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
              song={king}
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
export default King;