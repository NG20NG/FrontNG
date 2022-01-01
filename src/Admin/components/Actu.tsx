//
//
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useState, useContext } from "react"
//
import { Random } from "../../Contexts/randomContext"
import { storage } from "../../firebase"
//
import imageIcone from "./icones/imageIcone.png"
import loadingPost from "./icones/loadingPost.svg"
//
//
//
//
const Actualite = () => {
    const { url } = useContext(Random)
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [pic, setPic] = useState<any>(null)
    const [postActu, setPostActu] = useState<any>({
        title: "",
        description: "",
        picture: null
    })

    //========================================================================
    const [addPic, setAddPic] = useState<any>()
    //
    const renderImage = (e: any) => {
        //=================================================
        setPic(e.target.files[0])
        //=================================================
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setAddPic(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    const [per, setPer] = useState<number>(0)

    const uploadFile = () => {
        setIsloading(true)
        const storageRef = ref(storage, "actu/" + pic?.name)
        const uploadTask = uploadBytesResumable(storageRef, pic)
        uploadTask?.on("state_changed", (snapshot: any) => {
            const prog = snapshot?.bytesTransferred / snapshot?.totalBytes
            setPer(prog)
        },
            (error: Error) => {
                console.log(error + " <==== ERROR");
            },
            () => {
                getDownloadURL(uploadTask?.snapshot.ref)
                    .then((urlfirebase: any) => {
                        if (urlfirebase) {
                            fetch(`${url}/Actualite`, {
                                method: 'POST',
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    title: postActu?.title,
                                    description: postActu?.description,
                                    picture: urlfirebase
                                }),
                            }
                            )
                                .then(url => url.json())
                                .then(storeData => {
                                    console.log(storeData);
                                    if (storeData) {
                                        setIsloading(false)
                                    }
                                })
                        }
                    })
            }
        )
    }

    return (<div className="Actualite">
        <div className="postActuCountaner">
            <div className="postActu">
                <label className="addPictureActuCountaner">
                    <img className="imageIcone" src={imageIcone} alt="icone" />
                    <div className="addText">Ajouter une Photo </div>
                    <input className="addPictureActu" type="file" onChange={(e: any) => renderImage(e)} />
                </label>{per}%
                <button className="postBTNActu" onClick={uploadFile}>
                    {isLoading === false ? "Post" : <img src={loadingPost} alt="loading Post BTN" />}
                </button>
            </div>
        </div>
        <div className="cardPublicationAdminCountaner">
            <div className="cardPublicationAdmin">
                <div className="leftBarPuctureAdmin">
                    <div><img className="imagePublicationAdmin" src={addPic} alt="publication" /></div>
                </div>
                <div className="rightBarCommentAdmin">
                    <div className="actuDescriptionCountanerAdmin">
                        <div className="titreRightBarActuAdmin">
                            <textarea className="titreAdminActuPost" onChange={(e: any) => setPostActu((a: any) => ({ ...a, title: e.target.value }))} />
                        </div>
                        <div className="descriptionRightBarActuAdmin">
                            <textarea className="descriptionAdminActuPost" onChange={(e: any) => setPostActu((a: any) => ({ ...a, description: e.target.value }))} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Actualite