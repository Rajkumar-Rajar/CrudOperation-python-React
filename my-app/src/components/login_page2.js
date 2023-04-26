import React, { useEffect, useState } from "react";



const Login_page2 = () => {

    const [Data, setdata] = useState()
    const [id, setid] = useState()
    const [name, setname] = useState()
    const [Password, setpassword] = useState()
    const [id1, setid1] = useState()
    const [type1, settype1] = useState()



    useEffect(() => {
        const api = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }

        fetch("/dataone", api)
            .then((res) => res.json())
            .then((res) => {
                setdata(res["name"])
                // console.log(res)
                // console.log(res["name"][0].Name)
                let count = res['name'].length + 1
                // setid1(res['name'].length +1)
                setid1(count)

                // console.log(res["name"].length +1,"length of the array")


            })
    }, [])

    const add = () => {

        // console.log("add function is working");

        const api = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "_id":id1.toString(),
                "Name": name,
                "password": Password
            }),

        }
        fetch("/dataone", api)
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data)
                window.location.reload(true)
            })

    }

    const update = (id, name, password) => {
        setid(id)
        setname(name)
        setpassword(password)


    }


    const update1 = () => {
        const api = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "_id": id,
                "name": name,
                "password": Password
            })
        }
        fetch("/datadel", api)
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data)
                window.location.reload(true)
            })


    }

    const del = () => {
        console.log("this delete function")
        const api = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "_id": id
            })
        }


        fetch("/datadel", api)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                window.location.reload(true)
            })

    }


    const sample_add = () => {

        // console.log("add function is working");


            const api = {
                // method: "POST",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    // "_id":id1.toString(),
                    "Name": name,
                    "password": Password
                }),
    
            }
            fetch("/sample_add", api)
                .then((res) => (res.json()))
                .then((data) => {
                    console.log(data)
                    window.location.reload(true)
                })
    


     

    }

    const sample_put =() =>{

        const api = {
            // method: "POST",
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                // "_id":id1.toString(),
                "Name": name,
                "password": Password
            }),

        }
        fetch("/sample_add", api)
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data)
                // window.location.reload(true)
            })




    }

    const sample_get =() =>{

        const api = {
            // method: "POST",
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }


        }
        fetch("/sample_add", api)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                // window.location.reload(true)
            })
    }

    return (
        <div className="">
            <button type="button" class="btn btn-outline-danger float-end me-5" data-toggle="modal" data-target="#exampleModalCenter3">ADD</button>
            <button type="button" class="btn btn-outline-danger float-end me-5" data-toggle="modal" data-target="#exampleModalCenter4">sample-ADD</button>

            <table class="table">
                <thead>

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PASSWORD</th>
                        <th scope="col">EDIT/DELETE</th>
                    </tr>
                </thead>

                {Data &&
                    <tbody>
                        {
                            Data.map((data, index) =>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.password}</td>
                                    <td>
                                        <button type="button" onClick={() => { update(data._id, data.Name, data.password) }} class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter1" >EDIT</button>
                                        <button type="button" onClick={() => setid(data._id)} class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModalCenter2">DELETE</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                }
            </table>

            {/* ======================================edit=================================================================================================================== */}

            <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="gap-2">
                                <div className="d-flex gap-5">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} />
                                </div>
                                <div className="d-flex gap-4 mt-3">
                                    <label htmlFor="">Pasword</label>
                                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} value={Password} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => { update1() }} class="btn btn-primary">edit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================================================================================================================================================= */}
            {/* ================================delete========================================================================================================================= */}

            <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            do you want delete id num {id} data
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => { del() }} class="btn btn-primary">delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            {/* ===================================add======================================================================================================================================================add========================================================================================================================= */}

            <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="gap-2">
                                <div className="d-flex gap-5">
                                    <label htmlFor="">ID</label>
                                    <input type="number" onChange={(e) => { setid1(e.target.value) }} value={id1} />
                                </div>
                                <div className="d-flex gap-5">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onChange={(e) => { setname(e.target.value) }} />
                                </div>
                                <div className="d-flex gap-4 mt-3">
                                    <label htmlFor="">Pasword</label>
                                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => { add() }} class="btn btn-primary">add</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================================================================================================================================================= */}
        {/* ===================================sample-add======================================================================================================================================================add========================================================================================================================= */}

        <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="gap-2">
                                {/* <div className="d-flex gap-5">
                                    <label htmlFor="">ID</label>
                                    <input type="number" onChange={(e) => { setid1(e.target.value) }} value={id1} />
                                </div> */}
                                <div className="d-flex gap-5">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onChange={(e) => { setname(e.target.value) }} />
                                </div>
                                <div className="d-flex gap-4 mt-3">
                                    <label htmlFor="">Pasword</label>
                                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => { sample_add()}} class="btn btn-primary">POST</button>
                            <button type="button" onClick={() => { sample_get()}} class="btn btn-primary">GET</button>
                            <button type="button" onClick={() => { sample_put()}} class="btn btn-primary">PUT</button>
                            {/* <button type="button" onClick={() => { sample_add() }} class="btn btn-primary">add</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================================================================================================================================================= */}
        
        
        </div>
    )


}

export default Login_page2;