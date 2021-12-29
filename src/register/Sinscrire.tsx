//
import { useContext, useState } from "react"
import cookie from "react-cookies"
import { Random } from "../Contexts/randomContext"
//
import gsap from "gsap"
//
//
const SignIn = () => {
    let { url, emailUser } = useContext(Random)
    //====================================================================
    let [iferr, setIferr] = useState<any>()
    let [postUser, setPostUser] = useState<any>({
        nom: "",
        email: emailUser.email,
        password: ""
    })

    const postUserFunc = async () => {
        if (postUser.password.length < 8) {
            gsap.to(".passwordSignIn", { border: "2px solid red", borderRadius: 2, opacity: 0.8 })
            gsap.to(".emailSignIn", { border: "none" })
        }
        if (postUser.nom.length < 3) {
            gsap.to(".nomlength", { border: "2px solid red", borderRadius: 2, opacity: 0.8 })
        } else {
            gsap.to(".nomlength", { border: "none" })
        }
        let option = {
            method: "POST",
            body: JSON.stringify(postUser),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        const req = await fetch(`${url}/users`, option)
        const data = await req.json()
        setIferr(data)
        cookie.save("user", data, { path: '/' })
    }
    setTimeout(() => {
        if (iferr?.message !== ""
            || iferr?.message !== undefined) {
            if (iferr?.user?.nom !== undefined) {
                window.location.reload();
            }
        }
    }, 100)
    if (iferr?.message === "user Already exists") {
        gsap.to(".emailSignIn", { border: "2px solid red", borderRadius: 2, opacity: 0.8 })
        gsap.to(".passwordSignIn", { border: "none" })
    }
    if (postUser.password.length > 8) {
        gsap.to(".passwordSignIn", { border: "none" })
    }
    //====================================================================
    return <div className="borderSeconecter">
        <div className="conectCard">
            <p className="titreSeConecter">S'inscrire</p>
            <p className="underTitre">Entre votre email et votre mote de pass</p>
            <div className="messageCreeCompt">{iferr?.message}</div>
            <div className="GmailPasswordCountaner2">
                <input className="nomlength" maxLength={15} onChange={(A) => setPostUser((e: any) => ({ ...e, nom: A.target.value }))} placeholder="UserName" />
                <input className="emailSignIn" onChange={(A) => setPostUser((e: any) => ({ ...e, email: A.target.value }))} placeholder="User@Gmail.com" />
                <input className="passwordSignIn" maxLength={20} type="password" onChange={(A) => setPostUser((e: any) => ({ ...e, password: A.target.value }))} placeholder="passWord" />
                <input type="password" placeholder="passWord" />
            </div>
            <div className="submitloginCountaner">
                <button className="submitlogin" onClick={() => postUserFunc()}>cree un compte</button>
            </div>
        </div>
    </div>
}
//====================================================================================================================
//====================================================================================================================
const LogIn = () => {
    //===============================================================
    let { url, emailUser } = useContext(Random)
    let [loginUser, setLoginUser] = useState<any>({
        email: emailUser.email,
        password: ""
    })
    //===============================================================
    let [iferr, setIferr] = useState<any>()
    const LoginUser = async () => {
        const req = await fetch(`${url}/users`, {
            method: "POST",
            body: JSON.stringify(loginUser),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const data = await req.json()
        cookie.save("user", data, { path: '/' })
        setIferr(data)
    }
    //===============================================================
    setTimeout(() => {
        if (iferr?.message !== ""
            || iferr?.message !== undefined) {
            if (iferr?.user?.nom !== undefined) {
                window.location.reload();
            }
        }
    }, 100)
    //===============================================================
    if (iferr?.message === "User not found") {
        gsap.to(".emailLgoIn", { border: "2px solid red", borderRadius: 2, opacity: 0.8 })
        gsap.to(".passwordLgoIn", { border: "none" })
    }
    if (iferr?.message === "Invalid credentials") {
        gsap.to(".passwordLgoIn", { border: "2px solid red", borderRadius: 2, opacity: 0.8 })
        gsap.to(".emailLgoIn", { border: "none" })
    }
    //===============================================================
    return <div className="borderSeconecter">
        <div className="conectCard">
            <p className="titreSeConecter">Se connecter</p>
            <p className="underTitre">Entre votre email et votre mote de pass</p>
            <div className="GmailPasswordCountaner">
                <p className="messageERR" style={{ color: "red", fontWeight: 500 }}>{iferr?.message}</p>
                <input className="emailLgoIn" onChange={(A) => setLoginUser((e: any) => ({ ...e, email: A.target.value }))} placeholder="User@Gmail.com" defaultValue={emailUser.email} />
                <input className="passwordLgoIn" onChange={(A) => setLoginUser((e: any) => ({ ...e, password: A.target.value }))} placeholder="passWord" type="password" />
            </div>
            <div className="submitloginCountaner">
                <button onClick={() => LoginUser()} className="submitlogin">Se Conecter</button>
            </div>
        </div>
    </div>
}
export { LogIn, SignIn }