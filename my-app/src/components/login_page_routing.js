import React from 'react'
import Login from './login'
import Login_page2 from './login_page2'
import { Routes, Route ,BrowserRouter} from "react-router-dom"



function Login_page_routing() {
  return (
    <div>
         <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="Login_page2" element={ <Login_page2/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Login_page_routing
