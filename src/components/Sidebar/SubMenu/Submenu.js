import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenuLast from '../SubMenuLast/SubMenuLast'
import s from './Submenu.module.css'


const SubMenu = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)

   return <div className={s.sub_menu}>

      <Link to={item.path} onClick={item.subNav && showSubnav}>
         <div className={s.sub_menu_item} >
            <div className={s.sub_menu_item_icon}>
               {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav
                     ? item.iconClosed
                     : null}
            </div>
            <div className={s.sub_menu_item_title}>
               {item.title}
            </div>

         </div>
      </Link>


      {
         subnav && item.subNav.map((item, index) => {
            return <SubMenuLast item={item} key={index} />
         })
      }




   </div >

}

export default SubMenu