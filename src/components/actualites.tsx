//
//
import "./Comp.css/Actualites.css"
import { useContext, useEffect, useState } from "react"
//
import { Random } from "../Contexts/randomContext"
//
//
//
const Actualites = () => {

    const { Session } = useContext(Random)

    //=====================================================================================
    const [commentActu, setCommentActu] = useState<any>(null)
    const getCommentActu = async () => {
        const publication = await fetch("http://localhost:3001/Actualite")
        const pubData = await publication.json()
        setCommentActu(pubData)
    }
    useEffect(() => {
        getCommentActu()
    }, [])
    const deleteActuBTN = async (id: any) => {
        let test = window.confirm("Etes vous sur de vouloir supprimer")
        if (test === true) {
            let option = {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const req = await fetch(`http://localhost:3001/Actualite/${id}`, option)
            const data = req.json()
            console.log(data);
        } else {
            alert("Rien n'a été supprimé")
        }
    }
    return <div className="actualites">
        <div className="actuCountaner">
            <div className="titreActu">Actualites</div>
            <div className="contentActu">
                {commentActu?.map((actu: any, index: any) => {
                    return (<div key={index} className="cardPublication">
                        <div className="leftBarPucture">
                            <div><img className="imagePublication" src={"http://localhost:3001/uploads/" + actu?.picture} alt="publication" ></img></div>
                        </div>
                        <div className="rightBarComment">
                            <div>
                                <div className="titreRightBarActu">{actu.title}</div>
                                <div className="actuDescriptionCountaner">
                                    <div className="descriptionRightBarActu">{actu.description}</div>
                                </div>
                            </div>
                        </div>
                        {Session?.user?.admin === true ? <div className="deleteActualitesBTN" onClick={() => deleteActuBTN(actu?._id)}>Delete</div> : ""}
                    </div>)
                })
                }
            </div>
        </div>
    </div>
}
export default Actualites