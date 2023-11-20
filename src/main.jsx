import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './pages/indexPage.jsx'
import {Layout} from './components/layout.jsx'
import {ContactPage}  from './pages/contactPage.jsx'
import { LoginPage } from './pages/loginPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route element={<Layout/>}>
            <Route path='/' element={<IndexPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
