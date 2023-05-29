import {useState} from 'react';
import Player from '../Player';
import Nav from "../../navbar";
import "./Badshah.css";

function Badshah()
{
    const badshah=[
        {
            "title":"Bas Ke Bahar",
            "music":"Music/Artists/Badshah/Bas Ke Bahar.mp3",
            "img":"Artists/Badshah/Bas.jpg",
            "id":1,
        },
        {
            "title":"Jugnu",
            "music":"Music/Artists/Badshah/Jugnu.mp3",
            "img":"Artists/Badshah/Jugnu.jpg",
            "id":2,
        },
        {
            "title":"Khair",
            "music":"Music/Artists/Badshah/Khair.mp3",
            "img":"Artists/Badshah/Khair.jpg",
            "id":3,
        },
        {
            "title":"Kya Say",
            "music":"Music/Artists/Badshah/Kya Say.mp3",
            "img":"Artists/Badshah/Kya.jpg",
            "id":4,
        },
        {
            "title":"She Move It Like",
            "music":"Music/Artists/Badshah/She Move It Like.mp3",
            "img":"Artists/Badshah/She.jpg",
            "id":5,
        },
        {
            "title":"Mercy",
            "music":"Music/Artists/Badshah/Mercy.mp3",
            "img":"Artists/Badshah/Mercy.jpg",
            "id":6,
        },
        {
            "title":"Players",
            "music":"Music/Artists/Badshah/Players.mp3",
            "img":"Artists/Badshah/Players.jpg",
            "id":7,
        },
        {
            "title":"Sajna Say Yes To The Dress",
            "music":"Music/Artists/Badshah/Sajna Say Yes To The Dress.mp3",
            "img":"Artists/Badshah/Sajna.jpg",
            "id":8,
        },
        {
            "title":"Sanak",
            "music":"Music/Artists/Badshah/Sanak.mp3",
            "img":"Artists/Badshah/Sanak.jpg",
            "id":9,
        },
        {
            "title":"Too Many Hearts",
            "music":"Music/Artists/Badshah/Too Many Hearts.mp3",
            "img":"Artists/Badshah/Too.jpg",
            "id":10,
        },
    ]
    const [select,setSelect]=useState(badshah[0].music);
    const [fake,setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(true);
    const [image, setImage] = useState("");
    const song = badshah;
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
          id="wall_badshah"
          src="Artists/Badshah-32.jpeg" alt="Error" />
        </div>

        <div className="desricption">
          <h4>Desricption:</h4>
          <p>
          Badshah is an Indian Punjabi singer -songwriter. He is born as Aditya Prateek Singh Sisodia . He started his career with Yo Yo Honey Singh in 2006.He has sung in many films, He mainly sang in Hindi, Punjabi and Haryanvi languages. His songs have also been included in several Bollywood films such as the 2014 films Humpty Sharma Ki Dulhania and Khoobsurat .
          </p>
        </div>
        <div className="title">
          <h1>Songs</h1>
          <p style={{ fontSize: "20px",fontWeight:'bold'}}><i>List:-</i></p>
        </div>
        <div style={{border:'1px dashed black',marginBottom:'20px'}}></div>
        <div className="list_head">
          <div id="badshah_number">No.</div>
          <div id="badshah_name">Name</div>
        </div>
        

        
        <div className="phone_badshah">
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
              song={badshah}
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
export default Badshah;