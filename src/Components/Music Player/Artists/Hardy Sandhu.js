import { useState } from 'react';
import Player from '../Player';
import Nav from "../../navbar";
import "./Hardy.css";

function Hardy() {
  const hardy = [
    {
      "title": "Backbone Remix",
      "music": "Music/Artists/Hardy Sandhu/Backbone Remix.mp3",
      "img": "Artists/Hardy/Backbone.jpg",
      "id": 1
    },
    {
      "title": "Goal",
      "music": "Music/Artists/Hardy Sandhu/Goal.mp3",
      "img": "Artists/Hardy/Goal.jpg",
      "id": 2
    },
    {
      "title": "Joker",
      "music": "Music/Artists/Hardy Sandhu/Joker.mp3",
      "img": "Artists/Hardy/Joker.jpg",
      "id": 3
    },
    {
      "title": "Ki Kariye Nachna Aaonda Nahin",
      "music": "Music/Artists/Hardy Sandhu/Ki Kariye Nachna Aaonda Nahin.mp3",
      "img": "Artists/Hardy/Ki.jpg",
      "id": 4
    },
    {
      "title": "Bijlee Bijlee",
      "music": "Music/Artists/Hardy Sandhu/Bijlee Bijlee.mp3",
      "img": "Artists/Hardy/Bijlee.jpg",
      "id": 5
    },
    {
      "title": "Munda Sohna(From 'Shehzada')",
      "music": "Music/Artists/Hardy Sandhu/Munda Sohna.mp3",
      "img": "Artists/Hardy/Munda.jpg",
      "id": 6
    },
    {
      "title": "Naa Ji Naa",
      "music": "Music/Artists/Hardy Sandhu/Naa Ji Naa.mp3",
      "img": "Artists/Hardy/Naa.jpg",
      "id": 7
    },
    {
      "title": "Saah",
      "music": "Music/Artists/Hardy Sandhu/Saah.mp3",
      "img": "Artists/Hardy/Saah.jpg",
      "id": 8
    },
    {
      "title": "Soch",
      "music": "Music/Artists/Hardy Sandhu/Soch.mp3",
      "img": "Artists/Hardy/Soch.jpg",
      "id": 9
    },
    {
      "title": "Yaarr Superstaar",
      "music": "Music/Artists/Hardy Sandhu/Yaarr Superstaar.mp3",
      "img": "Artists/Hardy/Yaar.jpg",
      "id": 10
    },
  ]
  const [select, setSelect] = useState(hardy[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = hardy;
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
            id="wall_hardy"
            src="Artists/Hardy2.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
            Hardavinder Singh Sandhu (born 6 September 1986) is an Indian singer, actor and former cricketer who works in Punjabi and Hindi films.His first song was Tequilla Shot, and he gained popularity with Soch (2013) and Joker (2014), which were written by Jaani and music composed by B Praak. Sandhu made his acting debut in Yaaran Da Katchup (2014). His song "Soch" was remade for the 2016 Bollywood film Airlift. His song "Naah" was remade for the film Bala as "Naah Goriye" with singer Swasti Mehul.He is a notable alumnus of The British Co-Ed High school, Patiala.

            In 2021, he made his Hindi film debut with Kabir Khan's sports-drama 83 which is based on 1983 Cricket World Cup. He has since starred in spy action drama Code Name: Tiranga (2022).
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
              song={hardy}
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
export default Hardy;