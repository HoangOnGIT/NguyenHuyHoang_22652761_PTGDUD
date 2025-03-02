import { useState } from 'react'
import './App.css'
import Logo from './component/Logo'
import AppNav from './component/AppNav'
import Profile from './component/Profile'
import Filter from './component/Filter'

function App() {
  return (
    <>
      <div class="container">
        <div class="header" id='flex-container'>
          <Logo />
          <AppNav />
          <Profile />
        </div>
        <div class="menu" style={{color:'black'}}>
            <Filter />
        </div>
        <div class="content">

        </div>
        <div class="footer"></div>
      </div>
    </>
  )
}

export default App
