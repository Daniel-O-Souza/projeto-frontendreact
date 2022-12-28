import React from "react";
import ItemDeCarrinho from "../ItemDeCarrinho";




export default function Carrinho(props) {


    return (

        <div>
            <h3>Meu Carrinho</h3>
            {props.productsCart.map((planeta)=>{
                return <ItemDeCarrinho planeta={planeta} removeProductsToCart={props.removeProductsToCart} />
            })}

        </div>


    )

}