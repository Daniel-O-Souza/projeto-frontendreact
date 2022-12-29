import React from "react";
import { Card, Image, Name, Value, Container, Quantidade } from "./styles";





export default function ItemDeCarrinho(props) {

    


    return (

        <Container>
            <Card>
                <Image src={props.planeta.imageUrl} alt="imagem" />
                <Name>{props.planeta.name}</Name>
                <Value>R${props.planeta.value},00</Value>
                <Quantidade>Quantidade:{props.planeta.quantity}</Quantidade>
                <button onClick={() => props.onRemoveProductFromCart(props.planeta.id)} >Remover</button>
            </Card>
            <p>R${props.planeta.value * props.planeta.quantity},00</p>
        </Container>



    )

}