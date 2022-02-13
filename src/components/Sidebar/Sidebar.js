import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContextMenu from "../Context/ContextMenu";
import s from './Sidebar.module.css'

import SubMenu from "./SubMenu/Submenu";
let isPath = ''
const Sidebar = () => {
    const item = useSelector(state => state.sidebarData)

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [showMenu, setShowMenu] = useState(false)




    const handleContextMenu = (e) => {
        e.preventDefault()
        e.pageX + 150 > window.innerWidth ? setX(`${window.innerWidth - 180}px`) : setX(e.pageX)
        e.pageY + 200 > window.innerHeight ? setY(`${window.innerHeight - 230}px`) : setY(e.pageY)
        setShowMenu(true)
        isPath = e.target.getAttribute('href')
    }

    const handleClick = () => {
        showMenu && setShowMenu(false)
    }


    return (
        <div className={s.submenu_main} onContextMenu={handleContextMenu} onClick={handleClick} >
            <ContextMenu x={x} y={y} showMenu={showMenu} isPath={isPath} />
            {item.map((item, index) => {
                return <SubMenu item={item} key={index} />
            })}

        </div>
    )

}


export default Sidebar
