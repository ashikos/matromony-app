import React from 'react'
import { Routes, BrowserRouter as Router, Route, } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Feedback from './pages/Feedback'
import Transactions from './pages/Transactions'
import Users from './pages/Users'


function App() {
  return (
    <div className="App">
      <div className=" App flex flex-row h-screen w-full bg-slate-200">
            <Router>
              <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path='orders' element={<Orders/>} />
                    <Route path='dashboard' element={<Dashboard/>} />
                    <Route path='user' element={<Users/>} />
                    <Route path='transactions' element={<Transactions/>} />
                    <Route path='feedback' element={<Feedback/>} />
                </Route>
              </Routes>
            </Router>
            
            
    </div>
    </div>
  );
}

export default App;
