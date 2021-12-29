//
//
//
//
//
import gsap from "gsap"
import { useEffect, useState, useContext } from "react"
//
import { Random } from "../../Contexts/randomContext"
//
const AllUsers = () => {
    const { url } = useContext(Random)
    //========================================================================================================================
    const [allUsers, setAllUsers] = useState<[]>()
    const getAllUsers = async () => {
        const req = await fetch(`${url}/users`)
        const users = await req.json()
        setAllUsers(users)
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    //========================================================================================================================
    const [searchData, setSearchData] = useState<String>()
    //========================================================================================================================
    const [searchOrNot, setSearchOrNot] = useState({
        elemFilter: Object,
        dataCondition: "Name",
    })

    setTimeout(() => {
        if (searchOrNot.dataCondition === "Name") {
            gsap.to(".NameButton", { background: "#157aff", color: "white", border: "1px solid #157aff" })
            gsap.to(".EmailButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
            gsap.to(".IDButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
        }
        if (searchOrNot.dataCondition === "Email") {
            gsap.to(".NameButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
            gsap.to(".EmailButton", { background: "#157aff", color: "white", border: "1px solid #157aff" })
            gsap.to(".IDButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
        }
        if (searchOrNot.dataCondition === "ID") {
            gsap.to(".NameButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
            gsap.to(".EmailButton", { background: "rgb(240, 240, 240)", color: "black", border: "1px solid rgb(223, 223, 223)" })
            gsap.to(".IDButton", { background: "#157aff", color: "white", border: "1px solid #157aff" })
        }
        if (searchOrNot?.elemFilter === Object) {
            gsap.to(".removeFilter", { zIndex: -1, x: "0px", opacity: 0 })
        }
    }, 10)
    //========================================================================================================================
    const deletUser = async (ID: any, nom: string | null) => {
        let test = prompt(`type the User Name to delete ( DELETE ${nom?.toUpperCase()})`)
        if (test === `DELETE ${nom?.toUpperCase()}`) {
            let option = {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const deletedData = await fetch(`${url}/users/${ID}`, option)
            console.log(deletedData);
            alert("GG")
            window.location.reload();
        } else {
            alert("use did't delete the user")
        }
    }
    //========================================================================================================================
    let FilterName = allUsers?.filter((e: any) => e?.nom === searchData).map((e: any, index: any) => {
        return <div key={index} className="exampleUser userCardBorder">
            <div className="index">{index}</div>
            <div className="userId">{e._id}</div>
            <div className="userName">{e.nom}</div>
            <div className="Email">{e.email}</div>
            <div className="Date">{e.createdAt}</div>
            <div className="Delete UserDelete" onClick={() => deletUser(e._id, e.nom)}>Delete</div>
        </div>
    })
    let normal = allUsers?.map((e: any, index: any) => {
        return <div key={index} className="exampleUser userCardBorder">
            <div className="index">{index}</div>
            <div className="userId">{e._id}</div>
            <div className="userName">{e.nom}</div>
            <div className="Email">{e.email}</div>
            <div className="Date">{e.createdAt}</div>
            <div className="Delete UserDelete" onClick={() => deletUser(e._id, e.nom)}>Delete</div>
        </div>
    })
    let FilterEmail = allUsers?.filter((e: any) => e?.email === searchData).map((e: any, index: any) => {
        return <div key={index} className="exampleUser userCardBorder">
            <div className="index">{index}</div>
            <div className="userId">{e._id}</div>
            <div className="userName">{e.nom}</div>
            <div className="Email">{e.email}</div>
            <div className="Date">{e.createdAt}</div>
            <div className="Delete UserDelete" onClick={() => deletUser(e._id, e.nom)}>Delete</div>
        </div>
    })
    let FilterID = allUsers?.filter((e: any) => e?._id === searchData).map((e: any, index: any) => {
        return <div key={index} className="exampleUser userCardBorder">
            <div className="index">{index}</div>
            <div className="userId">{e._id}</div>
            <div className="userName">{e.nom}</div>
            <div className="Email">{e.email}</div>
            <div className="Date">{e.createdAt}</div>
            <div className="Delete UserDelete" onClick={() => deletUser(e._id, e.nom)}>Delete</div>
        </div>
    })
    //========================================================================================================================
    const searchButton = () => {
        if (searchOrNot.dataCondition === "Name") {
            setSearchOrNot((e: any) => ({ ...e, elemFilter: FilterName }))
        }
        if (searchOrNot.dataCondition === "Email") {
            setSearchOrNot((e: any) => ({ ...e, elemFilter: FilterEmail }))
        }
        if (searchOrNot.dataCondition === "ID") {
            setSearchOrNot((e: any) => ({ ...e, elemFilter: FilterID }))
        }
        gsap.to(".removeFilter", { zIndex: 1, x: "-25px", opacity: 1 })
    }
    //========================================================================================================================
    return (<>
        <div className="searchBarUsers">
            <button className="removeFilter" onClick={() => setSearchOrNot((e: any) => ({ ...e, elemFilter: Object, }))}>X</button>
            <input className="inputeSearchBar" onChange={(e) => setSearchData(e.target.value)} />
            <button className="submitSearchButton" onClick={() => searchButton()}>srach</button>
            <div className="searchByCountaner">
                <button className="NameButton" onClick={() => setSearchOrNot((e: any) => ({ ...e, dataCondition: "Name" }))}>Name</button>
                <button className="EmailButton" onClick={() => setSearchOrNot((e: any) => ({ ...e, dataCondition: "Email" }))}>Email</button>
                <button className="IDButton" onClick={() => setSearchOrNot((e: any) => ({ ...e, dataCondition: "ID" }))}>ID</button>
            </div>
        </div>
        <div className="cardUsers">
            <div className="exampleUser">
                <div className="index">index</div>
                <div className="userId">ID</div>
                <div className="userName">userName</div>
                <div className="Email">Email</div>
                <div className="Date">Date</div>
                <div className="Delete">Delete</div>
            </div>
            <div className="usersCountaner">
                {searchOrNot?.elemFilter === Object ? normal : searchOrNot?.elemFilter}
            </div>
        </div></>)
}
export default AllUsers