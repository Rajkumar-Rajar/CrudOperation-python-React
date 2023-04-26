import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'


function Remain() {
  return (
    <div className='bg-dark' style={{ height: "" }}>

      <div className="text-white d-flex">

        <div className="col-sm-4">

          <div className="">
          <img decoding="async" width="88" height="97" alt="Avada Logo" title="tf-footer-logo-trans" src="https://theme-fusion.com/wp-content/uploads/2018/06/tf-footer-logo-trans-retina.png" data-orig-src="https://theme-fusion.com/wp-content/uploads/2018/06/tf-footer-logo-trans-retina.png" class="img-responsive wp-image-440719 lazyloaded text-white" />
         <FontAwesomeIcon icon={'facebook-f'}  className='tetx-white'/>
          </div>
          <div className="">
            <label htmlFor=""><h1>ADDRESS</h1></label>
            <address>
              11/68678 <br /> washington-dc <br />colambia(po) <br />salem(tk) <br />america(dt)
            </address>
          </div>

        </div>

        <div className="col-sm-4">
          <div className="">
            <label htmlFor=""> <h1>RESOURCES</h1></label>
            <h3>Jobs</h3>
            <h3>About Us</h3>
            <h3>Contact Us</h3>
            <h3>Support Policy</h3>
            <h3>Terms Of Service</h3>
            <h3>Privacy Policy</h3>
          </div>
        </div>


        <div className="col-sm-4">
          <div className="">
            <label htmlFor="">ADDRESS</label>
            <address>
              11/68678 <br /> washington-dc <br />colambia(po) <br />salem(tk) <br />america(dt)
              {/* <FontAwesomeIcon icon={icon.facebo}  className='text-info'/> */}

            </address>
          </div>
        </div>

      </div>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Remain
