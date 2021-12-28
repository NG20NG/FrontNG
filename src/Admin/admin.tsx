//
import "./admin.css"
//
import { useState, useContext } from "react"
import { Random } from "../Contexts/randomContext"
//
import AllUsers from "./components/allUsers"
import AllComment from "./components/allComment"
import Add from "./components/Actu"
//
//
//
export const Admin = () => {
    //===============================================================
    let { ifAdmin, setIfAdim } = useContext(Random)
    const goBack = () => {
        setIfAdim(!ifAdmin)
    }
    //
    const [swuitsh, setSwuitsh] = useState<any>({
        swEt: "Users dashboard",
        elem: <AllUsers />
    })

    const swuitchMain = (e: String) => {
        if (e === "Users") {
            setSwuitsh((elem: any) => ({ ...elem, elem: <AllUsers />, swEt: "Users dashboard" }))
        }
        if (e === "Comments") {
            setSwuitsh((elem: any) => ({ ...elem, elem: <AllComment />, swEt: "Comments dashboard" }))
        }
        if (e === "Actu") {
            setSwuitsh((elem: any) => ({ ...elem, elem: <Add />, swEt: "Ajouter une publication" }))
        }
    }
    //===============================================================
    return <div className="Admin">
        <div className="leftBar">
            <div className="dashboard">Admin DashBoard</div>
            <div className="listOptionCountaner">
                <div className="listOption" onClick={() => swuitchMain("Users")}>Users</div>
                <div className="listOption" onClick={() => swuitchMain("Comments")}>CommentsA</div>
                <div className="listOption" onClick={() => swuitchMain("Actu")}>Actu</div>
            </div>
        </div>
        <div className="rightBar">
            <div className="rightCardCountaner">
                <div className="GoBackNavBar">
                    <div>
                        {swuitsh?.swEt}
                    </div>
                    <button className="GoBackButton" onClick={() => goBack()}>Go Back</button>
                </div>
                <div className="cardAdminUsers">
                    {swuitsh?.elem}
                </div>
            </div>
        </div>
    </div>
}
export default Admin