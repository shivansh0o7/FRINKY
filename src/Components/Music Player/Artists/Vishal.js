import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./Vishal.css";

function Vishal()
{
    const vishal=[
        {
            "title":"Baby Ko Bass Pasand Hai(From 'Sultan')",
            "music":"Music/Artists/Vishal Dadlani/Baby Ko Bass Pasand Hai(From 'Sultan').mp3",
            "img":"Artists/Vishal/Baby.jpg",
            "id":1
        },
        {
            "title":"Firecracker (From 'Jayeshbhai Jordaar')",
            "music":"Music/Artists/Vishal Dadlani/Firecracker (From 'Jayeshbhai Jordaar').mp3",
            "img":"Artists/Vishal/firecracker.jpg",
            "id":2
        },
        {
            "title":"Ghungroo(From 'WAR')",
            "music":"Music/Artists/Vishal Dadlani/Ghungroo(From 'WAR').mp3",
            "img":"Artists/Vishal/Ghungroo.jpg",
            "id":3
        },
        {
            "title":"Jai Jai Shivshankar Song (From 'WAR')",
            "music":"Music/Artists/Vishal Dadlani/Jai Jai Shivshankar Song (From 'WAR').mp3",
            "img":"Artists/Vishal/jai.jpg",
            "id":4
        },
        {
            "title":"Malhari(Bajirao Mastani)",
            "music":"Music/Artists/Vishal Dadlani/Malhari(Bajirao Mastani).mp3",
            "img":"Artists/Vishal/Malhari.jpg",
            "id":5
        },
        {
            "title":"Nashe Si Chadh Gayi(From 'Befikre')",
            "music":"Music/Artists/Vishal Dadlani/Nashe Si Chadh Gayi(From 'Befikre').mp3",
            "img":"Artists/Vishal/Nashe.jpg",
            "id":6
        },
        {
            "title":"Shaitan Ka Saala(From 'Housefull 4')",
            "music":"Music/Artists/Vishal Dadlani/Shaitan Ka Saala(From 'Housefull 4').mp3",
            "img":"Artists/Vishal/Shaitan.jpg",
            "id":7
        },
        {
            "title":"Slow Motion(From 'Bharat')",
            "music":"Music/Artists/Vishal Dadlani/Slow Motion(From 'Bharat').mp3",
            "img":"Artists/Vishal/Slow.jpg",
            "id":8
        },
        {
            "title":"Swag Se Swagat(From 'Tiger Zinda Hai')",
            "music":"Music/Artists/Vishal Dadlani/Swag Se Swagat(From 'Tiger Zinda Hai').mp3",
            "img":"Artists/Vishal/Swag.jpg",
            "id":9
        },
        {
            "title":"Tu Meri(From 'BANG BANG')",
            "music":"Music/Artists/Vishal Dadlani/Tu Meri(From 'BANG BANG').mp3",
            "img":"Artists/Vishal/Tu.jpg",
            "id":10
        },
    ]
    const [select, setSelect] = useState(vishal[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = vishal;
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
            id="wall_vishal"
            src="Artists/Vishal/Vishal.jpg" alt="Error" />
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
              song={vishal}
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
export default Vishal;