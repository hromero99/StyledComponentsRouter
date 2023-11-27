import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './pages/indexPage.jsx'
import {Layout} from './components/layout.jsx'
import {ContactPage}  from './pages/contactPage.jsx'
import { LoginPage } from './pages/loginPage.jsx'
import { RoomPage } from './pages/roomPage.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path="" element={<IndexPage/>}/>
            <Route path="room" element={<RoomPage/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
