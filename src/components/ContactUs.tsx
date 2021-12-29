//
//
import "./Comp.css/ContactUs.css"
//
//
import { useState, useContext } from "react"
import { Random } from "../Contexts/randomContext"
import gsap from "gsap"
//
//
//
const ContactUs = () => {
    let lienGoogleMap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.820083786059!2d3.071228015287174!3d36.70286107996878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad1e90ff6457%3A0xf15765159226a81c!2sMaison%20de%20jeunes%20Idriss%20Bilal%2C%20Ain%20Naadja!5e0!3m2!1sfr!2sdz!4v1636163193440!5m2!1sfr!2sdz`
    //========================================================================================================================
    let { url, Session } = useContext(Random)
    //========================================================================================================================
    let [commentaire, setcommentaire] = useState({
        comment: "",
        nom: Session?.user?.nom,
        user: {
            _id: Session?.user?._id
        }
    })
    console.log(url + "/users");

    //========================================================================================================================
    setTimeout(() => {
        if (commentaire.comment.length > 19) {
            gsap.to(".buttonSubmitComent", { y: 70 })
        } else {
            gsap.to(".buttonSubmitComent", { y: 0 })
        }
        if (commentaire.comment.length >= 0) {
            gsap.to(".textAreaInpute", { border: "none" })
        }
        if (commentaire.comment.length >= 20) {
            gsap.to(".number20", { color: "green", fontWeight: 700 })
            if (commentaire.comment.length === 250) {
                gsap.to(".number20", { color: "red", fontWeight: 700 })
            } else {
                gsap.to(".number20", { color: "green", fontWeight: 700 })
            }
        } else {
            gsap.to(".number20", { color: "black", fontWeight: 400 })
        }
    }, 10)
    //========================================================================================================================
    const submitComent = () => {
        if (Session?.user === undefined) {
            gsap.to(".textAreaInpute", { border: "1px solid red" })
        } else {
            let option = {
                method: "POST",
                body: JSON.stringify(commentaire),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            fetch(`${url}/comment`, option)
        }
    }
    //========================================================================================================================
    return (<div>
        <div className="titreContactUs">
            <p>Ensemble, osons les arts thérapeutiques !</p>
        </div>
        <div className="CardCountaner">
            <div className="Card">
                <div className="mapCard">
                    <iframe className="googleMapImage"
                        title="goulou goulou Map"
                        src={lienGoogleMap}
                        width="600"
                        height="450"
                        style={{ "border": 0 }}
                        loading="lazy" />
                </div>
                <div className="infoCard">
                    <div className="infotitle">
                        <p>Nous contacter</p>
                    </div>
                    <div className="info">
                        <div className="infoColumleft">
                            <span className="redLeter">Numéro :</span><br />+213 (0) 550 601 256<br />+213 (0) 560 024 633<br />
                            <span className="redLeter">Adresse</span><br />Maison des Jeunes<br />Idris Bilel, Ain naadja. (Alger).
                        </div>
                        <div className="infoColumRight">
                            <span className="redLeter">Email :</span><br />chamsassociation@hotmail.fr<br />
                            <span className="redLeter">Réseaux sociaux</span><br />
                            Facebook : Cham’s association<br />
                            Instagram : Chamsassociation<br />
                            Twitter : Cham's Association
                        </div>
                    </div >
                    <div className="infoAddText">
                        <div className="areaInpute">
                            <p className="titreComent">Commentaire</p>
                            <textarea
                                className="textAreaInpute"
                                placeholder="Laissez-nous un commentaire!"
                                name="w3review"
                                maxLength={250}
                                onChange={(e) => setcommentaire((prev) => ({ ...prev, comment: e.target.value }))} />
                            <div className="miniCaracter"><span className="number20">{commentaire.comment.length}</span>/250</div>
                        </div>
                        <div className="buttonSubmitComent" onClick={() => submitComent()}>Envoyer</div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ContactUs