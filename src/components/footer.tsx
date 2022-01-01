//
import { useContext } from "react"
import { Random } from "../Contexts/randomContext"
//
import { Link } from "react-router-dom"
//
import "./Comp.css/footer.css"
//
import Facebook from "./Comp.css/LogoMedia/facebook.svg"
import Instagram from "./Comp.css/LogoMedia/instagram.svg"
import Twitter from "./Comp.css/LogoMedia/twitter.svg"
//
//
const Accueil = () => {
    let { seconecterFunc, Session, setEmailUser, setHNavBar } = useContext(Random)

    return <div className="FooterCountaner">
        <div className="FooterBorder">
            <div className="lien">
                <p className="titreFouter lientitre">Lien</p>
                <Link to="/Ateliers"><p className="desc hov" onClick={() => setHNavBar("/Ateliers")}>Ateliers</p></Link>
                <Link to="/Contact"><p className="desc hov" onClick={() => setHNavBar("/Contact")}>Contact</p></Link>
                <Link to="/Apropos"><p className="desc hov" onClick={() => setHNavBar("/Apropos")}>À propos</p></Link>
            </div>
            <div className="contactUs">
                <p className="titreFouter contacttitre">Nous contacter</p>
                <Link to="/Contact"><p className="desc hov" onClick={() => setHNavBar("/Contact")}>Support</p></Link>
                <Link to="/Contact"><p className="desc hov" onClick={() => setHNavBar("/Contact")}>Numéro : +213 000 000 00</p></Link>
                <p className="hov">Email : Nassim@gmail.com</p>
                <p className="hov">CCP : CCP</p>
            </div>
            <div className="media">
                <p className="titreFouter mediatitre">Réseaux sociaux</p>

                <p className="desc mediaLogo">
                    <img className="logoReseaux" src={Facebook} alt="lien vers la notre page Facebook" />
                    <a className="lienTest hov" href="https://www.facebook.com/ChamsAssociation"
                        target="_blank" rel="noreferrer">Facebook</a></p>

                <p className="desc mediaLogo">
                    <img className="logoReseaux" src={Instagram} alt="lien vers la notre page Instagram" />
                    <a className="lienTest hov" href="https://www.instagram.com/chamsassociation/"
                        target="_blank" rel="noreferrer">Instagram</a></p>

                <p className="desc mediaLogo">
                    <img className="logoReseaux" src={Twitter} alt="lien vers la notre page Twitter" />
                    <a className="lienTest hov" href="https://twitter.com/Asso_Chams"
                        target="_blank" rel="noreferrer">Twitter</a></p>
            </div>
            {Session?.user?.nom === undefined ? <>
                <div className="joinUs">
                    <p className="titreFouter joinUstitre">joinUs</p>
                    <div className="inscriptionButtonInpute">
                        <input className="addGmailFooter" onChange={(e) => setEmailUser((prev: any) => ({ ...prev, email: e.target.value }))} placeholder="User@Gmail.com" />
                        <button className="addGmailButton" onClick={() => seconecterFunc()}>SE CONNECTER</button>
                    </div>
                </div>
            </> : ""}
        </div>
    </div>
}
export default Accueil