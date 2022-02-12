import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContextMenu from '../../../Context/ContextMenu'
import UserRightClickMenu from '../../../Context/userRightClickMenu/userRightClickMenu'
import s from './SubMenuLast.module.css'



const SubMenuLast = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)
   const {x,y,showMenu} = UserRightClickMenu()


   return  <div className={s.sub_menu_items}>
         <ContextMenu x={x} y={y} showMenu={showMenu} />
         <Link to={item.path} onClick={item.subNavLast && showSubnav}>
            <div className={s.sub_menu_item}>
               <div className={s.sub_menu_item_icon}>
                  {item.subNavLast && subnav
                     ? item.iconOpened
                     : item.subNavLast
                        ? item.iconClosed
                        : null}
               </div>
               <div className={s.sub_menu_item_title}>{item.title}</div>
            </div>
         </Link>

      </div>
}

export default SubMenuLast


