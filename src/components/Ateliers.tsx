//
//
import "./Comp.css/Ateliers.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
//==============================================================================
//================================music
import music1 from "./Comp.css/PhotoAteliers/music/music1.jpg"
import music2 from "./Comp.css/PhotoAteliers/music/music2.jpg"
import music3 from "./Comp.css/PhotoAteliers/music/music3.jpg"
import music4 from "./Comp.css/PhotoAteliers/music/music4.jpg"
import music5 from "./Comp.css/PhotoAteliers/music/music5.jpg"
import music6 from "./Comp.css/PhotoAteliers/music/music6.jpg"
//================================theatre
import theatre1 from "./Comp.css/PhotoAteliers/theatre/theatre1.webp"
import theatre2 from "./Comp.css/PhotoAteliers/theatre/theatre2.webp"
import theatre3 from "./Comp.css/PhotoAteliers/theatre/theatre3.webp"
//================================mot
import Capture1 from "./Comp.css/PhotoAteliers/motr/Capture1.jpg"
import Capture2 from "./Comp.css/PhotoAteliers/motr/Capture2.jpg"
import Capture3 from "./Comp.css/PhotoAteliers/motr/Capture3.png"
import Capture4 from "./Comp.css/PhotoAteliers/motr/Capture4.png"
import Capture5 from "./Comp.css/PhotoAteliers/motr/Capture5.png"
//================================Art
import art1 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art2 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art3 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art4 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art5 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art6 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
//================================dance
import dance1 from "./Comp.css/PhotoAteliers/dance/dance1.jpg"
import dance2 from "./Comp.css/PhotoAteliers/dance/dance2.jpg"
import dance3 from "./Comp.css/PhotoAteliers/dance/dance3.jpg"
//==============================================================================
const Ateliers = () => {
    let height = 432
    let width = "auto"
    return <div className="Ateliers">
        <div className="titreAteliersH2">
            <h2>N'au atelier</h2>
        </div>
        <div className="atelierCardsCounatner">
            {/*=======================================================================*/}
            <div className="atelierCardCountaner">
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={Capture1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture5} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>la psychomotricité</p>
                            <br />
                            <div>
                                Elément de base, sur lequel repose tout le travail qui se fait à Cham’s, la psychomotricité, est
                                omniprésente et à juste titre, dans toutes nos activités. Pourquoi ?<br /><br />
                                Chacune des personnes en difficulté qui adhère à Cham’s, nous vient avec un retard
                                psychomoteur plus ou moins lourd, auquel l’équipe pédagogique doit faire face.<br /><br />
                                La psychomotricité à Cham’s est proposée à nos adhérents sous forme ludique car l’on sait,
                                que l’enfant de par sa nature, adhère beaucoup mieux au jeu.<br /><br />
                                Les exercices de psychomotricité, contribuent fortement (et nous en avons fait l’expérience) à
                                la stabilité, au dépassement des angoisses et autres inhibitions.
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======================================================================*/}
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d’art lyrique</p>
                            <br />
                            <div>
                                Ecole de musique : éveil musical, initiation aux instruments de musique, enseignement
                                du solfège, chant polyphonique, musique universelle, musique andalouse …<br /><br />
                                Cet atelier s’adresse à une population différente en âge, en sexe, en pathologie,
                                répartie en plusieurs groupes, avec un programme spécifique adapté à chaque groupe et
                                chaque niveau :<br /><br />
                                - Eveil musical pour autistes.<br />
                                - Eveil musical pour Trisomiques.<br />
                                - Classe « intégration ».<br />
                                - Classe supérieure.<br />
                                - Apprentissage des instruments : (violon, guitare, mandoline, flûte, luth, piano …).<br />
                                - Ecole de musique andalouse.

                            </div>
                        </div>
                    </div>
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={music1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music5} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music6} alt="pic" /></div>
                        </Carousel>
                    </div>
                </div>
                <div className="underdescriptionAtelier">
                    <div>
                        En atelier de musique, le programme que nous avons arrêté met l’accent sur l’éveil musical, les
                        jeux musicaux, les bruitages, le chant chorale, la musique arabo-andalouse, l’initiation aux instruments
                        et l’enseignement du solfège. Tous les efforts qui y sont déployés pour l’apprentissage et
                        l’enseignement de la musique, ont abouti à la mise en place d’une chorale polyphonique, d’un
                        orchestre de musique andalouse et à la formation d’un ensemble de musiciens et choristes solfégistes.
                    </div>
                </div>
                {/*=======================================================================*/}
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={art1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art5} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art6} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d’art plastique</p>
                            <br />
                            <div>
                                Dessin, peinture et travaux manuels…<br />
                                Entre autres objectifs, cet atelier vise le développement de la motricité fine, l’éveil des sens, la
                                concentration, la stabilité, l’acquisition et la maitrise des formes et des couleurs
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d’art dramatique</p>
                            <br />
                            <div>
                                Cet atelier, met l’accent sur le jeu de rôle, l’expression corporelle, le sens de la représentation
                                (où il est question pour la personne en difficulté de s’approprier les caractères d’un personnage et de
                                les restituer face à un public) ;<br /><br />
                                les exercices et jeux favorisant la relaxation et le bien être, l’éveil des
                                sens, les expressions verbales et gestuelles, le travail de la posture et de l’équilibre, la coordination des
                                mouvements et gestes, la confiance en soi, les échanges interactifs, le schéma corporel, l’acquisition
                                des notions d’espace et de temps, d’orientation, de latéralisation et de stabilité.

                            </div>
                        </div>
                    </div>
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={theatre1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={theatre2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={theatre3} alt="pic" /></div>
                        </Carousel>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={dance1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={dance2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={dance3} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Danse et expression corporelle</p>
                            <br />
                            <div>
                                Pour la stimulation d’un corps trop souvent en état d’hypotonie, l’activité physique,
                                suscitée par la danse et l’expression corporelle, participe à l’assouplissement des muscles et
                                des articulations, particulièrement restreint au sein de cette population exposée au surpoids.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Ateliers