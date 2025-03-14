import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home.tsx'
import { Header } from './components/header/header.tsx'
import { Posts } from './components/Posts/Posts.tsx'
import { Redirect } from './components/Redirect/Redirect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='*' element={<h1>Not Found</h1>}></Route>
      <Route path='/posts/:id' element={<Posts/>}></Route>
      <Route path='/posts/:id/:slug' element={<Posts/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/redirect' element={<Redirect/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
