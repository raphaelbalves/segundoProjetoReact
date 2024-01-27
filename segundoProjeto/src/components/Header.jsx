import React from 'react'
import style from './Header.module.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className={style.cabecalho}>
        <img src={logo}/>
        <strong>Hello world</strong>
    </header>
  )
}

export default Header