import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContextMenu from '../../../Context/ContextMenu'
import s from './SubMenuLast.module.css'



const SubMenuLast = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)
 
   const [x, setX] = useState(0)
   const [y, setY] = useState(0)
   const [showMenu, setShowMenu] = useState(false)

   const handleContextMenu = (e) => {
      e.preventDefault()
      e.pageX + 150 > window.innerWidth ? setX(`${window.innerWidth - 180}px`) : setX(e.pageX)
      e.pageY + 200 > window.innerHeight ? setY(`${window.innerHeight - 230}px`) : setY(e.pageY)
      setShowMenu(true)
   
   }

   const handleClick = () => {
      showMenu && setShowMenu(false)
   }





   return  <div className={s.sub_menu_items}>
         <ContextMenu x={x} y={y} showMenu={showMenu} />
         <Link to={item.path} onClick={item.subNavLast && showSubnav} onContextMenu={handleContextMenu} onClick={handleClick}>
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


