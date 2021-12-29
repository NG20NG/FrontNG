//
import "./setings.css"
//
import { Random } from "../Contexts/randomContext"
import { useContext, useEffect, useState } from "react"
import gsap from "gsap"
//
//
//
//
const UserSetings = () => {
    //====================================================================================
    const { url, setingsOn, Session } = useContext(Random)
    //=================================================
    const [timePic, setTimePic] = useState<any>()
    const [addPicUser, setAddPicUser] = useState<any>()
    const renderImage = (e: any) => {
        setTimePic(e.target.files[0])
        if (e.target.files[0]) {
            gsap.to(".test", { backgroundImage: `url(${addPicUser})` })
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setAddPicUser(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    //==================================================
    const updateUserPrifilePic = () => {
        if (timePic !== undefined) {
            const newPicActu = new FormData()
            newPicActu.append("picture", timePic)
            let id = Session?.user?._id
            fetch(`${url}/users/${id}`, {
                method: 'PATCH',
                body: newPicActu
            }).then(() => window.location.reload())
        } else {
            console.log("123");
        }
    }
    const [userData, setUserData] = useState<any>()
    const getUserById = async () => {
        const req = await fetch(`${url}/users/${Session?.user?._id}`)
        const data = await req.json()
        setUserData(data)
    }
    useEffect(() => {
        getUserById()
    }, [])
    if (timePic === undefined) {
        gsap.to(".profilePic", { backgroundImage: `url(${url}/ProfilePic/${userData?.profilePic})` })
    } else {
        gsap.to(".test", { backgroundImage: `url(${addPicUser})` })
        gsap.to(".profilePic", { backgroundImage: `none` })
    }
    //====================================================================================
    return <div className="UserSetings">
        <div className="UserSetingsCardCountaner">
            <div className="removeSetings" onClick={() => setingsOn()}>X</div>
            <div className="Profile">
                <div className="profilePic">
                    <div className="test">
                    </div>
                </div>
                <p className="userNameSetings">{Session?.user?.nom}</p>
                <label className="addPicCountaner">
                    <input className="addPicInputUser" onChange={(pictureURL: any) => renderImage(pictureURL)} type="file" />
                    <div className="addPicTextUser">add Pic</div>
                </label>
                <div className="submitUserPicture" onClick={updateUserPrifilePic}>Submit</div>
            </div>
            <div className="userInformation">
                <div className="UserNameCountaner">
                    <div className="leftBarInfo">
                        <p>USER NAME :</p>
                        <p>{Session?.user?.nom}</p>
                    </div>
                    <button className="UpdateButton">Modifier</button>
                </div>
                <div className="UserEmailCountaner">
                    <div className="leftBarInfo">
                        <p>E-MAIL :</p>
                        <p>********@gmail.com</p>
                    </div>
                    <button className="UpdateButton">Modifier</button>
                </div>
                <div className="UserPasswordCountaner">
                    <div className="leftBarInfo">
                        <p>MOTE DE PASS :</p>
                        <p>********</p>
                    </div>
                    <button className="UpdateButton">Modifier</button>
                </div>
            </div>
        </div>
    </div>
}
export default UserSetings