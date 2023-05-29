import { useEffect, useState } from "react";
import Player from "../Player";
import Nav from "../../navbar";
import { useDispatch } from "react-redux";
import { addToFav, removeToFav } from "../../store/FavSlice";
import "./Luka.css";

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
    const Change5 = ({ color5 }) => {
    return (

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill={color5} d="M118 48.5c-37.3 6.4-69 25.7-90.7 55.1C15.5 119.7 5.9 142.2 2.5 162c-2.2 12.5-2.2 32.8-.1 44.9 7.1 39.6 33 81.6 78.5 127.2 41.7 41.7 90.4 79.3 151.6 117.1 23.8 14.7 22.8 14.2 26.7 12.2 15.2-7.9 62-38.2 86.5-56 92.1-67.1 148.6-134.1 162.2-192.2 9.8-41.9-1.9-87.8-30.7-120.5-41.7-47.2-107.3-60.8-164.6-34.3-18.1 8.3-39.6 25.9-51.1 41.6-2.6 3.6-5 6.5-5.5 6.5-.4 0-3.4-3.6-6.8-8.1-12.2-16.2-28.1-29.2-47.7-38.9-21-10.4-39.2-14.6-63-14.4-7.1.1-16.4.7-20.5 1.4z" /></svg>
    )
}
const Alert = ({ setClick }) => {
    return (

        <div className="alert">
            <nav>
                <h1>The Song is added to {<img src="favorite.png" alt="error" height={25} />}Favorite Song</h1>
                <span id="alert_heading">&#10003;</span>
                <div id="close" onClick={() => setClick(false)}><img src="close.png" alt="error" /></div>
            </nav>
        </div>
    )
}

function Luka() {
    const luka = [
        {
            "title": "COCA COLA",
            "music": "Music/Albums/Luka/COCA COLA Song.mp3",
            "img": "Albums/Luka/Coca.jpg",
            "artist":"Tony Kakkar,Neha Kakkar,Young Desi",
            "duration":"02:23",
            "id": 1
        },
        {
            "title": "Duniyaa",
            "music": "Music/Albums/Luka/Duniyaa.mp3",
            "img": "Albums/Luka/Duniya.jpg",
            "artist":"Akhil,Dhvani Bhanushall",
            "duration":"02:13",
            "id": 2
        },
        {
            "title": "Teri Photo",
            "music": "Music/Albums/Luka/Photo Song.mp3",
            "img": "Albums/Luka/Photo.jpg",
            "artist":"Karan Sehmbi",
            "duration":"03:16",
            "id": 3
        },
        {
            "title": "Poster Lagwa Do bazar mein",
            "music": "Music/Albums/Luka/Poster Lagwa Do.mp3",
            "img": "Albums/Luka/Poster.jpg",
            "artist":"Mika Singh,Sunanda Sharma,Nikhita Gandhi",
            "duration":"02:13",
            "id": 4
        },
        {
            "title": "Tu Laung Main Elaachi",
            "music": "Music/Albums/Luka/Tu Laung Main Elaachi.mp3",
            "img": "Albums/Luka/Tu.jpg",
            "artist":"Tulsi Kumar",
            "duration":"02:50",
            "id": 5
        }
    ]

    const [select, setSelect] = useState(luka[0].music);
    const [fake, setfake] = useState(false);
    const [show, setShow] = useState(false);
    const [autoplay, setautoplay] = useState(false);
    const [image, setImage] = useState("");
    const song = luka;

    // colors and states for like button
    const [color1, setColor1] = useState('rgba(163,203,247,1)');
    const [state1, setstate1] = useState();
    const [fav1, setfav1] = useState(true);

    const [color2, setColor2] = useState('rgba(163,203,247,1)');
    const [state2, setstate2] = useState();
    const [fav2, setfav2] = useState(true);

    const [color3, setColor3] = useState('rgba(163,203,247,1)');
    const [state3, setstate3] = useState();
    const [fav3, setfav3] = useState(true);

    const [color4, setColor4] = useState('rgba(163,203,247,1)');
    const [state4, setstate4] = useState();
    const [fav4, setfav4] = useState(true);

    const [color5, setColor5] = useState('rgba(163,203,247,1)');
    const [state5, setstate5] = useState();
    const [fav5, setfav5] = useState(true);

    const [click, setClick] = useState(false);


    const dispatch = useDispatch()


    const handleChange1 = () => {
        if (fav1) {
            setColor1('#fec5e5')
            setfav1(false);
            dispatch(addToFav(luka[0]))
            setstate1(false);
            setClick(true);
        }
        else {
            setColor1('rgba(163,203,247,1)')
            setfav1(true)
            setstate1(true)
            dispatch(removeToFav(luka[0]))
            setClick(false);
        }
    }

    const handleChange2 = () => {
        if (fav2) {
            setColor2('#fec5e5')
            setfav2(false);
            dispatch(addToFav(luka[1]))
            setstate2(false);
            setClick(true);
        }
        else {
            setColor2('rgba(163,203,247,1)')
            setfav2(true)
            setstate2(true)
            setClick(false);
            dispatch(removeToFav(luka[1]))
        }
    }

    const handleChange3 = () => {
        if (fav3) {
            setColor3('#fec5e5')
            setfav3(false);
            dispatch(addToFav(luka[2]))
            setstate3(false);
            setClick(true);
        }
        else {
            setColor3('rgba(163,203,247,1)')
            setfav3(true)
            setstate3(true)
            setClick(false);
            dispatch(removeToFav(luka[2]))
        }
    }

    const handleChange4 = () => {
        if (fav4) {
            setColor4('#fec5e5')
            setfav4(false);
            dispatch(addToFav(luka[3]))
            setstate4(false);
            setClick(true);
        }
        else {
            setColor4('rgba(163,203,247,1)')
            setfav4(true)
            setstate4(true)
            setClick(false);
            dispatch(removeToFav(luka[3]))
        }
    }

    const handleChange5 = () => {
        if (fav5) {
            setColor5('#fec5e5')
            setfav5(false);
            dispatch(addToFav(luka[4]))
            setstate5(false);
            setClick(true);
        }
        else {
            setColor5('rgba(163,203,247,1)')
            setfav5(true)
            setstate5(true)
            setClick(false);
            dispatch(removeToFav(luka[4]))
        }
    }
    // for 1
    useEffect(() => {
        if (!fav1 || state1) {
            window.localStorage.setItem('fav_color1_luka', JSON.stringify(color1))
            window.localStorage.setItem('fav_state1_luka', JSON.stringify(fav1))
        }
    })
    useEffect(() => {
        const get = window.localStorage.getItem('fav_color1_luka');
        const get1 = window.localStorage.getItem('fav_state1_luka');
        setColor1(JSON.parse(get));
        setfav1(JSON.parse(get1));
    }, [])
    //for 2
    useEffect(() => {
        if (!fav2 || state2) {
            window.localStorage.setItem('fav_color2_luka', JSON.stringify(color2))
            window.localStorage.setItem('fav_state2_luka', JSON.stringify(fav2))
        }
    })
    useEffect(() => {
        const get = window.localStorage.getItem('fav_color2_luka');
        const get1 = window.localStorage.getItem('fav_state2_luka');
        setColor2(JSON.parse(get));
        setfav2(JSON.parse(get1));
    }, [])
    //for 3
    useEffect(() => {
        if (!fav3 || state3) {
            window.localStorage.setItem('fav_color3_luka', JSON.stringify(color3))
            window.localStorage.setItem('fav_state3_luka', JSON.stringify(fav3))
        }
    })
    useEffect(() => {
        const get = window.localStorage.getItem('fav_color3_luka');
        const get1 = window.localStorage.getItem('fav_state3_luka');
        setColor3(JSON.parse(get));
        setfav3(JSON.parse(get1));
    }, [])
    //for 4
    useEffect(() => {
        if (!fav4 || state4) {
            window.localStorage.setItem('fav_color4_luka', JSON.stringify(color4))
            window.localStorage.setItem('fav_state4_luka', JSON.stringify(fav4))
        }
    })
    useEffect(() => {
        const get = window.localStorage.getItem('fav_color4_luka');
        const get1 = window.localStorage.getItem('fav_state4_luka');
        setColor4(JSON.parse(get));
        setfav4(JSON.parse(get1));
    }, [])

    //for 5
    useEffect(() => {
        if (!fav5 || state5) {
            window.localStorage.setItem('fav_color5_luka', JSON.stringify(color5))
            window.localStorage.setItem('fav_state5_luka', JSON.stringify(fav5))
        }
    })
    useEffect(() => {
        const get = window.localStorage.getItem('fav_color5_luka');
        const get1 = window.localStorage.getItem('fav_state5_luka');
        setColor5(JSON.parse(get));
        setfav5(JSON.parse(get1));
    }, [])

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
                {click ?
                    <Alert setClick={setClick} />
                    : ""
                }
                <div className="Wallpaper">
                    <img src="Albums/Wallpaper/Luka.jpg" alt="Error" 
                    id="wall_sheh"
                    />
                </div>

                <div className="desricption">
                    <h4>Desricption:</h4>
                    <p>
                        Pushpa: The Rise – Part 01 (also known simply as Pushpa: The Rise) is a 2021 Indian Telugu-language action drama film written and directed by Sukumar. It stars Allu Arjun as the titular character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Raj Tirandasu, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. It is produced by Mythri Movie Makers in association with Muttamsetty Media. The first of two cinematic parts, the film depicts the rise of a low wage laborer Pushpa Raj in the smuggling syndicate of red sandalwood, a rare wood that grows only in the Seshachalam Hills of Chittoor in Andhra Pradesh state.
                    </p>
                </div>
                <div className="title">
                    <h1>Songs</h1>
                    <p style={{ fontSize: "20px", fontWeight: 'bold' }}><i>List:-</i></p>
                </div>
                <div style={{ border: '1px dashed black', marginBottom: '20px' }}></div>
                <div className="list_head">
                    <div id="shehzada_number" >No.</div>
                    <div id="shehzada_name" >Name</div>
                    <div id="shehzada_artists" >
                        Artists
                    </div>
                    <div id="shehzada_duration" >
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
                    <div className="song_name">
                        {song.map((obj) => (
                            <>
                                <div key={obj.id} className="list_name">
                                    <h4 onClick={() => handleClick(obj)}>{obj.title}</h4>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="list_art">
                        {song.map((obj) => (
                            <div key={obj.id} className="list_art_name">
                                <p>{obj.artist}</p>
                            </div>
                        ))}
                    </div>
                    <div className="duration_pushpa">
                        {
                            song.map((obj) => (
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
                            song={luka}
                            autoplay={autoplay}
                            setautoplay={setautoplay}
                            image={image}
                            setImage={setImage}
                        />
                    </div>
                )}
                <div onClick={handleChange1} className="heart1_sheh">
                    <Change1 color1={color1||"rgba(163,203,247,1)"} />
                </div>
                <div onClick={handleChange2} className="heart2_sheh">
                    <Change2 color2={color2||"rgba(163,203,247,1)"} />
                </div>
                <div onClick={handleChange3} className="heart3_sheh">
                    <Change3 color3={color3||"rgba(163,203,247,1)"} />
                </div>
                <div onClick={handleChange4} className="heart4_sheh">
                    <Change4 color4={color4||"rgba(163,203,247,1)"} />
                </div>
                <div onClick={handleChange5} className="heart5_sheh">
                    <Change5 color5={color5||"rgba(163,203,247,1)"} />
                </div>
                {/* For empty space */}
                <div className="space" id="luka_space">
                </div>
            </div>
        </div>
    );
}
export default Luka;