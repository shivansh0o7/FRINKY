import { useState } from "react";
import { BigData } from "./Big Data";
import Player from "./Music Player/Player";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Search_phone.css";

function SearchPhone()
{
    const [select, setSelect] = useState(BigData[0].music);
    const [fake, setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(true);
    const [image, setImage] = useState("");
    const [searchTerm,setSearchTerm] = useState("");
    const [phoneNav,setphoneNav]=useState(true);


    const handleClick = (props) => {
        setSelect(props.music);
        setfake(true);
        setImage(props.img)
        setShow(true);
      }
    return(
        <>
        <div className="Search_phone">
          <div className="logo_phone">
          <img src="logo1.png" alt="error" id="logo_part1" height="20"/>
          <img src="logo2.png" alt="error" id="logo_part2" height="20"/>
          <img src="logo3.png" alt="error" id="logo_part3" height="20"/>
        </div>
          <nav>
            <input placeholder="Search" 
                 onChange={(event)=>{
                setSearchTerm(event.target.value);
             }}
            />
          </nav>
            <FaSearch className="search_icon" />
            {phoneNav?<img src="menu.png" alt="error" height={20} id="menu_1" onClick={()=>setphoneNav(false)}/>:<img src="close.png" alt="Error" id="menu_2" onClick={()=>setphoneNav(true)}/>}
            {phoneNav?""
              :
              

              <div className="navbar_phone">
              <div className="logo">
          <img src="logo1.png" alt="error" id="Nav_logo_part1" height="20"/>
          <img src="logo2.png" alt="error" id="Nav_logo_part2" height="20"/>
          <img src="logo3.png" alt="error" id="Nav_logo_part3" height="20"/>
        </div>
              <ul>
            <li>
              <img src="Home.png" alt="error" height="25" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <img src="Search.png" alt="error" height="25" />
              <Link to="/Search">Search</Link>
            </li>
            <li>
              <img src="favorite.png" alt="error" height="25" />
              <Link to="/Favorite Song">Favorite Songs</Link>
            </li>
            <li>
              <img src="About.png" alt="error" height="25" />
              <a href="/">About Us</a>
            </li>
          </ul>
          </div>
              
            }
          </div>
          <div style={{background:"linear-gradient(256deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>

            <div className="TopSong">
             { 
// eslint-disable-next-line
                BigData.filter((val)=>{
                    if(searchTerm === "")
                    {
                        return val;
                    }
                    else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    {
                        return val
                    }
                }).map((val,key)=>{
                    return(
                        <div className="Songs" key={key}>
                            <img src={val.img} alt="Error" onClick={()=>handleClick(val)} id="BigImage" />
                            <h2>{val.title}</h2>
                            <p>{val.Artist}</p>
                        </div>
                    )
                })
             }
             </div>
              {/* For empty space */}
        <div style={{height: '795px'}}>
        </div>
             {show && (
            <div className="player">
              <Player
                select={select}
                fake={fake}
                setfake={setfake}
                song={BigData}
                autoplay={autoplay}
                setautoplay={setautoplay}
                image={image}
                setImage={setImage}
              />
            </div>
          )}
          </div>
          </>
    )
}
export default SearchPhone;