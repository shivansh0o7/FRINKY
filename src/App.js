import './App.css';
import NavBar  from './Components/Home.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import BhediyaAlbum from './Components/Music Player/Albums/Bhediya';
import JerseyAlbum from './Components/Music Player/Albums/Jersey.js';
import  KgfAlbum from './Components/Music Player/Albums/KGF Chapter 2.js';
import MajnuAlbum from './Components/Music Player/Albums/Mission Majnu.js';
import PathaanAlbum from './Components/Music Player/Albums/Pathaan.js';
import PushpaAlbum from './Components/Music Player/Albums/Pushpa The Rise.js';
import ShaadiAlbum from './Components/Music Player/Albums/Shaadi Mein Zaroor Aana.js';
import ShahzadaAlbum from './Components/Music Player/Albums/Shehzada.js';
import SonuAlbum from './Components/Music Player/Albums/Sonu Ke Titu Ki Sweety.js';
import JhoothiAlbum from './Components/Music Player/Albums/Tu Jhoothi Main Makkar.js';
import Luka from './Components/Music Player/Albums/Luka.js';
import Kabir from './Components/Music Player/Albums/Kabir.js';
import Marjaavan from './Components/Music Player/Albums/Marjaavan.js';
import Student from './Components/Music Player/Albums/Student.js';

import Neha from './Components/Music Player/Artists/Neha';
import Arijit from './Components/Music Player/Artists/Arijit';
import Jubin from './Components/Music Player/Artists/Jubin Nautiyal';
import Guru from './Components/Music Player/Artists/Guru Randhawa';
import Badshah from './Components/Music Player/Artists/Badshah';
import Hardy from './Components/Music Player/Artists/Hardy Sandhu';
import Diljit from './Components/Music Player/Artists/Diljit';
import Darshan from './Components/Music Player/Artists/Darshan';
import King from './Components/Music Player/Artists/King';
import Maka from './Components/Music Player/Artists/Maka';
import Shreya from './Components/Music Player/Artists/Shreya';
import Sidhu from './Components/Music Player/Artists/Sidhu';
import Vishal from './Components/Music Player/Artists/Vishal';
import Yo from './Components/Music Player/Artists/Yo';

import Favorite from './Components/Favorite';
import Search from './Components/Search';
import SearchPhone from './Components/Search_phone';
import About from './Components/AboutUs';

function App()
{
  return(
    <div>
      <Router>
    <div className='Container'>
        <Routes>
           <Route path="/" element={<NavBar/>}></Route>
           <Route path="/About Us" element={<About/>} ></Route>
           <Route path="/Bhediya" element={<BhediyaAlbum/>}></Route>
           <Route path="/Jersey" element={<JerseyAlbum/>}></Route>
           <Route path="/KGF Chapter 2" element={<KgfAlbum/>}></Route>
           <Route path="/Mission Majnu" element={<MajnuAlbum/>}></Route>

           <Route path="/Pathaan" element={<PathaanAlbum/>}></Route>

           <Route path="/Pushpa The Rise" element={<PushpaAlbum/>}></Route>
           <Route path="/Shaadi Mein Zaroor Aana" element={<ShaadiAlbum/>}></Route>
           <Route path="/Shahzada" element={<ShahzadaAlbum/>}></Route>
           <Route path="/Sonu Ke Titu Ki Sweety" element={<SonuAlbum/>}></Route>
           <Route path="/Tu Jhoothi Main Makkaar" element={<JhoothiAlbum/>}></Route>
           <Route path="/Luka Chuppi" element={<Luka/>}></Route>
           <Route path="/Kabir Singh" element={<Kabir/>}></Route>
           <Route path="/Marjaavan" element={<Marjaavan/>}></Route>
           <Route path="/Student of the year 2" element={<Student/>}></Route>

           <Route path="/Arijit" element={<Arijit/>}></Route>
           <Route path="/Neha" element={<Neha/>}></Route>
           <Route path="/Jubin Nautiyal" element={<Jubin/>}></Route>
           <Route path="/Guru Randhawa" element={<Guru/>}></Route>
           <Route path="/Badshah" element={<Badshah/>}></Route>
           <Route path="/Hardy Sandhu" element={<Hardy/>}></Route>
           <Route path="/Diljit Dosanjh" element={<Diljit/>}></Route>
           <Route path="/Darshan Raval" element={<Darshan/>}></Route>
           <Route path="/King" element={<King/>}></Route>
           <Route path="/Maka Singh" element={<Maka/>}></Route>
           <Route path="/Shreya Ghoshal" element={<Shreya/>}></Route>
            <Route path="/Sidhu Moose Wala" element={<Sidhu/>}></Route>
            <Route path="/Vishal Dadlani" element={<Vishal/>}></Route>
            <Route path="/Yo Yo Honey Singh" element={<Yo/>}></Route>
            <Route path="/Favorite Song" element={<Favorite/>}></Route>

            <Route path="/Search" element={<Search/>}></Route>
            <Route path="/Search_phone" element={<SearchPhone/>}></Route>
        </Routes>
  </div>
      </Router>
    </div>
  )
}
export default App;