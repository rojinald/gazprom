import React from "react";
import s from './ProductItem.module.css'
const ProductItems =(props) =>{
    return <div className={s.items}>
   <div className={s.item__block}>
   <div className={s.item__id} >{props.id} </div>
   <div className={s.item__title} > {props.title}</div>
    </div>
    </div>

}

export default ProductItems