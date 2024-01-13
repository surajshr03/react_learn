import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProducts from './products/CreateProducts'
import ReadAllProducts from './products/ReadAllProducts'
import CreateStudents from './students/CreateStudents'
import ReadAllStudents from './students/ReadAllStudents'
import ReadSpecificProduct from './products/ReadSpecificProduct'
import ReadSpecificStudent from './students/ReadSpecificStudent'


const MyRoutes = () => {
  return (
    <div>
      <Routes>
{/* home page */}
            <Route 
            path="/" 
            element={<div>Home page</div>} >
            </Route>

            {/* ------------------------- */}
            <Route 
            path="/products/create" 
            element={<CreateProducts></CreateProducts>} >
            </Route>

            <Route 
            path="/products" 
            element={<ReadAllProducts/>} >
            </Route>

            {/* id bata pata lagauna */}
            <Route 
            path="/products/:id" 
            element={<ReadSpecificProduct/>} >
            </Route>


{/* ----------------------------------------------- */}

            <Route 
            path="/students/:id" 
            element={<ReadSpecificStudent/>} >
            </Route>
            
            {/* Route ma -----jun sanga specific milxa tei choose garxa . unlike backend*/}


            <Route 
            path="/students/create" 
            element={<CreateStudents/>} >
            </Route>

            <Route 
            path="/students" 
            element={<ReadAllStudents/>} >
            </Route>

            {/* ----------------------- */}
            <Route 
            path="/*" 
            element={<div>404 page not found</div>} >
            </Route>



      </Routes>
    </div>
  )
}

export default MyRoutes