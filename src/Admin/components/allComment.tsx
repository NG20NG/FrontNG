//
import gsap from "gsap"
import { useEffect, useState, useContext } from "react"
//
import { Random } from "../../Contexts/randomContext"
//
//
//
//
//
const Comment = () => {
    //
    const { url } = useContext(Random)
    //
    const [allComments, setAllComments] = useState<any>()
    useEffect(() => {
        const getAllComments = async () => {
            const com = await fetch(`${url}/comment`)
            const comments = await com.json()
            setAllComments(comments)
        }
        getAllComments()
    }, [url])
    //===================================================================================================
    const deleteComment = async (ID: any) => {
        let Delete = prompt(`type the User Name to delete ( DELETE )`)
        console.log(ID);

        if (Delete === `DELETE`) {
            let option = {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            await fetch(`${url}/comment/${ID}`, option)
            alert("GG you just deleted the comment")
            window.location.reload();
        } else {
            alert("you did't delete the comment")
        }
    }
    //
    const [searchOrNot, setSearchOrNot] = useState({
        elemFilter: Object,
        dataCondition: "Name",
    })
    setTimeout(() => {
        if (searchOrNot?.dataCondition === "Name") {
            gsap.to(".filterName", { background: "#157aff", color: "white", border: "1px solid #157aff" })
            gsap.to(".filterID", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
        } else {
            gsap.to(".filterID", { background: "#157aff", color: "white", border: "1px solid #157aff" })
            gsap.to(".filterName", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
        }
        if (searchOrNot?.elemFilter === Object) {
            gsap.to(".removeFilter", { zIndex: -1, x: "0px", opacity: 0 })
        }
    }, 10)
    let normal = allComments?.map((e: any, index: any) => {
        return <div key={index} className="commentCard" onClick={() => deleteComment(e?._id)}>
            <div className="commentsUserCountaner">
                <div>{e.nom}</div>
                <div>{e._id}</div>
            </div>
            <div className="AdminComments">{e.comment}</div>
        </div>
    })
    const [dataValue, setDataValue] = useState()
    let filterName = allComments?.filter((e: any) => e.nom === dataValue).map((e: any, index: any) => {
        return <div key={index} className="commentCard" onClick={() => deleteComment(e?._id)}>
            <div className="commentsUserCountaner">
                <div>{e.nom}</div>
                <div>{e._id}</div>
            </div>
            <div className="AdminComments">{e.comment}</div>
        </div>
    })
    //
    let filterID = allComments?.filter((e: any) => e._id === dataValue).map((e: any, index: any) => {
        return <div key={index} className="commentCard" onClick={() => deleteComment(e?._id)}>
            <div className="commentsUserCountaner">
                <div>{e.nom}</div>
                <div>{e._id}</div>
            </div>
            <div className="AdminComments">{e.comment}</div>
        </div>
    })
    //
    const searchButton = () => {
        if (searchOrNot.dataCondition === "Name") {
            setSearchOrNot((e: any) => ({ ...e, elemFilter: filterName }))
        }
        if (searchOrNot.dataCondition === "ID") {
            setSearchOrNot((e: any) => ({ ...e, elemFilter: filterID }))
        }
        gsap.to(".removeFilter", { zIndex: 1, x: "-25px", opacity: 1 })
    }
    //
    return <div className="Comments">
        <div className="searchBarComment">
            <button className="removeFilter" onClick={() => setSearchOrNot((e: any) => ({ ...e, elemFilter: Object }))}>X</button>
            <input className="inputeSearchBar" onChange={(e: any) => setDataValue(e.target.value)} />
            <button className="submitSearchButton" onClick={() => searchButton()}>Search</button>
            <button className="filterButtonComments filterName" onClick={() => setSearchOrNot((e: any) => ({ ...e, dataCondition: "Name" }))}>Name</button>
            <button className="filterButtonComments filterID" onClick={() => setSearchOrNot((e: any) => ({ ...e, dataCondition: "ID" }))}>ID</button>
        </div>
        <div className="commentsCountaner">
            <div className="commentsCardCountaner">
                {searchOrNot?.elemFilter === Object ? normal : searchOrNot?.elemFilter}
                {searchOrNot?.elemFilter?.length === 0 ? "nothingFound" : ""}
            </div>
        </div>
    </div>
}
export default Comment