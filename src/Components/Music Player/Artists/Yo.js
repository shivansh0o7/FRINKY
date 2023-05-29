import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";

function Yo()
{
    const yo=[
        {
            "title":"Blue Eyes",
            "music":"Music/Artists/Yo Yo Honey singh/Blue Eyes.mp3",
            "img":"Artists/Yo/Blue.jpg",
            "id":1
        },
        {
            "title":"Brown Rang",
            "music":"Music/Artists/Yo Yo Honey singh/Brown Rang.mp3",
            "img":"Artists/Yo/Brown.jpg",
            "id":2
        },
        {
            "title":"Desi Kalakaar",
            "music":"Music/Artists/Yo Yo Honey singh/Desi Kalakaar.mp3",
            "img":"Artists/Yo/Desi.jpg",
            "id":3
        },
        {
            "title":"Designer",
            "music":"Music/Artists/Yo Yo Honey singh/Designer.mp3",
            "img":"Artists/Yo/Designer.jpg",
            "id":4
        },
        {
            "title":"Dheere Dheere Se Meri Zindagi",
            "music":"Music/Artists/Yo Yo Honey singh/Dheere Dheere Se Meri Zindagi.mp3",
            "img":"Artists/Yo/Dheere.jpg",
            "id":5
        },
        {
            "title":"LOVE DOSE",
            "music":"Music/Artists/Yo Yo Honey singh/LOVE DOSE.mp3",
            "img":"Artists/Yo/Love.jpg",
            "id":6
        },
        {
            "title":"Saiyaan Ji",
            "music":"Music/Artists/Yo Yo Honey singh/Saiyaan Ji.mp3",
            "img":"Artists/Yo/Saiyaan.jpg",
            "id":7
          },
          {
            "title":"Sunny Sunny Yaariyan",
            "music":"Music/Artists/Yo Yo Honey singh/Sunny Sunny Yaariyan.mp3",
            "img":"Artists/Yo/Sunny.jpg",
            "id":8
          },
          {
            "title":"Theres Party On My Mind",
            "music":"Music/Artists/Yo Yo Honey singh/Theres Party On My Mind.mp3",
            "img":"Artists/Yo/Party.jpg",
            "id":9
          },
          {
            "title":"MAKHNA",
            "music":"Music/Artists/Yo Yo Honey singh/MAKHNA.mp3",
            "img":"Artists/Yo/Makhna.jpg",
            "id":10
        },
    ]
    const [select, setSelect] = useState(yo[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = yo;
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
            id="wall_yo"
            src="Artists/Yo/Yo.jpg" alt="Error" />
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
              song={yo}
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
export default Yo;