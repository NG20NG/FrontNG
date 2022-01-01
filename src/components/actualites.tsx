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

    const { url, Session } = useContext(Random)

    //=====================================================================================
    const [commentActu, setCommentActu] = useState<any>(null)
    useEffect(() => {
        const getCommentActu = async () => {
            const publication = await fetch(`${url}/Actualite`)
            const pubData = await publication.json()
            setCommentActu(pubData)
        }
        getCommentActu()
    }, [url])
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
            const req = await fetch(`${url}/Actualite/${id}`, option)
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
                            <div><img className="imagePublication" src={actu?.picture} alt="publication" ></img></div>
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