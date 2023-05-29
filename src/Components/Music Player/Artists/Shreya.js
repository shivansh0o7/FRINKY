import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./Shreya.css";

function Shreya()
{
    const shreya=[
        {
            "title":"Baarish Aayi Hai",
            "music":"Music/Artists/Shreya Ghoshal/Baarish Aayi Hai.mp3",
            "img":"Artists/Shreya/Baarish.jpg",
            "id":1
        },
        {
            "title":"Jaadu hai nasha hain",
            "music":"Music/Artists/Shreya Ghoshal/Jaadu hai nasha hain.mp3",
            "img":"Artists/Shreya/Jaadu.jpg",
            "id":2
        },
        {
            "title":"Maine Pi Rakhi Hai Song",
            "music":"Music/Artists/Shreya Ghoshal/Maine Pi Rakhi Hai Song.mp3",
            "img":"Artists/Shreya/maine.jpg",
            "id":3
        },
        {
            "title":"Manwa Laage(From 'Happy New Year')",
            "music":"Music/Artists/Shreya Ghoshal/Manwa Laage(From 'Happy New Year').mp3",
            "img":"Artists/Shreya/Manwa.jpg",
            "id":4
        },
        {
            "title":"Param Sundari(From 'Mimi')",
            "music":"Music/Artists/Shreya Ghoshal/Param Sundari(From 'Mimi').mp3",
            "img":"Artists/Shreya/Param.jpg",
            "id":5
        },
        {
            "title":"Pyaar Karte Ho Na",
            "music":"Music/Artists/Shreya Ghoshal/Pyaar Karte Ho Na.mp3",
            "img":"Artists/Shreya/Pyaar.jpg",
            "id":6
        },
        {
            "title":"Raabta( Kehte Hain Khuda Ne )",
            "music":"Music/Artists/Shreya Ghoshal/Raabta( Kehte Hain Khuda Ne ).mp3",
            "img":"Artists/Shreya/Raabta.jpg",
            "id":7
        },
        {
            "title":"Yeh Ishq Hai",
            "music":"Music/Artists/Shreya Ghoshal/Yeh Ishq Hai.mp3",
            "img":"Artists/Shreya/Ye.jpg",
            "id":8
        },
        {
            "title":"Zoobi Doobi (From '3 Idiots')",
            "music":"Music/Artists/Shreya Ghoshal/Zoobi Doobi (From '3 Idiots').mp3",
            "img":"Artists/Shreya/Zoobi.jpg",
            "id":9
        }
    ]
    const [select, setSelect] = useState(shreya[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = shreya;
  const handleClick = (props) => {
    setSelect(props.music);
    setfake(true);
    setImage(props.img)
    setShow(true);
  }
  return (
    <div className="Head">
      <Nav />
      <div className="main_bh_shreya">
        {/* {click?
      <Alert setClick={setClick}/>
      :""
      } */}

        <div className="Wallpaper">
          <img
            id="wall_shreya"
            src="Artists/Shreya/Shreya.jpg" alt="Error" />
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
              song={shreya}
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
export default Shreya;