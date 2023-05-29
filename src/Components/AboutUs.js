import Nav from "./navbar";
import "./About.css";

function About()
{
    return(
        <div className="About_Container">
        <Nav/>
        <div className="AboutPara">
        <div className="About_head">
           <h1>About Us</h1>
        </div>
            <p>
            Hii, This project is created by Tushar Sharma and Shivansh Srivastava. we are pursuing MCA(Integrated) course and are in 6th Semester.This is our mini project(web application) and its name is Frinky.
            It is a Music Player website which contains amazing features and the programming language like html,css,javasript are used in this project. The Popular react is also used which is library of javasript. 
            Frinky is conatins functionality that when user is goes from one page to another page then page is not refreshing(loading) only content of page are change. It is possible due to react because react wrapping all components of website then shown only required or selected components. When react website is calling from server then all components(pages) are comes from server at only one request and show components as per required on single page website. react website are single page website. Due to this feature problem of waiting of loading page is not exists.
            Frinky contains all features of music Player like player which play songs, Search bar, list of songs, list of albums and list of artists. On front, Exists amazing top trending songs list where anyone can listen them and enjoy!!!. The amazing desgin and color of combination are used 
            in this website which make them very attractive and give look of like official trending website. On front trending section, every song contains its official image,full name and its artists.
            On front page trending section, every song contains a star button which actually adds songs to favorite song page where favorite song are exists.
            Frinky contains Search Bar where anyone can search and listen its own desirable song. On clicking Search Bar, user tranfered to a Search page by Frinky website where below search bar long list of amazing songs is exists and user can also easily search its own song.
            Frinky gives swipe horizantily feature to albums and artists where user can swipe list of albums and artists horizontly from left to right and right to left. On clicking on any, a new page is pop up on display.
            Frinky gives Songs of top albums like bhediya,jersey,KGF Chapter 2,Mission Majnu,Pathaan,Tu Jhoothi Main Makkaar,Student of ther Year 2,Pushpa The Rise,Shahzada etc.
            Frinky gives Songs of Top artists like Arijit Singh,Neha Kakker,Jubin Nautiyal,Yo Yo Honey Singh,Darshan Raval,Badhshah,Diljit Singh etc.
            HomePage of Frinky contains Navbar on left-Side which wraps Home,Search,Favorite Songs,About Us inside of it. Navbar is always fixed on left-side of website. If user open any album,artists then
            Navbar is not gone it stay on its position. So easily user can features of Navbar on any page of Frinky.
            On Navbar,when clicking on Home HomePage(FrontPage) of Frinky is shown. when clicking on Search SearchPage of Frinky is shown. when clicking on Favorite Song Favorite song Page of Frinky is shown where favorite song is exists of user.
            when clicking on About Us About Page is Shown where details of website and its creator exists.   
            The Page of Every Album and Artist are exists. Every Page contains wallpaper of album or artists, description of album or artists, lists of Songs with its image,name,artists and duration with amazing black hover effect.
            Every Song contains a hearts shape button which allow to user to add song to its Favorite Song Lists which exists on Favorite Song Page of website. 
            The player of website is contains amazing desgin and color of combination which gives them attractive look. The Player contains progress bar which easily adjustable, image of current song which is rotating, display of continously upadating current time of current song , display of duartion time of current song, Next and prev buttons, pause and play buttons, repeat button.
            The player is also contains functionality that when song is finished then another song is automaticaly play. 
            Frinky website is fully responsive website mean it easily run on any mobile.
            So it is all about me and my project. 
            
            <p id="AboutPara2">
            !!!Thankyou For Reading !!!.
            </p>
            </p>
        </div>
        </div>
    )
}
export default About;