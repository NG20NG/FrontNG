//
import { useContext, useEffect, useState } from "react"
//
import gsap from "gsap"
//
import { Random } from "../Contexts/randomContext"
//
import { LogIn, SignIn } from "./Sinscrire"
//
import "./SeConecter.css"
//
//
//
const SeConecter = () => {
    const { seconecterFunc, emailUser } = useContext(Random)

    useEffect(() => {
        if (emailUser.isUser === true) {
            gsap.to(".seconecter", { opacity: 0.97, duration: 0.2 })
        }
    })
    const [animation, setAnimation] = useState(false)
    const createSuper = () => {
        setTimeout(() => {
            setAnimation(!animation)
        }, 300)
        if (animation === false) {
            gsap.to(".registerRightBar", { width: 800, duration: 1 })
            setTimeout(() => {
                gsap.to(".registerRightBar", { width: 450, duration: 1 })
            }, 500)
            gsap.to(".registerRightBar", { x: -571, duration: 1 })
            gsap.to(".loginLefttBar", { x: 400, duration: 1 })
        } else {
            gsap.to(".registerRightBar", { x: 0, duration: 1 })
            gsap.to(".loginLefttBar", { x: 0, duration: 1 })

            gsap.to(".registerRightBar", { width: 900, duration: 1 })
            setTimeout(() => {
                gsap.to(".registerRightBar", { width: 450, duration: 1 })
            }, 500)
        }
    }
    return <div className="seconecter">
        <div className="seconecterCountaner">
            <div className="loginLefttBar">
                {animation === false ? <LogIn /> : <SignIn />}
            </div>
            <div className="registerRightBar">
                <div className="CreeUnComptCountaner">
                    <div className="GoBack" onClick={() => seconecterFunc()}>Go Back</div>
                    <p className="titreCreeUnCompt">{animation === true ? "inscrivez vous" : "connecter vous"}</p>
                    <p className="descriptionCreeUnCompt">entrez vos données personnelles et<br />commencez votre voyage avec nous</p>
                    <button className="CreeUnComptButton" onClick={() => createSuper()}>
                        {animation === true ? "Se connecter" : "S'inscrire"}
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default SeConecter