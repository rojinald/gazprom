import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './SubMenuLast.module.css'



const SubMenuLast = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)


   return <div className={s.sub_menu_item} onClick={item.subNavLast && showSubnav} >

      <div className={s.sub_menu_item_icon}>
         {item.subNavLast && subnav
            ? item.iconOpened
            : item.subNavLast
               ? item.iconClosed
               : null}
      </div>
      <Link to={item.path} className={s.sub_menu_item_title}>{item.title}</Link>
   </div>
}

export default SubMenuLast


