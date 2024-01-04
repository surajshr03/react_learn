import React from 'react'
import ReactLink from './ReactLink';
import ReadAllProducts from './products/ReadAllProducts';
import ReadSpecificProduct from './products/ReadSpecificProduct';
import CreateProducts from './products/CreateProducts';
import UpdateProducts from './products/UpdateProducts';
import ReadAllStudents from './students/ReadAllStudents';
import ReadSpecificStudent from './students/ReadSpecificStudent';
import CreateStudents from './students/CreateStudents';
import UpdateStudents from './students/UpdateStudents';
import { Outlet, Route, Routes } from 'react-router-dom';

const ReactRouter = () => {
      return (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <ReactLink></ReactLink>
                  <Outlet></Outlet><br/>
                  {/* <div style={{background:"purple", marginTop:"160px" }}>This is Footer</div> */}
                </div>
              }
            >
              <Route index element={<div>Home Page</div>}></Route>
    
              <Route
                path="products"
                element={
                  <div>
                    <Outlet></Outlet>
                  </div>
                }
              >
                <Route index element={<ReadAllProducts/>}></Route>
                <Route
                  path=":id"
                  element={<ReadSpecificProduct/>}
                ></Route>
                <Route
                  path="create"
                  element={<CreateProducts/>}
                ></Route>
    
                <Route
                  path="update"
                  element={
                    <div>
                      <Outlet></Outlet>
                    </div>
                  }
                >
                  <Route
                    path=":id"
                    element={<UpdateProducts/>}
                  ></Route>
                </Route>
              </Route>
    
              <Route
                path="students"
                element={
                  <div>
                    <Outlet></Outlet>
                  </div>
                }
              >
                <Route index element={<ReadAllStudents/>}></Route>
                <Route
                  path=":id"
                  element={<ReadSpecificStudent/>}
                ></Route>
                <Route
                  path="create"
                  element={<CreateStudents/>}
                ></Route>
    
                <Route
                  path="update"
                  element={
                    <div>
                      <Outlet></Outlet>
                    </div>
                  }
                >
                  <Route
                    path=":id"
                    element={<UpdateStudents/>}
                  ></Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      );
    };
    
    export default ReactRouter;
