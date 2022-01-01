//
import "./Comp.css/accueil.css"
//
import { useContext } from "react";
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { Random } from "../Contexts/randomContext"
import pic1 from "./Comp.css/CarouselPics/1.webp"
import pic2 from "./Comp.css/CarouselPics/2.jpg"
import pic3 from "./Comp.css/CarouselPics/3.jpg"
import pic4 from "./Comp.css/CarouselPics/4.webp"
import pic5 from "./Comp.css/CarouselPics/5.webp"
import PresontationPic from "../image/PresontationChams.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
//
//
//
const Accueil = () => {
    const { setHNavBar } = useContext(Random)
    const width = "auto"
    const height = 450
    return <div className="accueil">
        <div className="top-card-countaner">
            <div className="card-countaner">
                <img className="card-picture" src={PresontationPic} alt="presontation chams" />
                <div className="card-description-countaner">
                    <div className="card-description">
                        <p className="titre-card-description">L'quipe Cham's</p>
                        <p>L'équipe Cham's L’Équipe qui intervient au sein de notre association intègrent :
                            des parents (hommes et femmes) de statuts différents (fonctionnaires, enseignants,
                            médecins, retraités…), des écoliers, des collégiens, des lycéens ...</p>
                        <button className="card-button">
                            <Link style={{ color: "white" }} to="Apropos" onClick={() => setHNavBar("/Apropos")}>en savoir plus</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="first-x-line" />
        <div className="DescritionAtelier">
            <div className="DescritionAtelier-card-countaner">
                <div className="ateliers-button-countaner">
                    <Link to="/Ateliers"
                        className="ateliers-button"
                        onClick={() => setHNavBar("/Ateliers")}>Ateliers</Link>
                </div>
                <div className="ateliers-description-countaner">
                    <div className="atelier">
                        <p className="atelier-title">Musique</p>
                        <p className="ateliers-description">
                            Elément de base, sur lequel repose tout le travail qui se fait à Cham’s,
                            la psychomotricité, est omniprésente et à juste titre, dans toutes nos activités. Pourquoi ?
                        </p>
                    </div>
                    <div className="atelier">
                        <p className="atelier-title">Théâtre</p>
                        <p className="ateliers-description">
                            Cet atelier, met l’accent sur le jeu de rôle, l’expression corporelle,
                            le sens de la représentation (où il est question pour la personne en
                            difficulté de s’approprier les caractères ...
                        </p>
                    </div>
                    <div className="atelier">
                        <p className="atelier-title">Danse</p>
                        <p className="ateliers-description">
                            Pour la stimulation d’un corps trop souvent en état d’hypotonie,
                            l’activité physique, suscitée par la danse et l’expression corporelle,
                            participe à l’assouplissement des ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="first-x-line" />
        <div className="VideoAndCarusel">
            <div className="video-presontation-chams-countaner">
                <div className="description-video-presontation-chams">
                    <p className="description-titre-video-description">Présentation</p>
                    <p className="description-video-chams">
                        Par la création d’un espace de sociabilité quasi quotidien qui mélange genres des deux sexes, de tous âges,
                        toutes pathologies, tous niveaux, toutes conditions, avec présence de personnes valides et de mamans qui pratiquent
                        ensemble des activités artistiques, éducatives et ludiques: musicales, théâtrales et plastiques pour l’essentiel,
                        dans un objectif thérapeutique
                    </p>
                </div>
                <div className="videoChamsFromYoutube">
                    <a href={`https://www.youtube.com/watch?v=TkzF5MNKPzU&t=20s`}>
                        <iframe title="NG" className="youtubeChamsVideo" allowFullScreen />
                    </a>
                </div>
            </div>
            <div>
                <div className="carouselCountaner">
                    <Carousel
                        className="CarouselChild"
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={5000}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerSlidePercentage={50}
                        transitionTime={1200}>
                        <div><img style={{ height: height, maxWidth: width }} src={pic1} alt="pic" /></div>
                        <div><img style={{ height: height, maxWidth: width }} src={pic2} alt="pic" /></div>
                        <div><img style={{ height: height, maxWidth: width }} src={pic3} alt="pic" /></div>
                        <div><img style={{ height: height, maxWidth: width }} src={pic4} alt="pic" /></div>
                        <div><img style={{ height: height, maxWidth: width }} src={pic5} alt="pic" /></div>
                    </Carousel>
                    <div className="descriptionCarousel">
                        <p className="titreCarouselDescription">Présentation</p>
                        Dans notre projet, la prise en charge que nous proposons, passe par une présence artistique active,
                        une méthode qui certes est très peu utilisée en Algérie, mais qui se révèle à nos yeux des plus bénéfiques
                        pour travailler le bien-être et la stabilité des personnes en difficulté.
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Accueil