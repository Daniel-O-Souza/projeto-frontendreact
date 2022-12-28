import React from "react";





export default function ItemDeCarrinho(props) {


    return (

        <div>
            <p>{props.planeta.quantidade}</p>
            <p>{props.planeta.value}</p>
            <button onClick={()=>props.removeProductsToCart(props.planeta.id)} >Remover</button>

        </div>


    )

}