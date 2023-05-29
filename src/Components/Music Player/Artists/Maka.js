import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";

function Maka()
{
    const maka=[
        {
            "title":"Glassiyan",
            "music":"Music/Artists/Maka Singh/Glassiyan.mp3",
            "img":"Artists/Mika/Glassiyan.jpg",
            "id":1
        },
        {
            "title":"Honthon Pe Bas",
            "music":"Music/Artists/Maka Singh/Honthon Pe Bas.mp3",
            "img":"Artists/Mika/Honthon.jpg",
            "id":2
        },
        {
            "title":"Ishqam",
            "music":"Music/Artists/Maka Singh/Ishqam.mp3",
            "img":"Artists/Mika/Ishqam.jpeg",
            "id":3
        },
        {
            "title":"Mika Di Vohti",
            "music":"Music/Artists/Maka Singh/Mika Di Vohti.mp3",
            "img":"Artists/Mika/Mika.jpg",
            "id":4
        },
        {
            "title":"Miss You Dil Meri Mann Da Hi Nahi",
            "music":"Music/Artists/Maka Singh/Miss You Dil Meri Mann Da Hi Nahi.mp3",
            "img":"Artists/Mika/Miss.jpg",
            "id":5
        },
        {
            "title":"Roop Tera Mastana",
            "music":"Music/Artists/Maka Singh/Roop Tera Mastana.mp3",
            "img":"Artists/Mika/Roop.jpg",
            "id":6
        },
        {
            "title":"Sanedo(From 'Made In China')",
            "music":"Music/Artists/Maka Singh/Sanedo(From 'Made In China').mp3",
            "img":"Artists/Mika/Sanedo.jpg",
            "id":7
        },
        {
            "title":"Sawan Mein Lag Gayi Aag (From 'Ginny Weds Sunny')",
            "music":"Music/Artists/Maka Singh/Sawan Mein Lag Gayi Aag (From 'Ginny Weds Sunny').mp3",
            "img":"Artists/Mika/Sawan.jpg",
            "id":8
        },
        {
            "title":"Tum Jo Mil Gaye Ho",
            "music":"Music/Artists/Maka Singh/Tum Jo Mil Gaye Ho.mp3",
            "img":"Artists/Mika/Tum.jpg",
            "id":9
        },
        {
            "title":"What The Luck",
            "music":"Music/Artists/Maka Singh/What The Luck.mp3",
            "img":"Artists/Mika/What.jpg",
            "id":10
        },
        {
            "title":"Whistle Baja 2.0(From 'Heropanti 2')",
            "music":"Music/Artists/Maka Singh/Whistle Baja 2.0(From 'Heropanti 2').mp3",
            "img":"Artists/Mika/Whistle.jpg",
            "id":11
        },
    ]
    const [select, setSelect] = useState(maka[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = maka;
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
            id="wall_mika"
            src="Artists/Mika.jpg" alt="Error" />
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



        <div className="phone">
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
              song={maka}
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
export default Maka;