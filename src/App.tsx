//
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { storage } from "./firebase"
//====================================================================================
import { Random } from "./Contexts/randomContext"
import { useState } from "react";
import cookie from "react-cookies"
import gsap from "gsap";
//====================================================================================
import accueil from "./components/accueil"
import Ateliers from "./components/Ateliers"
import Contact from "./components/ContactUs"
import Apropos from "./components/A-propos"
import Footer from "./components/footer"
import actualites from "./components/actualites"
//====================================================================================
import Seconecter from "./register/SeConecter"
import Admin from "./Admin/admin"
import Setings from "./setings/setings"
import { LoginButton, UserLogedIn } from "./register/UserLogedIn"
//====================================================================================
//
//
//
import logoChams from './image/logo.png';
//

require('dotenv').config()

function App() {
  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" }
  });
  let url = process.env.REACT_APP_URL

  //========================================================================================================================
  const [scrole, setScrole] = useState(0);
  //========================================================================================================================
  window.onscroll = () => {
    setScrole(window.pageYOffset)
  }
  //========================================================================================================================
  setTimeout(() => {
    if (scrole >= 100) {
      gsap.to("nav", { background: "rgba(255, 255, 255, 0.784)", position: "fixed", y: -3 })
      gsap.to("nav", { boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.336)" })
      gsap.to(".lefy-list", { color: "black", duration: 0.1, textShadow: "1px 1px rgba(0, 0, 0, 0.494)" })
    } else {
      gsap.to("nav", { boxShadow: "0 0 0 0 black", transition: 0.2 })
      gsap.to("nav", { background: "none", position: "inherit", y: 0 })
      gsap.to(".lefy-list", { color: "white", duration: 0.1, textShadow: "2px 2px rgba(0, 0, 0, 0.494)" })
    }
  }, 10)

  //========================================================================================================================
  const [Session, setSession] = useState<any>(cookie.load("user"))

  const [ifAdmin, setIfAdim] = useState(false)
  const [isSetings, setIsSetings] = useState(false)
  const setingsOn = () => {
    setIsSetings(!isSetings)
  }
  if (Session?.user === undefined) {
    cookie.remove("user", { path: "/" })
  }

  //========================================================================================================================
  const [emailUser, setEmailUser] = useState<any>({
    email: "",
    isUser: false
  })
  const seconecterFunc = () => {
    setEmailUser((prevState: any) => ({ ...prevState, isUser: !emailUser?.isUser }))
  }
  //========================================================================================================================
  const [hNavBar, setHNavBar] = useState<String>(window.location.pathname)
  setTimeout(() => {
    if (hNavBar === "/Actualites" || hNavBar === "/Ateliers" || hNavBar === "/Contact" || hNavBar === "/Apropos") {
      gsap.to("header", { height: 70, transition: 0.1, duration: 0.1 })
      gsap.to("h1", { zIndex: -20, opacity: 0, duration: 0.1 })
      gsap.to(".secound-h1", { zIndex: -20, opacity: 0, duration: 0.1 })
    } else {
      gsap.to("header", { height: 450, transition: 0.2, duration: 0.1 })
      gsap.to("h1", { zIndex: 1, opacity: 1, duration: 0.2 })
      gsap.to(".secound-h1", { zIndex: 1, opacity: 1, duration: 0.2 })
    }
  }, 30)

  //========================================================================================================================
  return (<div className="PreApp">
    <Router>
      <Random.Provider value={{ url, storage, seconecterFunc, setEmailUser, setHNavBar, Session, setingsOn, setSession, emailUser, setIfAdim, ifAdmin }}>
        <div className="App">
          {Session?.user?.nom === "Admin" && Session?.user?.admin === ifAdmin ? <Admin /> : <></>}
          {isSetings === false ? null : <Setings />}
          <div className="secound-app">
            <header>
              <div className="NavCountaner">
                <nav>
                  <img className="LogoChams" src={logoChams} alt="logo de chams" />
                  {Session?.user === undefined ? <></> :
                    <Link to="/Actualites"
                      className="actualitesButton"
                      onClick={() => setHNavBar("/Actualites")}>
                      <li>Actualités</li>
                    </Link>}
                  <ul className="list-menu-countaner">
                    <Link className="lefy-list" to="/" onClick={() => setHNavBar("/Accueil")}><li>Accueil</li></Link>
                    <Link className="lefy-list" to="Ateliers" onClick={() => setHNavBar("/Ateliers")}><li>Ateliers</li></Link>
                    <Link className="lefy-list ContactNav" to="Contact" onClick={() => setHNavBar("/Contact")}><li>Contact</li></Link>
                    <Link className="lefy-list about" to="Apropos" onClick={() => setHNavBar("/Apropos")}><li>À-propos</li></Link>
                    {Session?.user === undefined ? <LoginButton /> : <UserLogedIn />}
                  </ul>
                </nav>
              </div>
              <div className="header-title-countaner">
                <h1>Cham’s Association</h1>
                <p className="secound-h1">Pour les Arts Thérapeutiques</p>
              </div>
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={accueil} />
                <Route path="/Ateliers" component={Ateliers} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Apropos" component={Apropos} />
                {Session?.user === undefined ? <div className="conecterVousErr"><div>Oups! connectez vous d'abord</div></div> : <Route path="/Actualites" component={actualites} />}
              </Switch>
            </main>
          </div>
        </div >
        <footer>
          <Footer />
          <p className="Copyright">@ 2021 Copyright : Chams-Association.com</p>
        </footer>
        {emailUser.isUser === true ? <Seconecter /> : <></>}
        <div className="suportFooter"></div>
      </Random.Provider>
    </Router>
  </div>
  );
}
export default App;
