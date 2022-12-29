import React from "react";
import ItemDeCarrinho from "../ItemDeCarrinho";
import { Container, Title } from "./styles";




export default function Carrinho(props) {

    const totalValue = () => {
        let total = 0

        for (let product of props.productsCart) {
            total += props.planeta.value * props.planeta.quantity
        }

        return total
    }

    return (
        <div>
            <p> <Title>Meu Carrinho</Title></p>
            <Container>
                {props.productsCart.map((planeta) => {
                    return <ItemDeCarrinho planeta={planeta} onRemoveProductFromCart={props.onRemoveProductFromCart} productsCart={props.productsCart} />
                })}
                
            </Container>
            
        </div>



    )

}