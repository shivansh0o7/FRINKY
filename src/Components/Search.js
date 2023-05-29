import {useState} from 'react';
import { Link } from 'react-router-dom';
import { BigData } from './Big Data';
import Nav from './navbar';
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import Player from './Music Player/Player';

function Search()
{
    const [searchTerm,setSearchTerm] = useState("");
  const [select, setSelect] = useState(BigData[0].music);
  const [fake, setfake] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [image, setImage] = useState("");
  const [autoplay, setautoplay] = useState(false);
  const [phoneNav,setphoneNav]=useState(true);

    let count = 1;

const handleClick = (props) => {
  setSelect(props.music);
  setfake(true);
  setShowPlayer(true);
  setImage(props.img);
  if (count === 1) {
    setautoplay(true);
  }
  count = 2;
};
    return(
        <div className='Searching_Component'>
            <Nav/>
        <div className='SearchBar'>
        <div className="Search">
            <nav>
                 <form autoComplete="off">
              <div className="searching">
                <FaSearch className="search_icon" />
                <input
                  placeholder="Search"
                  onChange={(event)=>{
                setSearchTerm(event.target.value);
             }}
                />
              </div>
            </form>
            </nav>
          </div>
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
        </div>
        {showPlayer && (
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
    )
}
export default Search;