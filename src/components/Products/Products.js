import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarTop from "../NavbarTop/NavbarTop";
import ProductItems from "./ProductItem/ProductItem";
import s from './Products.module.css'

const Products = () => {
    const products = useSelector(state => state.products)


    return <> <h1>Продукция</h1>
    <table className={s.products}>
         <thead className={s.products__block}>
         <th className={s.products__products__block_id} >ID</th>
         <th >Наименование</th>
           </thead> 
        
         <tbody className={s.products_items} >
         { products.map((p) => <ProductItems title={p.title} id={p.id} key={p.id}/>)}
         </tbody>
    
    </table>
    </>
} 

export default Products