import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./guru.css";
function Guru()
{
    const guru=[
        {
            "title":"Ambarsariya(Form 'Fukrey')",
            "music":"Music/Artists/Guru Randhawa/Ambarsariya(Form 'Fukrey').mp3",
            "img":"Artists/Guru/Ambarsariya.jpg",
            "id":1
        },
        {
            "title":"Ban Ja Rani(From 'Tumhari Sulu')",
            "music":"Music/Artists/Guru Randhawa/Ban Ja Rani.mp3",
            "img":"Artists/Guru/Ban.jpg",
            "id":2
        },
        {
            "title":"High Rated Gabru(From 'Nawabzaade')",
            "music":"Music/Artists/Guru Randhawa/High Rated Gabru.mp3",
            "img":"Artists/Guru/High.jpg",
            "id":3
        },
        {
            "title":"Ishare Tere",
            "music":"Music/Artists/Guru Randhawa/Ishare Tere.mp3",
            "img":"Artists/Guru/Ishare.jpg",
            "id":4
        },
        {
            "title":"Lahore",
            "music":"Music/Artists/Guru Randhawa/Lahore.mp3",
            "img":"Artists/Guru/Lahore.jpg",
            "id":5
        },
        {
            "title":"Made in India",
            "music":"Music/Artists/Guru Randhawa/Made in India.mp3",
            "img":"Artists/Guru/Made.jpg",
            "id":6
        },
        {
            "title":"Moon Rise",
            "music":"Music/Artists/Guru Randhawa/Moon Rise.mp3",
            "img":"Artists/Guru/Moon.jpg",
            "id":7
        },
        {
            "title":"Patola(From 'Black mail')",
            "music":"Music/Artists/Guru Randhawa/Patola.mp3",
            "img":"Artists/Guru/Patola.jpg",
            "id":8
        },
        {
            "title":"Raat Kamaal Hai",
            "music":"Music/Artists/Guru Randhawa/Raat Kamaal Hai.mp3",
            "img":"Artists/Guru/Raat.jpg",
            "id":9
        },
        {
            "title":"Suit Suit(From 'Hindi medium')",
            "music":"Music/Artists/Guru Randhawa/Suit Suit.mp3",
            "img":"Artists/Guru/Suit.jpg",
            "id":10
        }
    ]
    const [select,setSelect]=useState(guru[0].music);
    const [fake,setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(true);
    const [image, setImage] = useState("");
    const song = guru;
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
                    style={{
 
          }}
          src="Artists/GuruRandhawa.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
          Gursharanjot Singh Randhawa (born 30 August 1991) is an Indian singer, songwriter and music composer associated with Punjabi, Bhangra, Indi-pop and Bollywood music.He is known for songs like "Lahore", "Ishare Tere", "Slowly Slowly", and "Tere Te".Guru Randhawa's debut single was "Same Girl" in collaboration with Arjun.
          Randhawa was born as Gursharanjot Singh Randhawa on 30 August 1991, in Noorpur, Dera Baba Nanak tehsil in Gurdaspur district.He started by doing small shows in Gurdaspur and then began performing in Delhi, at small parties and functions.While staying in Delhi, Randhawa completed his MBA.He was named "Guru" by the rapper Bohemia who would shorten his full name while on stage.
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px",fontWeight:'bold'}}><i>List:-</i></p>
        </div>
        <div style={{border:'1px dashed black',marginBottom:'20px'}}></div>
        <div className="list_head">
          <div id="guru_number">No.</div>
          <div id="guru_name">Name</div>
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
              song={guru}
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

export default Guru;