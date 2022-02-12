import React from "react";
import s from './ProductItem.module.css'


const ProductItems =(props) =>{
    return <>
    <tr className={s.item__block} >
  <td className={s.item__id} >  {props.id}</td>
  <td className={s.item__title}>  {props.title}</td>
  </tr>
    </>
}

export default ProductItems