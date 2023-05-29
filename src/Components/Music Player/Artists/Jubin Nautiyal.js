import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./Jubin.css";
function Jubin()
{
    const jubin = [
        {
            "title":"Bana Sharabi(From 'Govinda Naam Mera')",
            "music":"Music/Artists/Jubin Nautiyal/Bana Sharabi.mp3",
            "img":"Artists/Jubin/Bana.jpg",
            "id":1,
        },
        {
            "title":"Chaiyaan Mein(From 'Khuda Haafiz 2')",
            "music":"Music/Artists/Jubin Nautiyal/Chaiyaan Mein.mp3",
            "img":"Artists/Jubin/Chaiyaan.jpg",
            "id":2,
        },
        {
            "title":"Darbadar",
            "music":"Music/Artists/Jubin Nautiyal/Darbadar.mp3",
            "img":"Artists/Jubin/Darbadar.jpg",
            "id":3,
        },
        {
            "title":"Meherwan",
            "music":"Music/Artists/Jubin Nautiyal/Meherwan.mp3",
            "img":"Artists/Jubin/Meherwan.jpg",
            "id":4,
        },
        {
            "title":"Raataan Lambiyan(From 'Shershaah')",
            "music":"Music/Artists/Jubin Nautiyal/Raataan Lambiyan.mp3",
            "img":"Artists/Jubin/Raataan.jpg",
            "id":5,
        },
        {
            "title":"Rabba Janda(From 'Mission Majnu')",
            "music":"Music/Artists/Jubin Nautiyal/Rabba Janda.mp3",
            "img":"Artists/Jubin/Rabba.jpg",
            "id":6,
        },
        {
            "title":"Saath Hum Rahein(From 'Drishyam 2')",
            "music":"Music/Artists/Jubin Nautiyal/Saath Hum Rahein.mp3",
            "img":"Artists/Jubin/Saath.jpg",
            "id":7,
        },
        {
            "title":"Suna Hai(From 'Sanak')",
            "music":"Music/Artists/Jubin Nautiyal/Suna Hai.mp3",
            "img":"Artists/Jubin/Suna.jpg",
            "id":8,
        },
        {
            "title":"The Humma Song(From 'Ok jaanu')",
            "music":"Music/Artists/Jubin Nautiyal/The Humma Song.mp3",
            "img":"Artists/Jubin/Humma.jpg",
            "id":9,
        },
        {
            "title":"Yu Tere Hue Hum(Salaam Venky)",
            "music":"Music/Artists/Jubin Nautiyal/Yu Tere Hue Hum.mp3",
            "img":"Artists/Jubin/Yu.jpg",
            "id":10,
        },
    ]
    const [select,setSelect]=useState(jubin[0].music);
    const [fake,setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(true);
    const [image, setImage] = useState("");
    const song = jubin;
    const handleClick = (props) =>
    {
        setSelect(props.music);
        setfake(true);
        setImage(props.img)
        setShow(true);
    }
    return(
        <div className="Head">
      <Nav />
      <div className="main_bh">
      {/* {click?
      <Alert setClick={setClick}/>
      :""
      } */}

        <div className="Wallpaper">
          <img
            className="jubin_wal"
           src="Artists/Jubin.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
          Jubin Nautiyal (born 13 June 1989) is an Indian playback singer and artist.Jubin was awarded the Upcoming Male Vocalist at the 8th Mirchi Music Awards, 2016 for his song "Zindagi Kuch Toh Bata (Reprise)" from Bajrangi Bhaijaan. Another achievement of his is the Rising Musical Star Award (2015) received in Zee Business. In the beginning of his career, he sang many songs including many hit songs for Hindi films. He has also recorded songs for films in various Indian languages. His famous songs include "Tum Hi Aana" and "Kinna Sona", from Marjaavaan declared chartbusters. "Wafa Na Raas Aayee" and "Bewafa Tera Masoom Chehra", his recent song "Loot Gaye" became a huge hit with 861 million views in 5 months, which is a remastered to the music of Ustad Nusrat Fateh Ali Khan. Sung the song "Raatan Longiya" in the film Shershah, apart from this he has sung the songs "Dil Galati Kar Baitha", "Bedridi Se Pyar Ka Sahara Na Mila" and "Ud Jaare Parinde" etc.
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px",fontWeight:'bold'}}><i>List:-</i></p>
        </div>
        <div style={{border:'1px dashed black',marginBottom:'20px'}}></div>
        <div className="list_head">
          <div id="jubin_number">No.</div>
          <div id="jubin_name">Name</div>
        </div>
        

        
        <div className="phone">
        {song.map((obj) => (
              <>
                <div key={obj.id} className="Artist_SongList ">
                <label style={{display:'flex',cursor:'pointer'}}>
                {obj.id<10?<h4 id="Art_Number">{obj.id}.&nbsp;&nbsp;</h4>:<h4 id="Art_Number">{obj.id}.</h4>}
                <img src={obj.img} alt="Error" height="25"/>
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
              song={jubin}
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

export default Jubin;