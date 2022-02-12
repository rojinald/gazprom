import React, { useState } from "react";
import {NavLink, useParams} from "react-router-dom";
import s from './NavbarTop.module.css'




const NavbarTop = () => {


    return <nav className={s.navtop}>
        <div className={s.menu}>
            <div className={s.menu__link}   >
                <NavLink  to="/products" className={({isActive}) => isActive ? s.link_effect : null} >Продкуция</NavLink>
            </div>
            <div className={s.menu__link}>
                <NavLink to="/aboutObject"className={({isActive}) => isActive ? s.link_effect : null}>Об объектах</NavLink>
            </div>
            <div className={s.menu__link}>
                <NavLink to="/company" className={({isActive}) => isActive ? s.link_effect : null}>Дочерние общества</NavLink>
            </div>
        </div>



    </nav >



}


export default NavbarTop