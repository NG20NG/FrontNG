//
//
import { useState, useContext } from "react"
//
import { Random } from "../../Contexts/randomContext"
//
import imageIcone from "./icones/imageIcone.png"
//
//
//
//
const Actualite = () => {
    const { url } = useContext(Random)
    const [pic, setPic] = useState<any>(null)
    const [postActu, setPostActu] = useState<any>({
        "title": "",
        "description": ""
    })
    //========================================================================
    const [addPic, setAddPic] = useState<any>()

    //
    const renderImage = (e: any) => {
        setPic(e.target.files[0])
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setAddPic(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    //========================================================================
    const addActuPublication: any = () => {
        const newPicActu = new FormData()
        newPicActu.append("picture", pic)
        fetch(`${url}/Actualite`, {
            method: 'POST',
            body: newPicActu,
        }).then((dataImage: any) => dataImage?.json()).then((data: any) => {
            console.log(data);
            fetch(`${url}/Actualite/${data?._id}`, {
                method: 'PATCH',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postActu),
            }).then((update: any) => update.json()).then((data: any) => console.log(data))
        })
    }

    //========================================================================
    return (<div className="Actualite">
        <div className="postActuCountaner">
            <div className="postActu">
                <label className="addPictureActuCountaner">
                    <img className="imageIcone" src={imageIcone} alt="icone" />
                    <div className="addText">Ajouter une Photo</div>
                    <input className="addPictureActu" type="file" onChange={(e: any) => renderImage(e)} />
                </label>
                <button className="postBTNActu" onClick={addActuPublication}>Post</button>
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