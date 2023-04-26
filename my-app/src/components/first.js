import React from 'react'
import "./first.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'

function first() {
    return (

        <div className="" style={{ height: "100vh",backgroundColor:"rgb(10,12,11)" }}>
            <div className='d-flex justify-content-center'>
                {/* <div className="">
                <div className="col">
                    <h3 className='text-light fs-1 text-center'>
                        Find Great Places to eat
                       <h3 className=''>to Drink or meet Locals</h3>
                    </h3>
                    <div className='col d-flex gap-5 justify-content-around'>
                        <div className="dorpdown-menu">
                            <button className='btn btn-outline-success px-5' data-bs-toggle="dropdown">product
                                <span className='text-light ms-3'><FontAwesomeIcon icon={icon.faCaretDown} /> </span>
                            </button>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dorpdown-menu">
                            <button className='btn btn-outline-success px-5' type="button" data-bs-toggle="dropdown">service
                                <span className='text-light  ms-3'><FontAwesomeIcon icon={icon.faCaretDown} />
                                </span>
                            </button>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dorpdown-menu">
                            <button className='btn btn-outline-success px-5' type="button" data-bs-toggle="dropdown">about
                                <span className='text-light  ms-3'><FontAwesomeIcon icon={icon.faCaretDown} /> </span>
                            </button>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>

                    </div>
                    <div className="mt-5">
                        <div className="d-flex justify-content-around">
                            <div className='limg'>
                                <FontAwesomeIcon className="size" icon={icon.faScaleBalanced} />
                            </div>
                            <div className='limg'>
                                <FontAwesomeIcon icon={icon.faAddressBook} className="size" />
                            </div>
                            <div className='limg'>
                                <FontAwesomeIcon icon={icon.faLandmark} className="size" />
                            </div>

                        </div>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div className='limg'>
                                <FontAwesomeIcon icon={icon.faPhone} className="size" />
                            </div>
                            <div className='limg'>
                                <FontAwesomeIcon icon={icon.faChartSimple} className="size" />
                            </div>
                        </div>
                    </div>



                </div>
            </div> */}
                <div className="col-4 text-white text-center" style={{ marginTop: "5%" }}>
                   
                    <h2 className='text-white' >SOUL KITCHEN</h2>
                   
                   <div className="d-flex">
                    <div className="" style={{width:"600px"}}>
                    <div className="" style={{marginTop:"30%"}}>
                        <h1 className=''>BUY A GOOD PRODUCT FROM<br /> OUR INDIA'S FIRST <br /> ORGANIC FORM</h1>
                       
                        <h3 className='opacity-25' style={{marginTop:"5%"}}>Get the best harvest.<br />
                            Fertilizing made easy and healthy.</h3>
                    </div>

                    <div className="d-flex justify-content-center gap-5 mt-5">
                    <button type="button" class="btn btn-outline-secondary border-white rounded-0 px-5 text-white fs-5 border border-2">view products</button>
                    <button type="button" class="btn btn-outline-secondary rounded-0 px-5 border-white text-white fs-5 border border-2">view service</button>

                    </div>
                    </div>

                    <div className=""> 

                    <div className="d-flex">

                    <div>
                    <div className="col-1 bg-white" style={{width:"2px",height:"200px",marginLeft:"50px",marginTop:"300px"}}></div>
                    </div>

                    <div className="">
                    {/* <img style={{width:"90%",height:"50%",marginLeft:"50px",marginTop:"270px"}} className='border border-info' src="https://media.istockphoto.com/id/164104778/vector/decorative-vintage-ornate-banner.jpg?s=612x612&w=0&k=20&c=Gy_FfN1bjLSPFdvCAWT2OGFgDV9S3XCtUkkl26vTVEc=" alt="imangee" /> */}
                    </div>

                    </div>

                    </div>
                    

                    </div>


                </div>


            </div>
        </div>
    )
}

export default first
