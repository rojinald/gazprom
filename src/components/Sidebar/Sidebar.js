import React from "react";
import { useSelector } from "react-redux";
import s from './Sidebar.module.css'

import SubMenu from "./SubMenu/Submenu";

const Sidebar = () => {
    const item = useSelector(state => state.sidebarData)
    return (
        <div className={s.submenu_main}>
            {item.map((item, index) => {
                return <SubMenu item={item} key={index} />
            })}

        </div>
    )

}


export default Sidebar
