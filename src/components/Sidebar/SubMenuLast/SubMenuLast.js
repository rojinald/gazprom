import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './SubMenuLast.module.css'


const SubMenuLast = ({ item }) => {
   const [subnav, setSubnav] = useState(false)
   const showSubnav = () => setSubnav(!subnav)




   return <>

      <div className={s.sub_menu_items}>
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
         {subnav && item.subNavLast.map((item, index) => {
            return <Link id={s.sub_menu_item_margin} to={item.path} key={index}  >
               <div className={s.sub_menu_item}>
                  <div className={s.sub_menu_item_title}>
                     {item.title}
                  </div>
               </div>
            </Link>
         })}




      </div>
   </>
}

export default SubMenuLast