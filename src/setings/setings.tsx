//
import "./setings.css"
//
import { Random } from "../Contexts/randomContext"
import { useContext, useEffect, useState } from "react"
import gsap from "gsap"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
//
//
//
//
const UserSetings = () => {
    //====================================================================================
    const { url, storage, setingsOn, Session } = useContext(Random)
    const [userData, setUserData] = useState<any>()
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
    useEffect(() => {
        const getUserById = async () => {
            const req = await fetch(`${url}/users/${Session?.user?._id}`)
            const data = await req.json()
            setUserData(data)
        }
        getUserById()
    }, [url, Session?.user?._id])

    const [per, setPer] = useState<Number | String>(0 + "%")
    const uploadFile = () => {
        const storageRef = ref(storage, "profilePicture/" + timePic?.name)
        const uploadTask = uploadBytesResumable(storageRef, timePic)
        uploadTask?.on("state_changed", (snapshot: any) => {
            setPer(snapshot?.bytesTransferred / snapshot?.totalBytes)
        },
            (error: Error) => {
                console.log(error + " <==== ERROR");
            },
            () => {
                getDownloadURL(uploadTask?.snapshot.ref)
                    .then((urlfirebase: any) => {
                        fetch(`${url}/users/${Session?.user?._id}`, {
                            method: 'PATCH',
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ profilePic: urlfirebase + "" }),
                        }
                        ).then(url => url?.json()).then(storeData => {
                            console.log(storeData);
                        })
                    })
            }
        )
    }

    if (timePic !== undefined) {
        gsap.to(".test", { backgroundImage: `url(${addPicUser})` })
        gsap.to(".profilePic", { backgroundImage: `none` })
    } else {
        gsap.to(".profilePic", { backgroundImage: `url(${Session?.user?.profilePic})` })
    }
    //====================================================================================
    return <div className="UserSetings">
        <div className="UserSetingsCardCountaner">
            <div className="removeSetings" onClick={() => setingsOn()}>X</div>
            <div className="Profile">
                <div className="profilePic">
                    {timePic !== undefined ? <img src={addPicUser} /> : <img src={userData?.profilePic} />}
                </div>
                <p className="userNameSetings">{Session?.user?.nom}</p>
                <label className="addPicCountaner">
                    <input className="addPicInputUser" onChange={(pictureURL: any) => renderImage(pictureURL)} type="file" />
                    <div className="addPicTextUser">add Pic</div>
                </label>
                <div className="submitUserPicture" onClick={uploadFile}>Submit</div>
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