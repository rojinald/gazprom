import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenuLast from '../SubMenuLast/SubMenuLast'
import s from './SubMenuSecond.module.css'



const SubMenuSecond = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)

   return <>
      <div className={s.sub_menu_item} onClick={item.subNavLast && showSubnav}>
         <div className={s.sub_menu_item_icon}>
            {item.subNavLast && subnav
               ? item.iconOpened
               : item.subNavLast
                  ? item.iconClosed
                  : null}
         </div>
         <Link to={'/products/' + item.path} className={s.sub_menu_item_title}>{item.title}</Link>
      </div>
      {
         subnav && item.subNavLast.map((item, index) => {
            return <SubMenuLast item={item} key={index} />
         })
      }
   </>
}

export default SubMenuSecond


