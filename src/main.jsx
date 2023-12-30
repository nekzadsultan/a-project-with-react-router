import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github ,{githubInfoLoader} from './components/Github/Github'
import Notfound from './components/Notfound'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element ={<Home />} />
      <Route path='about' element ={<About/>} />
      <Route path='contact' element ={<Contact/>} />
      <Route path = "user/"  element = {<User />} >
        <Route path=":userId" element = {<User />} />
      </Route>
      <Route
       loader={githubInfoLoader}
       path = "github" 
       element = { <Github/> } 
        />
      <Route path="*"  element = { <Notfound />}/>
    </Route>
  )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
