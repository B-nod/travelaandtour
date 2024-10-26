import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homapage from './pages/Homapage'

const Myroutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homapage/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Myroutes