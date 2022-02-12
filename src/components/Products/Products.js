import React from "react";
import { useSelector } from "react-redux";
import ProductItems from "./ProductItem/ProductItem";
import s from './Products.module.css'

const Products = () => {
    const products = useSelector(state => state.products)

    return <div className={s.products}>
       <h1>Продукция</h1>
       <div className={s.products_row}>
         <div className={s.row_id}>ID</div> 
         <div className={s.row__title}>Наименование</div> 
         </div>
      { products.map((p) => <ProductItems title={p.title} id={p.id} key={p.id}/>)}
    </div>
} 

export default Products