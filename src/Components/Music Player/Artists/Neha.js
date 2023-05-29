import {useState} from 'react';
import Player from '../Player';
import Nav from '../../navbar';
import "./Neha.css";
function Neha()
{
    const Neha=[
        {
            "title":"Bacha le daiyya daiyya",
            "music":"Music/Artists/Neha Kakker/Bacha le daiyya daiyya.mp3",
            "img":"Artists/Neha/Bacha.jpg",
            "id":1
        },
        {
            "title":"Bijli(From 'Govinda Naam Mera')",
            "music":"Music/Artists/Neha Kakker/Bijli.mp3",
            "img":"Artists/Neha/Bijli.jpg",
            "id":2
        },
        {
            "title":"Bol Kaffara Kya Hoga",
            "music":"Music/Artists/Neha Kakker/Bol Kaffara Kya Hoga.mp3",
            "img":"Artists/Neha/Bol.jpg",
            "id":3
        },
        {
            "title":"Camray Waleya",
            "music":"Music/Artists/Neha Kakker/Camray Waleya.mp3",
            "img":"Artists/Neha/Camray.jpg",
            "id":4
        },
        {
            "title":"Chad Gayi Chad Gayi",
            "music":"Music/Artists/Neha Kakker/Chad Gayi Chad Gayi.mp3",
            "img":"Artists/Neha/Chad.jpg",
            "id":5
        },
        {
            "title":"Do Gallan",
            "music":"Music/Artists/Neha Kakker/Do Gallan.mp3",
            "img":"Artists/Neha/Do.jpg",
            "id":6
        },
        {
            "title":"Gale Lagana Hai",
            "music":"Music/Artists/Neha Kakker/Gale Lagana Hai.mp3",
            "img":"Artists/Neha/Gale.jpg",
            "id":7
        },
        {
            "title":"Goa Beach",
            "music":"Music/Artists/Neha Kakker/Goa Beach.mp3",
            "img":"Artists/Neha/Goa.jpg",
            "id":8
        },
        {
            "title":"Kar Gayi Chull",
            "music":"Music/Artists/Neha Kakker/Kar Gayi Chull.mp3",
            "img":"Artists/Neha/Kar.jpg",
            "id":9
        },
        {
            "title":"Khad Tainu Main Dassa",
            "music":"Music/Artists/Neha Kakker/Khad Tainu Main Dassa.mp3",
            "img":"Artists/Neha/Khad.jpg",
            "id":10
        },
        {
            "title":"Khyaal Rakhya Kar",
            "music":"Music/Artists/Neha Kakker/Khyaal Rakhya Kar.mp3",
            "img":"Artists/Neha/Khyaal.jpg",
            "id":11
        },
        {
            "title":"LA LA LA",
            "music":"Music/Artists/Neha Kakker/LA LA LA.mp3",
            "img":"Artists/Neha/La.jpg",
            "id":12
        },
        {
            "title":"Mud Mud Ke",
            "music":"Music/Artists/Neha Kakker/Mud Mud Ke.mp3",
            "img":"Artists/Neha/Mud.jpg",
            "id":13
        },
        {
            "title":"Narazgi",
            "music":"Music/Artists/Neha Kakker/Narazgi.mp3",
            "img":"Artists/Neha/Narazgi.jpg",
            "id":14
        },
        {
            "title":"Nehu Da Vyah",
            "music":"Music/Artists/Neha Kakker/Nehu Da Vyah.mp3",
            "img":"Artists/Neha/Nehu.jpg",
            "id":15
        },
        {
            "title":"Odhani",
            "music":"Music/Artists/Neha Kakker/Odhani.mp3",
            "img":"Artists/Neha/Odhani.jpg",
            "id":16
        },
        {
            "title":"Puchda Hi Nahin",
            "music":"Music/Artists/Neha Kakker/Puchda Hi Nahin.mp3",
            "img":"Artists/Neha/Puchda.jpg",
            "id":17
        },
        {
            "title":"Shona Shona",
            "music":"Music/Artists/Neha Kakker/Shona Shona.mp3",
            "img":"Artists/Neha/Shona.jpg",
            "id":18
        },
        {
            "title":"Sorry Song",
            "music":"Music/Artists/Neha Kakker/Sorry Song.mp3",
            "img":"Artists/Neha/Sorry.jpg",
            "id":19
        },
        {
            "title":"Tattoo Waaliye Song",
            "music":"Music/Artists/Neha Kakker/Tattoo Waaliye Song.mp3",
            "img":"Artists/Neha/Tattoo.jpg",
            "id":20
        },
    ]
    const [select,setSelect]=useState(Neha[0].music);
    const [fake,setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(true);
    const [image, setImage] = useState("");
    const song = Neha;
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
          <img id="neha_wal"
          src="Artists/Neha.avif" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
          Neha Kakkar Singh ( born on 6 June 1988), is an Indian playback singer. She is the younger sister of playback singers Tony Kakkar and Sonu Kakkar. She began performing at a very early age at religious events. In 2005, she participated in the second season of the singing reality show, Indian Idol. She made her Bollywood debut as a chorus singer in the film Meerabai Not Out. She rose to prominence with the release of the dance track "Second Hand Jawaani" from Cocktail (2012), which was followed by several popular party songs, including "Sunny Sunny" from Yaariyan and "London Thumakda" from the 2014 soundtrack album Queen. Apart from playback singing, Kakkar has appeared in several music videos and as a judge on several television reality shows, including "Indian Idol".
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px",fontWeight:'bold'}}><i>List:-</i></p>
        </div>
        <div style={{border:'1px dashed black',marginBottom:'20px'}}></div>
        <div className="list_head">
          <div id="neha_number">No.</div>
          <div id="neha_name">Name</div>
        </div>
        

        
        <div className="neha_phone">
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
              song={Neha}
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

export default Neha;