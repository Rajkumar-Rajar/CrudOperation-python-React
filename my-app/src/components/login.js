import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [id, setid] = useState()
  const [data, setdata] = useState("")



  useEffect(() =>{

    const api ={
      method:"GET",
      headers:{
        "content-type":"aplication.json"
      },
    }
     fetch("/dataone",api)
     .then((res)=>(res.json()))
     .then((data)=>
     {
      console.log(data)
      // console.log(data["name"].map((i,ih)=>i.Name))
      setdata(data["name"])
     })
  },[])

  const submite1 =() =>{
    // let name1=data.map((i) => i.Name)

    let id_number =0

    data.filter((i)=>
    {
      if(i.Name == email){
        id_number=i._id
      }
    }
    )
    // console.log(id_number,"id number")
    // console.log(data[id_number -1].Name,data[id_number -1 ].password)


    if(data[id_number-1].Name == email && data[id_number-1].password == password){
      navigate("/Login_page2")
    }
    else{
      console.log("wrong password")
    }
    
  }



  // const submite = () => {
  //   const reflask = {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       // hi: {
  //       "Name": email,
  //       "password": password,
  //       "_id": id

  //       // }
  //     })
  //   }

  //   fetch("/dataone", reflask)
  //     .then((res) => res.json()
  //       .then((data) => {
  //         console.log(data, "the backend");

  //       })
  //     );

  // }

  // const get_data = () => {
  //   const reflask = {
  //     method: "GET",
  //     headers: { 'Content-Type': 'application/json' },
  //     // body:JSON.stringify({
  //     //   "_id":id
  //     // })

  //   }

  //   fetch("/dataone", reflask)
  //     .then((res) => res.json()
  //       .then((data) => {
  //         console.log(data, "data-getting");
  //         setdata(data)
  //       })
  //     );

  // }

  // const delete_data = () => {
  //   const reflask = {
  //     method: "DELETE",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "_id": id
  //     })
  //   }

  //   fetch("/datadel", reflask)
  //     .then((res) => res.json()
  //       .then((data) => {
  //         console.log(data, "data-starded");

  //       })
  //     );

  // }


  // const update_data = () => {
  //   const reflask = {
  //     method: "put",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "_id": id,
  //       "Name": email,
  //       "password": password,
  //     })

  //   }

  //   fetch("/datadel", reflask)
  //     .then((res) => res.json()
  //       .then((data) => {
  //         console.log(data, "data-starded");
  //       })
  //     );
  // }


  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="">

          <div className="">
            {/* <div className="p-2">
              <label htmlFor="">ID NUMBER</label>
            </div>
            <div className="">
              <input className='p-2' type="number" name="" id="" placeholder='id_number' onChange={(e) => { setid(e.target.value) }} />
            </div> */}
          </div>
          <div className="">
            <div className="p-2">
              <label htmlFor="">EMAIL</label>
            </div>
            <div className="">
              <input className='p-2' type="email" name="" id="" placeholder='Email' onChange={(e) => { setemail(e.target.value) }} />
            </div>
          </div>

          <div className="">
            <div className="p-2">
              <label htmlFor="">PASSWORD</label>
            </div>

            <div className="">
              <input className='p-2 ' type="password" name="" id="" placeholder='PASSWORD' onChange={(e) => { setpassword(e.target.value) }} />
            </div>
          </div>
        </div>

      </div>
<div className="d-flex justify-content-center">
      <div className="d-flex gap-5">
      <div className="mt-4 d-flex justify-content-center">
          <button className='btn btn-outline-success d-block rounded-0' onClick={() => submite1()} >SUBMIT</button>
        </div>
        {/* <div className="mt-4 d-flex justify-content-center">
          <button className='btn btn-outline-success d-block rounded-0' onClick={() => submite()} >SUBMIT</button>
        </div>

        <div className="mt-4 d-flex justify-content-center">
          <button className='btn btn-outline-success d-block rounded-0' onClick={() => get_data()} >get_data</button>
        </div>


        <div className="mt-4 d-flex justify-content-center">
          <button className='btn btn-outline-success d-block rounded-0' onClick={() => update_data()} >update_data</button>
        </div>

        <div className="mt-4 d-flex justify-content-center">
          <button className='btn btn-outline-success d-block rounded-0' onClick={() => delete_data()} >deletedata</button>
        </div> */}

      </div>
      </div>

    </div>
  )
}

export default Login
