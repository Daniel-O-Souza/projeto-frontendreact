import React from "react";
import { Card, Image, Name, Value, Button } from "./styles"

export default function Cards(props) {

    return (

        <Card>

            <Image src={props.planeta.imageUrl} alt="imagem" />
            <Name>{props.planeta.name}</Name>
            <Value>R$ {props.planeta.value},00</Value>
            <Button onClick={() => props.onAddProductToCart(props.planeta.id)} >Adicionar ao carrinho</Button>

        </Card>

    )

}