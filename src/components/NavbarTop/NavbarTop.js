import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './NavbarTop.module.css'




const NavbarTop = () => {
    const [actliveLink, setActliveLink] = useState(0)
    return <nav className={s.navtop}>
        <div className={s.menu}>
            <div className={s.menu__link}   >
                <Link onBlur={() => setActliveLink(0)} to="/products" id={actliveLink === 1 ? s.link_effect : null} onClick={() => setActliveLink(1)} >Продкуция</Link>
            </div>
            <div className={s.menu__link}>
                <Link onBlur={() => setActliveLink(0)} to="/aboutObject" id={actliveLink === 2 ? s.link_effect : null} onClick={() => setActliveLink(2)} >Об объектах</Link>
            </div>
            <div className={s.menu__link}>
                <Link onBlur={() => setActliveLink(0)} to="/company" id={actliveLink === 3 ? s.link_effect : null} onClick={() => setActliveLink(3)} >Дочерние общества</Link>
            </div>
        </div>



    </nav >



}


export default NavbarTop