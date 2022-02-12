import React from "react"
import { Link } from "react-router-dom";
import s from './Header.module.css'
import logo from './logoHead.svg'

const Headers = () => {
  return <header className={s.header}> <Link to="*">
    <img src={logo} /></Link></header>
}

export default Headers 