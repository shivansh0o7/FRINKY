import { useState } from 'react';
import Player from '../Player';
import Nav from "../../navbar";

function Darshan() {
  const darshan = [
    {
      "title": "Asal Mein",
      "music": "Music/Artists/Darshan Raval/Asal Mein.mp3",
      "img": "Artists/Darshan/Asal.jpg",
      "id": 1
    },
    {
      "title": "Chogada(From 'Love yatri')",
      "music": "Music/Artists/Darshan Raval/Chogada.mp3",
      "img": "Artists/Darshan/Chogada.jpg",
      "id": 2
    },
    {
      "title": "Dhol Bajaa",
      "music": "Music/Artists/Darshan Raval/Dhol Bajaa.mp3",
      "img": "Artists/Darshan/Dhol.jpg",
      "id": 3
    },
    {
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga",
      "music": "Music/Artists/Darshan Raval/Ek Ladki Ko Dekha Toh Aisa Laga.mp3",
      "img": "Artists/Darshan/Ek.jpg",
      "id": 4
    },
    {
      "title": "Is Qadar",
      "music": "Music/Artists/Darshan Raval/Is Qadar.mp3",
      "img": "Artists/Darshan/Is.jpg",
      "id": 5
    },
    {
      "title": "Kabhii Tumhhe(From 'Shershaah')",
      "music": "Music/Artists/Darshan Raval/Kabhii Tumhhe.mp3",
      "img": "Artists/Darshan/Kabhii.jpg",
      "id": 6
    },
    {
      "title": "Kamariya(From 'Mitron')",
      "music": "Music/Artists/Darshan Raval/Kamariya.mp3",
      "img": "Artists/Darshan/Kamariya.jpg",
      "id": 7
    },
    {
      "title": "Piya Re",
      "music": "Music/Artists/Darshan Raval/Piya Re.mp3",
      "img": "Artists/Darshan/Piya.jpg",
      "id": 8
    },
    {
      "title": "Rabba Mehar Kari",
      "music": "Music/Artists/Darshan Raval/Rabba Mehar Kari.mp3",
      "img": "Artists/Darshan/Rabba.jpg",
      "id": 9
    },
    {
      "title": "Tum Mere",
      "music": "Music/Artists/Darshan Raval/Tum Mere.mp3",
      "img": "Artists/Darshan/Tum.jpg",
      "id": 10
    }
  ]
  const [select, setSelect] = useState(darshan[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = darshan;
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
            id="wall_darshan"
            src="Artists/Darshan Raval.jpg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
            Darshan Raval is an Indian singer, composer and lyricist. He is known for his work in various languages including Hindi, Gujarati, Punjabi and Bengali. In 2014, he participated in the StarPlus music reality show, India's Raw Star and won the first runner-up position.
            Rawal's career began in 2014, when he participated in the reality show India's Raw Star and was declared the first runner-up. [citation needed] Rawal has cited the support of Himesh Reshammiya as an important factor in his early success in the Bollywood industry.

            However, after this he does not stop working hard. Darshan Raval's second debut song Bekhudi is one of the game changing songs of his career.

            Till 2023, he has released many popular songs in different languages including Hindi, Gujarati and Telugu. Some of his notable works include "Ek Ladki Ko Dekha Toh Aisa Laga," "Chogada," and "Kheech Meri Photo."
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
              song={darshan}
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
export default Darshan;