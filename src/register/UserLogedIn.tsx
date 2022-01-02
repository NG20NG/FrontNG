//
import "./UserLogedIn.css"
//
//
import { useContext, useEffect, useState } from "react"
import { Random } from "../Contexts/randomContext"
import cookie from "react-cookies"
import gsap from "gsap"
//
import userGoDown from "../UserIcone/GoDown.svg"
import { Link } from "react-router-dom"
//
//
//
//
export const LoginButton = () => {
    let { seconecterFunc } = useContext(Random)
    return <>
        <li className="Sign-In" onClick={() => seconecterFunc()}>S'INSCRIRE</li>
        <li className="Sign-Up" onClick={() => seconecterFunc()}>SE CONNECTER</li>
    </>
}

//==============================================================================================
export const UserLogedIn = () => {
    let { url, Session, ifAdmin, setIfAdim, setingsOn } = useContext(Random)

    let [options, setOptions] = useState(false)
    setTimeout(() => {
        if (options === true) {
            gsap.to(".setingsButton", { "z-index": 1, opacity: 1, y: 50, duration: 0.1 })
            gsap.to(".desconectButton", { "z-index": 1, opacity: 1, y: 90, duration: 0.1 })
            gsap.to(".adminButton", { "z-index": 1, opacity: 1, y: 50, duration: 0.1 })
            gsap.to(".logoGoDown", { rotation: 0, duration: 0.3 });
        } else {
            gsap.to(".logoGoDown", { rotation: 90, duration: 0.3 });
        }
    }, 50)
    const removeCookies = () => {
        cookie.remove("user", { path: "/" })
        setTimeout(() => {
            window.location.reload();
        }, 10)
    }
    const dashBord = () => {
        if (Session?.user?.admin === true && Session?.user?.admin !== undefined) {
            setIfAdim(!ifAdmin)
        }
    }
    const [userData, setUserData] = useState<any>()

    useEffect(() => {
        const getUserById = async () => {
            const req = await fetch(`${url}/users/${Session?.user?._id}`)
            const data = await req.json()
            setUserData(data)
        }

        getUserById()
    }, [url, Session?.user?._id])
    gsap.to(".newUserLogo", { backgroundImage: `url(${userData?.profilePic})` })
    return <>
        <div className="userLogedIn">
            <div className="userPicCountaner">
                <div className="newUserLogo"></div>
            </div>
            <div className="userNameCountaner">
                <p>{Session?.user?.nom}</p>
            </div>
        </div>
        <div className="UserOptionsButtonCountaner">
            <div className="UserOptionsButton" onClick={() => setOptions(!options)}>
                <img className="logoGoDown" src={userGoDown} alt="open" />
            </div>

            <div className="adminButtonsetingsButtonCounatner">
                {options === false ? <></> : <>

                    {Session?.user?.nom === "Admin" && Session?.user?.admin === true ?
                        <div className="adminButton"
                            onClick={() => dashBord()}>Admin</div> : <></>}

                    <div className="setingsButton"
                        onClick={() => setingsOn()}>Paramètre&nbsp;<div>d'utilisateur</div></div>
                    <Link to="/"><div className="desconectButton" onClick={() => removeCookies()}>Déconnecter</div></Link>
                </>}
            </div>
        </div>
    </>
}