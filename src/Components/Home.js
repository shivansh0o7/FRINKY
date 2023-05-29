import { useState } from "react";
import "./Home.css";
import { TopSong } from "./Music Player/Top.js";
import Player from "./Music Player/Player";
import {useNavigate,Link } from "react-router-dom";
import "./Albums.css";
import "./Artists.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaSearch } from "react-icons/fa";
import HomeLike from "./HomeLike";
import TopPhone from "./Top_phone";

function NavBar() {
  const [select, setSelect] = useState(TopSong[0].music);
  const [fake, setfake] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [autoplay, setautoplay] = useState(false);
  const [image, setImage] = useState("");
  const [phoneNav,setphoneNav]=useState(true);
  const song = TopSong;
  const navigate = useNavigate();
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
  const handleRedirect=()=>
  {
   navigate("/Search")
  }
  const handleRedirect_phone=()=>
  {
    navigate("/Search_phone")
  }
  return (
    <>
      <div className="full">
        <div className="Navbar">
        <div className="logo">
          <img src="logo1.png" alt="error" id="logo_part1" height="20"/>
          <img src="logo2.png" alt="error" id="logo_part2" height="20"/>
          <img src="logo3.png" alt="error" id="logo_part3" height="20"/>
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
              <Link to="/About Us">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="Search">
            <nav>
                 <form autoComplete="off">
              <div className="searching">
                <FaSearch className="search_icon" />
                <input
                  placeholder="Search"
                  onClick={handleRedirect}
                />
              </div>
            </form>
            </nav>
          </div>
          <div className="Search_phone">
          <div className="logo_phone">
          <img src="logo1.png" alt="error" id="logo_part1" height="20"/>
          <img src="logo2.png" alt="error" id="logo_part2" height="20"/>
          <img src="logo3.png" alt="error" id="logo_part3" height="20"/>
        </div>
          <nav>
            <input placeholder="Search" onClick={handleRedirect_phone}/>
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
              <Link to="/Search_phone">Search</Link>
            </li>
            <li>
              <img src="favorite.png" alt="error" height="25" />
              <Link to="/Favorite Song">Favorite Songs</Link>
            </li>
            <li>
              <img src="About.png" alt="error" height="25" />
              <Link to="/About Us">About Us</Link>
            </li>
          </ul>
          </div>
              

            }
          </div>
          <div className="Albums">
            <h1>Top Albums</h1>
            <Albums />
           {/* eslint-disable-next-line */}
            <Albums_phone/>
          </div>
          <div className="head_artist">
            <h1>Top Artists</h1>
            <Artists/>
            {/* eslint-disable-next-line */}
            <Artists_phone/>
          </div>
          <div className="Top_Trending">
            <div className="Headline">
              <h1>Top Trending</h1>
              <img src="Trending.jpg" alt="Error" />
            </div>
            <HomeLike/>
            <div className="TopSong">
              {song.map((obj) => (
                <div key={obj.id} className="Songs">
                  <img
                    src={obj.img}
                    alt="Error"
                    onClick={() => handleClick(obj)}
                  />
                  <h2>{obj.title}</h2>
                  <p>{obj.Artist}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
            <div className="Headline_phone">
              <h1>Top Trending</h1>
              <img src="Trending.jpg" alt="Error" />
            </div>
              <TopPhone/>
            </div>
          </div>
          {showPlayer && (
            <div className="player">
              <Player
                select={select}
                fake={fake}
                setfake={setfake}
                song={TopSong}
                autoplay={autoplay}
                setautoplay={setautoplay}
                image={image}
                setImage={setImage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export const Albums_phone=()=>{
  return(
    <div className="album_phone">
    <Swiper
      slidesPerView="auto"
      freeMode
      centeredSlides
      centeredSlidesBounds
      modules={[Pagination]}
    >
      <SwiperSlide>
      <div id="Album">
      <div id="com_al">
              <Link to="/Bhediya">
              <img src="Albums/Bhediya.jpg" alt="Error" />
              Bhediya</Link>
            </div>
            <div id="com_al">
              <Link to="/Jersey">
              <img src="Albums/Jersey.jpg" alt="Error" />
              Jersey</Link>
            </div>
            <div id="com_al">
              <Link to="/KGF Chapter 2">
              <img src="Albums/kgf.jpg" alt="Error" />
              KGF Chapter 2</Link>
            </div>
            <div id="com_al">
              <Link to="/Mission Majnu">
              <img src="Albums/Mission Majnu.jpg" alt="Error" />
              Mission Majnu</Link>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div id="Album">
     
            <div id="com_al">
              <Link to="/Pathaan">
              <img src="Albums/Pathaan.jpg" alt="Error" />
              Pathaan</Link>
            </div>
            <div id="com_al">
              <Link to="/Tu Jhoothi Main Makkaar">
              <img src="Albums/jhoothi.jpg" alt="Error" />
              Tu Jhoothi Main Makkaar</Link>
            </div>
            <div id="com_al">
              <Link to="/Student of the year 2">
                <img src="Albums/Student.jpg" alt="Error" />
      Student of theYear2 
              </Link>
            </div>
      <div id="com_al">
              <Link to="/Pushpa The Rise">
              <img src="Albums/Pushpa.jpg" alt="Error" />
              Pushpa The Rise</Link>
            </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="Album">
        <div id="com_al">
              <Link to="/Shahzada">
              <img src="Albums/shehzada.jpg" alt="Error" />
              Shahzada</Link>
            </div>
        <div id="com_al">
              <Link to="/Sonu Ke Titu Ki Sweety">
              <img src="Albums/Sonu.jpeg" alt="Error" />
              Sonu Ke Titu Ki Sweety</Link>
            </div>

            <div id="com_al">
              <Link to="/Luka Chuppi">
                <img src="Albums/Luka.jpg" alt="Error" />
              Luka chuppi
              </Link>
            </div>

            <div id="com_al">
              <Link to="/Kabir Singh">
                <img src="Albums/Kabir.jpg" alt="Error" />
              Kabir Singh
              </Link>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="Album">
        <div id="com_al">
              <Link to="/Marjaavan">
                <img src="Albums/Marjaavan.jpg" alt="Error" />
              Marjaavaan
              </Link>
            </div>
            <div id="com_al">
              <Link to="/Shaadi Mein Zaroor Aana">
              <img src="Albums/Shaadi.jpg" alt="Error" />
              Shaadi Mein Zaroor Aana</Link>
            </div>       
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
export const Albums = () => {
  return (
    <div className="album">
      <Swiper
        slidesPerView="auto"
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div id="Album">
            <div id="com_al">
              <Link to="/Bhediya">
              <img src="Albums/Bhediya.jpg" alt="Error" />
              Bhediya</Link>
            </div>
            <div id="com_al">
              <Link to="/Jersey">
              <img src="Albums/Jersey.jpg" alt="Error" />
              Jersey</Link>
            </div>
            <div id="com_al">
              <Link to="/KGF Chapter 2">
              <img src="Albums/kgf.jpg" alt="Error" />
              KGF Chapter 2</Link>
            </div>
            <div id="com_al">
              <Link to="/Mission Majnu">
              <img src="Albums/Mission Majnu.jpg" alt="Error" />
              Mission Majnu</Link>
            </div>
            <div id="com_al">
              <Link to="/Pathaan">
              <img src="Albums/Pathaan.jpg" alt="Error" />
              Pathaan</Link>
            </div>
            <div id="com_al">
              <Link to="/Tu Jhoothi Main Makkaar">
              <img src="Albums/jhoothi.jpg" alt="Error" />
              Tu Jhoothi Main Makkaar</Link>
            </div>

            <div id="com_al">
              <Link to="/Student of the year 2">
                <img src="Albums/Student.jpg" alt="Error" />
      Student of theYear2 
              </Link>
            </div>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div id="Album">

            <div id="com_al">
              <Link to="/Pushpa The Rise">
              <img src="Albums/Pushpa.jpg" alt="Error" />
              Pushpa The Rise</Link>
            </div>

            <div id="com_al">
              <Link to="/Shahzada">
              <img src="Albums/shehzada.jpg" alt="Error" />
              Shahzada</Link>
            </div>

            <div id="com_al">
              <Link to="/Sonu Ke Titu Ki Sweety">
              <img src="Albums/Sonu.jpeg" alt="Error" />
              Sonu Ke Titu Ki Sweety</Link>
            </div>

            <div id="com_al">
              <Link to="/Luka Chuppi">
                <img src="Albums/Luka.jpg" alt="Error" />
              Luka chuppi
              </Link>
            </div>

            <div id="com_al">
              <Link to="/Kabir Singh">
                <img src="Albums/Kabir.jpg" alt="Error" />
              Kabir Singh
              </Link>
            </div>

            <div id="com_al">
              <Link to="/Marjaavan">
                <img src="Albums/Marjaavan.jpg" alt="Error" />
              Marjaavaan
              </Link>
            </div>
            <div id="com_al">
              <Link to="/Shaadi Mein Zaroor Aana">
              <img src="Albums/Shaadi.jpg" alt="Error" />
              Shaadi Mein Zaroor Aana</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export const Artists = () => {
  return (
    <div className="Artists">
      <Swiper
        slidesPerView="auto"
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div id="Artists">
              <Link to="/Arijit">
                <img
                  src="Artists/Arijit Singh.jpg"
                  alt="Error"
                  id="A_rtiests"
                />
                <h4>Arijit Singh</h4>
              </Link>
           

           
              <Link to="/Neha">
                <img src="Artists/Neha Kakker.jpg" alt="Error" id="A_rtiests" />
                <h4>Neha Kakker</h4>
              </Link>
     

        
              <Link to="/Jubin Nautiyal">
                <img src="Artists/nautiyal.jpg" alt="Error" id="A_rtiests" />
                <h4>Jubin Nautiyal</h4>
              </Link>
          

            
              <Link to="/Guru Randhawa">
                <img
                  src="Artists/guru.jpg"
                  alt="Error"
                  id="A_rtiests"
                />
                <h4>Guru Randhawa</h4>
              </Link>
           
              <Link to="/Badshah">
                <img src="Artists/Badshah-32.jpeg" alt="Error" id="A_rtiests" />
                <h4>Badshah</h4>
              </Link>
            
              <Link to="/Hardy Sandhu">
                <img src="Artists/Hardy.jpg" alt="Error" id="A_rtiests" />
                <h4>Hardy Sandhu</h4>
              </Link>
           

              <Link to="/Diljit Dosanjh">
                <img src="Artists/Diljit Dosanjh.jpg" alt="Error" id="A_rtiests" />
                <h4>Diljit Dosanjh</h4>
              </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div id="Artists">
              <Link to="/Darshan Raval">
                <img src="Artists/Darshan2.jpg" alt="Error" id="A_rtiests" />
                <h4>Darshan Raval</h4>
              </Link>
            
              <Link to="/King">
                <img src="Artists/King.jpg" alt="Error" id="A_rtiests"/>
                <h4>King</h4>
              </Link>

              <Link to="/Maka Singh">
                <img src="Artists/mika.jpg" alt="Error" id="A_rtiests"/>
                <h4>Mika Singh</h4>
              </Link>

              <Link to="/Shreya Ghoshal">
                <img src="Artists/Shreya.jpg" alt="Error" id="A_rtiests"/>
                <h4>Shreya Ghoshal</h4>
              </Link>

              <Link to="/Sidhu Moose Wala">
                <img src="Artists/Sidhu.avif" alt="Error" id="A_rtiests"/>
                <h4>Sidhu Moose Wala</h4>
              </Link>

              <Link to="/Vishal Dadlani">
                <img src="Artists/Vishal.jpg" alt="Error" id="A_rtiests"/>
                <h4>Vishal Dadlani</h4>
              </Link>

              <Link to="/Yo Yo Honey Singh">
                <img src="Artists/Yo.jpg" alt="Error" id="A_rtiests"/>
                <h4>Yo Yo Honey Singh</h4>
              </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export const Artists_phone=()=>
{
  return(
    <div className="Artists_phone">
         <Swiper
        slidesPerView="auto"
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[Pagination]}
      >
        <SwiperSlide>
        <div id="Artists">
        <Link to="/Arijit">
                <img
                  src="Artists/Arijit Singh.jpg"
                  alt="Error"
                  id="A_rtiests"
                />
                <h4>Arijit Singh</h4>
              </Link>
           

           
              <Link to="/Neha">
                <img src="Artists/Neha Kakker.jpg" alt="Error" id="A_rtiests" />
                <h4>Neha Kakker</h4>
              </Link>
     

        
              <Link to="/Jubin Nautiyal">
                <img src="Artists/nautiyal.jpg" alt="Error" id="A_rtiests" />
                <h4>Jubin Nautiyal</h4>
              </Link>

              <Link to="/Guru Randhawa">
                <img
                  src="Artists/guru.jpg"
                  alt="Error"
                  id="A_rtiests"
                />
                <h4>Guru Randhawa</h4>
              </Link>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div id="Artists">
     
           
              <Link to="/Badshah">
                <img src="Artists/Badshah-32.jpeg" alt="Error" id="A_rtiests" />
                <h4>Badshah</h4>
              </Link>
            
              <Link to="/Hardy Sandhu">
                <img src="Artists/Hardy.jpg" alt="Error" id="A_rtiests" />
                <h4>Hardy Sandhu</h4>
              </Link>
              <Link to="/Diljit Dosanjh">
                <img src="Artists/Diljit Dosanjh.jpg" alt="Error" id="A_rtiests" />
                <h4>Diljit Dosanjh</h4>
              </Link>
              <Link to="/Darshan Raval">
                <img src="Artists/Darshan2.jpg" alt="Error" id="A_rtiests" />
                <h4>Darshan Raval</h4>
              </Link>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div id="Artists">
  
           
            
              <Link to="/King">
                <img src="Artists/King.jpg" alt="Error" id="A_rtiests"/>
                <h4>King</h4>
              </Link>

              <Link to="/Maka Singh">
                <img src="Artists/mika.jpg" alt="Error" id="A_rtiests"/>
                <h4>Mika Singh</h4>
              </Link>

              
              <Link to="/Shreya Ghoshal">
                <img src="Artists/Shreya.jpg" alt="Error" id="A_rtiests"/>
                <h4>Shreya Ghoshal</h4>
              </Link>

              <Link to="/Sidhu Moose Wala">
                <img src="Artists/Sidhu.avif" alt="Error" id="A_rtiests"/>
                <h4>Sidhu Moose Wala</h4>
              </Link>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div id="Artists">
  

        <Link to="/Yo Yo Honey Singh">
                <img src="Artists/Yo.jpg" alt="Error" id="A_rtiests"/>
                <h4>Yo Yo Honey Singh</h4>
              </Link>
              <Link to="/Vishal Dadlani">
                <img src="Artists/Vishal.jpg" alt="Error" id="A_rtiests"/>
                <h4>Vishal Dadlani</h4>
              </Link>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default NavBar;
