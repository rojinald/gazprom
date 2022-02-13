import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import s from './Submenu.module.css'
import SubMenuSecond from './SubMenuSecond/SubMenuSecond'


const SubMenu = ({ item }) => {

   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)

   return <div className={s.sub_menu}>
      <div className={s.sub_menu_item} onClick={item.subNav && showSubnav}>
         <div className={s.sub_menu_item_icon}>
            {item.subNav && subnav
               ? item.iconOpened
               : item.subNav
                  ? item.iconClosed
                  : null}
         </div>
         <Link to={item.path} className={s.sub_menu_item_title}>
            {item.title}
         </Link>
      </div >
      {
         subnav && item.subNav.map((item, index) => {
            return <SubMenuSecond item={item} key={index} />
         })
      }
   </div >

}

export default SubMenu