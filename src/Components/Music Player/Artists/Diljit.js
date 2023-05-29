import { useState } from 'react';
import Player from '../Player';
import Nav from "../../navbar";
import "./Diljit.css";

function Diljit() {
  const diljit = [
    {
      "title": "5 Taara",
      "music": "Music/Artists/Diljit Dosanjh/5 Taara.mp3",
      "img": "Artists/Diljit/5.jpg",
      "id": 1
    },
    {
      "title": "Chauffeur",
      "music": "Music/Artists/Diljit Dosanjh/Chauffeur.mp3",
      "img": "Artists/Diljit/Chauffeur.jpg",
      "id": 2
    },
    {
      "title": "Jind Mahi",
      "music": "Music/Artists/Diljit Dosanjh/Jind Mahi.mp3",
      "img": "Artists/Diljit/Jind.jpg",
      "id": 3
    },
    {
      "title": "Jugni",
      "music": "Music/Artists/Diljit Dosanjh/Jugni.mp3",
      "img": "Artists/Diljit/Jugni.jpg",
      "id": 4
    },
    {
      "title": "Koka",
      "music": "Music/Artists/Diljit Dosanjh/Koka.mp3",
      "img": "Artists/Diljit/Koka.jpg",
      "id": 5
    },
    {
      "title": "Laembadgini",
      "music": "Music/Artists/Diljit Dosanjh/Laembadgini.mp3",
      "img": "Artists/Diljit/Laembadgini.jpg",
      "id": 6
    },
    {
      "title": "Patiala Peg",
      "music": "Music/Artists/Diljit Dosanjh/Patiala Peg.mp3",
      "img": "Artists/Diljit/Patiala Peg.jpg",
      "id": 7
    },
    {
      "title": "Pyar",
      "music": "Music/Artists/Diljit Dosanjh/Pyar.mp3",
      "img": "Artists/Diljit/Pyar.jpg",
      "id": 8
    },
    {
      "title": "Raat Di Gedi",
      "music": "Music/Artists/Diljit Dosanjh/Raat Di Gedi.mp3",
      "img": "Artists/Diljit/Raat.jpg",
      "id": 9
    },
    {
      "title": "Sauda Khara Khara(From'Goodnewwz')",
      "music": "Music/Artists/Diljit Dosanjh/Sauda Khara Khara.mp3",
      "img": "Artists/Diljit/Sauda.jpg",
      "id": 10
    }
  ]
  const [select, setSelect] = useState(diljit[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = diljit;
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
            id="wall_diljit"
            src="Artists/Diljit.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
            Daljit Singh Dosanjh (born 6 January 1984) known professionally as Diljit Dosanjh is an Indian singer, actor, film producer and television personality. He works in Punjabi Music and subsequently in Punjabi and Hindi cinema.Dosanjh entered Social 50 chart by Billboard in 2020. He is featured in various music charts including Canadian Albums Chart, UK Asian chart by Official Charts Company and New Zealand Hot Singles. His movies, including Jatt & Juliet 2, Punjab 1984, Sajjan Singh Rangroot and Honsla Rakh are among the highest grossing Punjabi films in history.

            Hailing from Dosanjh Kalan, Jalandhar, Dosanjh started in 2002 and gained recognition in punjabi music with his album ‘Smile’(2005) and ‘Chocolate’(2008) followed by ‘The Next Level’(2009) with Yo Yo Honey Singh. Subsequently he pursued his acting, starring in debut punjabi movie The Lion of Punjab in 2011.
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px", fontWeight: 'bold' }}><i>List:-</i></p>
        </div>
        <div style={{ border: '1px dashed black', marginBottom: '20px' }}></div>
        <div className="list_head">
          <div id="diljit_number">No.</div>
          <div id="diljit_name">Name</div>
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
              song={diljit}
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
export default Diljit;