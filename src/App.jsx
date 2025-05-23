import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'

//import comps
import Login from './LogSignUp/Login'
import SignUp from './LogSignUp/Signup'
import Home from './home/home'
import GridData from './gridData/stockGrid'

function App() {

  if (sessionStorage.getItem("LOG_STATE")){
    return(
      <>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='p' element={<GridData/>} />
      </Routes>
    </>
  )
}

export default App
