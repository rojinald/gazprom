import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';


const iconOpened = <MdKeyboardArrowDown style={{ height: '15px', width: '15', margin: '2px 0 0 0 ' }} />
const iconClosed = <MdKeyboardArrowRight style={{ height: '15px', width: '15', margin: '2px 0 0 0 ' }} />

const initialState = [
   {
      title: 'Дочерние Компании',
      path: '/*',
      iconOpened: iconOpened,
      iconClosed: iconClosed,
      icon: iconClosed,

      subNav: [
         {
            title: 'Оренбург',
            path: 'orenburg',
            iconOpened: iconOpened,
            iconClosed: iconClosed,

            subNavLast: [
               {
                  title: 'Центральная',
                  path: '#',
                  iconOpened: iconOpened,
                  iconClosed: iconClosed,
               }

            ]
         }

      ],
   }
]





const sidebarData = (state = initialState,action) =>  {
    switch(action.type){
        default :
        return state
    }
}



export default sidebarData