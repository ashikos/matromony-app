import React from 'react'
import { Routes, BrowserRouter as Router, Route, } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Feedback from './pages/Feedback'
import Transactions from './pages/Transactions'
import Users from './pages/Users'
import LoginLayout from './pages/register/LoginLayout'
import Login from './pages/register/Login'
import Register from './pages/register/Register'
import UserView from './pages/UserView'
import UserLayout from './pages/UserLayout'
import General from './pages/UserInfo/General'
import ContactInfo from './pages/UserInfo/ContactInfo'
import Educational from './pages/UserInfo/Educational'
import LifeStyle from './pages/UserInfo/LifeStyle'
// import Preference from './pages/UserInfo/Preference'
import Profession from './pages/UserInfo/Profession'
// import Family from './pages/UserInfo/Family'
import BasicInfo from './pages/regInfo/BasicInfo'
import EmployerInfo from './pages/regInfo/EmployerInfo'
import Jobseeker from './pages/regInfo/Jobseeker'
import BaseLayout from './pages/regInfo/BaseLayout'
import Relationship from './pages/regInfo/Relationship'
import Matrimony from './pages/Matrimony'
import MatriInfo from './pages/regInfo/MatriInfo'
import Preference from './pages/regInfo/Preference'
import Family from './pages/regInfo/FamilyInfo'
import DashboardLayout from './pages/userdashboard/DashboardLayout'
import UserList from './pages/userdashboard/UserList'
import Saved from './pages/userdashboard/Saved'
import Requests from './pages/userdashboard/Requests'
import Friends from './pages/userdashboard/Friends'
import Recomandations from './pages/userdashboard/Recomandations'
import Upgrade from './pages/userdashboard/Upgrade'
import Success from './pages/userdashboard/Success'



function App() {
  return (
    <div className="App">
      <div className=" App flex flex-row h-screen w-full bg-slate-200">
            <Router>
              <Routes>
              <Route path='/' element={<LoginLayout/>}>
                    <Route index element={<Login/>} />
                    <Route path='register' element={<Register/>} />
                    <Route path='login' element={<Login/>} />
                    
                </Route>
                
                <Route path='/admin' element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path='orders' element={<Orders/>} />
                    <Route path='dashboard' element={<Dashboard/>} />
                    <Route path='user' element={<Users/>} />
                    <Route path='transactions' element={<Transactions/>} />
                    <Route path='feedback' element={<Feedback/>} />
                </Route>
                
                <Route path='/general' element={<UserLayout/>}>
                    <Route index element={<General/>} />
                    <Route path='general' element={<General/>} />
                    <Route path='contact' element={<ContactInfo/>} />
                    <Route path='education' element={<Educational/>} />
                    <Route path='life' element={<LifeStyle/>} />
                    <Route path='family' element={<Family/>} />
                    <Route path='preferences' element={<Family/>} /> 
                    <Route path='profession' element={<Profession/>} />
                </Route>

                <Route path='/user' element={<BaseLayout/>}> 
                    <Route index element={<BasicInfo/>} />
                    <Route path='base' element={<BasicInfo/>} />
                    <Route path='employ' element={<EmployerInfo/>} />
                    <Route path='jobseeker' element={<Jobseeker/>} />
                    <Route path='relation' element={<Relationship/>} />
                </Route>

                <Route path='/matrimony' element={<BaseLayout/>}> 
                    <Route index element={<MatriInfo/>} />
                    <Route path='general' element={<MatriInfo/>} />
                    <Route path='family' element={<Family/>} />
                    <Route path='preference' element={<Preference/>} />
                    
                </Route>
                <Route path='/dashboard' element={<DashboardLayout/>}> 
                  <Route index element={<UserList/>} />
                  <Route path='' element={<UserList/>} />
                  <Route path='saved' element={<Saved/>} />
                  <Route path='friends' element={<Friends/>} />
                  <Route path='requests' element={<Requests/>} />
                  <Route path='chats' element={<Recomandations/>} />
                  <Route path='plus' element={<Upgrade/>} />
                  <Route path='payment' element={<Upgrade/>} />    
                </Route>

                <Route path='/payment' element={<Success/>}> 
                  <Route index element={<UserList/>} />
                  <Route path='' element={<UserList/>} /> 
                </Route>
                
              </Routes>
            </Router>
            
            
    </div>
    </div>
  );
}

export default App;
