import React, { useContext } from 'react'
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
import AdminRegister from './Login Management/AdminRegister.jsx';
import AdminVerify from './Login Management/AdminVerify.jsx';
import AdminLogin from './Login Management/AdminLogin.jsx';
import AdminProfile from './Login Management/AdminProfile.jsx';
import AdminLogout from './Login Management/AdminLogout.jsx';
import AdminProfileUpdate from './Login Management/AdminProfileUpdate.jsx';
import AdminPasswordUpdate from './Login Management/AdminPasswordUpdate.jsx';
import AdminForgotPassword from './Login Management/AdminForgotPassword.jsx';
import AdminResetPassword from './Login Management/AdminResetPassword.jsx';
import ReadAllUsers from './Login Management/ReadAllUsers.jsx';
import ReadSpecificUser from './Login Management/ReadSpecificUser.jsx';
import UpdateSpecificUser from './Login Management/UpdateSpecificUser.jsx';
import { GlobalVariableContext } from '../MyApp.jsx';

const ReactRouter = () => {
  // let global =useContext(GlobalVariableContext);
  // let token = global.token;

  let {token,setTOken} = useContext(GlobalVariableContext);
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
              
              <Route path='verify-email' element={<AdminVerify/>}></Route>
              <Route path='reset-password' element={<div><AdminResetPassword/></div>}></Route>


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

              <Route path="admin" element={<div><Outlet></Outlet></div>}>

                <Route index element={<div>This is admin dashboard.</div>}></Route>

                {
                  token ? 
                  <>
                <Route path='profile-update' element={<div><AdminProfileUpdate/></div>}></Route>
                <Route path='update-password' element={<div><AdminPasswordUpdate/></div>}></Route>
                <Route path='read-all-users' element={<div><ReadAllUsers/></div>}></Route>
                <Route path='my-profile' element={<div><AdminProfile/></div>}></Route>

                <Route path=':id' element={<div><ReadSpecificUser/></div>}></Route>

                <Route path='update' element={<div><Outlet></Outlet></div>}>
                  <Route path=':id' element={<div><UpdateSpecificUser/></div>} ></Route> 
                  </Route>

                <Route path='logout' element={<div><AdminLogout/></div>}></Route>

                  </>//this concept is also know as private routing.
                  :
                  <>
                <Route path='login' element={<div><AdminLogin/></div>}></Route>
                  
                  </>
                }

                <Route path='forgot-password' element={<div><AdminForgotPassword/></div>}></Route>
                
                <Route path='register' element={<div><AdminRegister/></div>}></Route>

              

                <Route path='*' element={<div>404 page not found</div>}></Route>

              </Route>

            </Route>

            <Route path='*' element={<div>404 page not found</div>}></Route>

          </Routes>
        </div>
      );
    };
    
    export default ReactRouter;

    
/* 
alt + shift + a
*/