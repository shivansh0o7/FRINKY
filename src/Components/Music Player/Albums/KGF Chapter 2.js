import {useEffect,useState} from "react";
import Player from "../Player";
import Nav from "../../navbar";
import "./KGF.css";
import { useDispatch} from "react-redux";
import { addToFav,removeToFav} from "../../store/FavSlice";

const kgf=[
    {
        title:"Gagana Nee",
        music:"Music/Albums/KGF Chapter 2/Gagana Nee.mp3",
        artist:"Suchetha Basrur",
        img:"Albums/Kgf/Yadagara Yadagara.jpg",
        duration:"02:23",
        id:1
    },
    {
        title:"Mehabooba",
        music:"Music/Albums/KGF Chapter 2/Mehabooba.mp3",
        artist:"Ananya Bhat, Ravi Basrur",
        img:"Albums/Kgf/Mehabooba.jfif",
        duration:"03:33",
        id:2
    },
    {
        title:"Sulthana",
        music:"Music/Albums/KGF Chapter 2/Sulthan.mp3",
        artist:"Sri Krishna, Prudhvi Chandra, Arun Kaundinya",
        img:"Albums/Kgf/Sulthana.jpg",
        duration:"03:53",
        id:3
    },
    {
        title:"Toofan",
        music:"Music/Albums/KGF Chapter 2/Toofan.mp3",
        artist:"Santhosh, Mohan Krishna, Sachin Basrur, Ravi Basrur, Puneeth Rudranag, Varsha Acharya",
        img:"Albums/kgf/Toofan.jpg",
        duration:"03:38",
        id:4
    }
]
const Change1=({color1})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color1} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change2=({color2})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color2} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change3=({color3})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color3} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
const Change4=({color4})=>{
  return(

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color4} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z"/></svg>
    )
  }
  const Alert=({setClick})=>{
    return(

    <div className="alert">
      <nav>
        <h1>The Song is added to {<img src="favorite.png" alt="error" height={25}/>}Favorite Song</h1>
        <span id="alert_heading">&#10003;</span>
      <div id="close" onClick={()=>setClick(false)}><img src="close.png" alt="error" /></div>
      </nav>
    </div>
      )
  }
function KgfAlbum(){
const [select, setSelect] = useState(kgf[0].music);
const [fake, setfake] = useState(false);
const [show, setShow] = useState(false);
const [autoplay, setautoplay] = useState(false);
const [image, setImage] = useState("");
// colors and states for like button
  const [color1,setColor1] = useState('rgba(163,203,247,1)');
  const [state1,setstate1] = useState();
  const [fav1,setfav1] = useState(true);
  
  const [color2,setColor2] = useState('rgba(163,203,247,1)');
  const [state2,setstate2] = useState();
  const [fav2,setfav2] = useState(true);
  
  const [color3,setColor3] = useState('rgba(163,203,247,1)');
  const [state3,setstate3] = useState();
  const [fav3,setfav3] = useState(true);
  
  const [color4,setColor4] = useState('rgba(163,203,247,1)');
  const [state4,setstate4] = useState();
  const [fav4,setfav4] = useState(true);
  
  const [click,setClick] =useState(false);

const song = kgf;

 const dispatch = useDispatch()


  const handleChange1=()=>{
    if(fav1)
    {
      setColor1('#fec5e5')
      setfav1(false);
      dispatch(addToFav(kgf[0]))
      setstate1(false);
      setClick(true);
    }
    else
    {
      setColor1('rgba(163,203,247,1)')
      setfav1(true)
      setstate1(true)
      dispatch(removeToFav(kgf[0]))
      setClick(false);
    }
  }

  const handleChange2=()=>{
    if(fav2)
    {
      setColor2('#fec5e5')
      setfav2(false);
      dispatch(addToFav(kgf[1]))
      setstate2(false);
      setClick(true);
    }
    else
    {
      setColor2('rgba(163,203,247,1)')
      setfav2(true)
      setstate2(true)
      setClick(false);
      dispatch(removeToFav(kgf[1]))
    }
  }

  const handleChange3=()=>{
    if(fav3)
    {
      setColor3('#fec5e5')
      setfav3(false);
      dispatch(addToFav(kgf[2]))
      setstate3(false);
      setClick(true);
    }
    else
    {
      setColor3('rgba(163,203,247,1)')
      setfav3(true)
      setstate3(true)
      setClick(false);
      dispatch(removeToFav(kgf[2]))
    }
  }

  const handleChange4=()=>{
    if(fav4)
    {
      setColor4('#fec5e5')
      setfav4(false);
      dispatch(addToFav(kgf[3]))
      setstate4(false);
      setClick(true);
    }
    else
    {
      setColor4('rgba(163,203,247,1)')
      setfav4(true)
      setstate4(true)
      setClick(false);
      dispatch(removeToFav(kgf[3]))
    }
  }
  // for 1
  useEffect(()=>{
    if(!fav1 || state1)
    {
      window.localStorage.setItem('fav_color1_k',JSON.stringify(color1))
      window.localStorage.setItem('fav_state1_k',JSON.stringify(fav1))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('fav_color1_k');
  const get1 = window.localStorage.getItem('fav_state1_k');
  setColor1(JSON.parse(get));
  setfav1(JSON.parse(get1));
  },[])
  //for 2
  useEffect(()=>{
    if(!fav2 || state2)
    {
      window.localStorage.setItem('fav_color2_k',JSON.stringify(color2))
      window.localStorage.setItem('fav_state2_k',JSON.stringify(fav2))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('fav_color2_k');
  const get1 = window.localStorage.getItem('fav_state2_k');
  setColor2(JSON.parse(get));
  setfav2(JSON.parse(get1));
  },[])
  //for 3
  useEffect(()=>{
    if(!fav3 || state3)
    {
      window.localStorage.setItem('fav_color3_k',JSON.stringify(color3))
      window.localStorage.setItem('fav_state3_k',JSON.stringify(fav3))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('fav_color3_k');
  const get1 = window.localStorage.getItem('fav_state3_k');
  setColor3(JSON.parse(get));
  setfav3(JSON.parse(get1));
  },[])
  //for 4
  useEffect(()=>{
    if(!fav4 || state4)
    {
      window.localStorage.setItem('fav_color4_k',JSON.stringify(color4))
      window.localStorage.setItem('fav_state4_k',JSON.stringify(fav4))
    }
  })
  useEffect(()=>{
  const get = window.localStorage.getItem('fav_color4_k');
  const get1 = window.localStorage.getItem('fav_state4_k');
  setColor4(JSON.parse(get));
  setfav4(JSON.parse(get1));
  },[])

let count = 1;
const handleClick = (props) => {
  setSelect(props.music);
  setfake(true);
  setShow(true);
  setImage(props.img);
  if (count === 1) {
    setautoplay(true);
  }
  count = 2;
};

return (
  <div className="Head">
    <Nav />
    <div className="main_bh">
    {click?
      <Alert setClick={setClick}/>
      :""
      }
      <div className="Wallpaper">
        <img src="Albums/Wallpaper/kgf.jpg" alt="Error" />
      </div>

      <div className="desricption">
        <h4>Desricption:</h4>
        <p>
        K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars an ensemble cast of Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty, Prakash Raj, Archana Jois, Achyuth Kumar, Rao Ramesh, Vasishta N. Simha, T. S. Nagabharana and Malavika Avinash. In the film, Rocky takes over the K.G.F, and must retain his supremacy over adversaries and government officials, including Suryavardhan's brother Adheera, Ramika Sen and his employers.
        </p>
      </div>
      <div className="title">
        <h1>Songs</h1>
        <p style={{ fontSize: "20px",fontWeight:'bold'}}><i>List:-</i></p>
      </div>
      <div style={{border:'1px dashed black',marginBottom:'20px'}}></div>
      <div className="list_head">
        <div  id="Number_kgf">No.</div>
        <div  id="Name_kgf" >Name</div>
        <div  id="Artists_kgf" >
          Artists
        </div>
        <div id="Duration_kgf" >
        Duration
        </div>
      </div>
      <div className="list">
        <div className="number">
          {song.map((obj) => (
            <p>{obj.id}.</p>
          ))}
        </div>
        <div className="song_img">
          {song.map((obj) => (
            <img src={obj.img} alt="Error" />
          ))}
        </div>
        <div  className="song_name">
          {song.map((obj) => (
            <>
              <div key={obj.id} className="list_name">
                <h4 onClick={() => handleClick(obj)}>{obj.title}</h4>
              </div>
            </>
          ))}
        </div>

        <div className="list_art_kgf">
          {song.map((obj) => (
            <div key={obj.id} className="list_art_name">
              <p>{obj.artist}</p>
            </div>
          ))}
        </div>
        <div className="duration">
        {
            song.map((obj)=>(
              <p>{obj.duration}</p>
            ))
          }
        </div>
      </div>
      {show && (
        <div>
          <Player
            select={select}
            fake={fake}
            setfake={setfake}
            song={kgf}
            autoplay={autoplay}
            setautoplay={setautoplay}
            image={image}
            setImage={setImage}
          />
        </div>
      )}

      <div onClick={handleChange1} className="heart1_k">
  <Change1 color1={color1||"rgba(163,203,247,1)"}/>
 </div>
 <div onClick={handleChange2} className="heart2_k">
  <Change2 color2={color2||"rgba(163,203,247,1)"}/>
 </div>
 <div onClick={handleChange3} className="heart3_k">
  <Change3 color3={color3||"rgba(163,203,247,1)"}/>
 </div>
 <div onClick={handleChange4} className="heart4_k">
  <Change4 color4={color4||"rgba(163,203,247,1)"}/>
 </div>

      {/* For empty space */}
      <div className="space"></div>
    </div>
  </div>
);
}
export default KgfAlbum;