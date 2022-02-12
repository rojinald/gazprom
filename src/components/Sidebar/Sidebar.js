import React, { useState } from "react";
import s from './Sidebar.module.css'
import { SidebarData } from "./SidebarData/SidebarData";
import SubMenu from "./SubMenu/Submenu";

const Sidebar = () => {

    return (
        <div className={s.submenu_main}>
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />
            })}

        </div>
    )

}


export default Sidebar
