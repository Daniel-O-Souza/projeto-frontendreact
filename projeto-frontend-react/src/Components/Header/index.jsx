import React from "react";
import { Cabecalho, Lema, Titulo, Botao, Logo } from "./styles";

export default function Header(props) {

    return (

        <Cabecalho>
            <Logo onClick={() => props.changePage("homepage")} src="https://images.vexels.com/media/users/3/224259/isolated/preview/fc9b6a2f5c2eac161b8556ad288f3995-logotipo-da-silhueta-da-nave-espacial.png" alt="logo" />
            <Titulo>SPACE REX</Titulo>
            <Lema>A maior agência de viagens interplanetárias do universo! </Lema>
            <div>
                <Botao onClick={() => props.changePage("homepage")}>Continuar comprando</Botao>
                <Botao onClick={() => props.changePage("carrinho")} >Meu carrinho</Botao>
            </div>
        </Cabecalho>
    )
}
