import { useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./Arijit.css";

function Arijit() {
  const Arijit = [
    {
      "title": "Ae Dil Hai Mushkil",
      "music": "Music/Artists/Arijit Singh/Ae Dil Hai Mushkil.mp3",
      "img": "Artists/Arijit/Ae.jpg",
      "duration": "02:58",
      "id": 1
    },
    {
      "title": "Agar tum saath ho",
      "music": "Music/Artists/Arijit Singh/Agar tum saath ho.mp3",
      "img": "Artists/Arijit/Agar.jpg",
      "duration": "03:11",
      "id": 2
    },
    {
      "title": "Deva Deva(From 'Brahmastra')",
      "music": "Music/Artists/Arijit Singh/Deva Deva.mp3",
      "img": "Artists/Arijit/Deva.jpg",
      "duration": "03:11",
      "id": 3
    },
    {
      "title": "Dhokha Song",
      "music": "Music/Artists/Arijit Singh/Dhokha.mp3",
      "img": "Artists/Arijit/Dhoka.jpg",
      "duration": "04:52",
      "id": 4
    },
    {
      "title": "Fitoor",
      "music": "Music/Artists/Arijit Singh/Fitoor.mp3",
      "img": "Artists/Arijit/Fitoor.jpg",
      "duration": "03:24",
      "id": 5
    },
    {
      "title": "Hamari Adhuri Kahani",
      "music": "Music/Artists/Arijit Singh/Hamari Adhuri Kahani.mp3",
      "img": "Artists/Arijit/Hamari.jpg",
      "duration": "05:40",
      "id": 6
    },
    {
      "title": "Hamdard",
      "music": "Music/Artists/Arijit Singh/Hamdard.mp3",
      "img": "Artists/Arijit/hamdard.jpg",
      "duration": "04:19",
      "id": 7
    },
    {
      "title": "Kesariya(From 'Brahmastra')",
      "music": "Music/Artists/Arijit Singh/Kesariya.mp3",
      "img": "Artists/Arijit/Kesariya.jpg",
      "duration": "02:52",
      "id": 8
    },
    {
      "title": "Khairiyat(From 'Chhichore')",
      "music": "Music/Artists/Arijit Singh/Khairiyat.mp3",
      "img": "Artists/Arijit/Khariyat.jpg",
      "duration": "03:58",
      "id": 9
    },
    {
      "title": "Pachtaoge",
      "music": "Music/Artists/Arijit Singh/Pachtaoge.mp3",
      "img": "Artists/Arijit/Pachtaoge.jpg",
      "duration": "03:46",
      "id": 10
    },
    {
      "title": "Pal Pal Dil Ke Pass",
      "music": "Music/Artists/Arijit Singh/Pal Pal Dil Ke Pass.mp3",
      "img": "Artists/Arijit/Pal.jpg",
      "duration": "",
      "id": 11
    },
    {
      "title": "Pal",
      "music": "Music/Artists/Arijit Singh/Pal.mp3",
      "img": "Artists/Arijit/Pal(1).jpg",
      "duration": "02:58",
      "id": 12
    },
    {
      "title": "Phir Bhi Tumko Chaahungi(From 'Halfgirlfriend')",
      "music": "Music/Artists/Arijit Singh/Phir Bhi Tumko Chaahungi.mp3",
      "img": "Artists/Arijit/Phir.jpg",
      "duration": "03:13",
      "id": 13
    },
    {
      "title": "Rasiya Reprise",
      "music": "Music/Artists/Arijit Singh/Rasiya Reprise.mp3",
      "img": "Artists/Arijit/Rasiya.jpg",
      "duration": "02:28",
      "id": 14
    },
    {
      "title": "Sanam re",
      "music": "Music/Artists/Arijit Singh/Sanam re.mp3",
      "img": "Artists/Arijit/Sanam.jpg",
      "duration": "02:42",
      "id": 15
    },
    {
      "title": "Shayad(From 'Love Aaj Kaal')",
      "music": "Music/Artists/Arijit Singh/Shayad.mp3",
      "img": "Artists/Arijit/Shayad.jpg",
      "duration": "04:49",
      "id": 16
    },
    {
      "title": "Thodi Jagah(From 'Marjaavan')",
      "music": "Music/Artists/Arijit Singh/Thodi Jagah.mp3",
      "img": "Artists/Arijit/Thodi.jpg",
      "duration": "03:38",
      "id": 17
    },
    {
      "title": "Tujhe Kitna Chahne Lage(From 'Kabir Singh')",
      "music": "Music/Artists/Arijit Singh/Tujhe Kitna Chahne Lage.mp3",
      "img": "Artists/Arijit/Tujhe.jpg",
      "duration": "03:38",
      "id": 18
    },
    {
      "title": "Tum Hi Ho",
      "music": "Music/Artists/Arijit Singh/Tum Hi Ho.mp3",
      "img": "Artists/Arijit/Tum.jpg",
      "duration": "04:27",
      "id": 19
    },
    {
      "title": "Yaar Ve",
      "music": "Music/Artists/Arijit Singh/Yaar Ve.mp3",
      "img": "Artists/Arijit/Yaar.jpg",
      "duration": "02:21",
      "id": 20
    }
  ]
  const [select, setSelect] = useState(Arijit[0].music);
  const [fake, setfake] = useState(false);
  const [show, setShow] = useState(false);
  const [autoplay, setautoplay] = useState(true);
  const [image, setImage] = useState("");
  const song = Arijit;
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
            id="wall_arijit"
            src="Artists/Arijit Singh.jpg" alt="Error" />
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
          <div id="Arijit_number">No.</div>
          <div id="Arijit_name">Name</div>
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
              song={Arijit}
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

export default Arijit;