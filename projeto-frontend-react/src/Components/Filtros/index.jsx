import React from "react";
import { Container } from "./styles";

export default function Filtros(props) {

    const handlePesquisa = (e) => {
        props.setPesquisa(e.target.value)
    }

    const handleOrdenar = (e) => {
        props.setOrdenar(e.target.value)
    }

    const handleMinimo = (e) => {
        props.setMinimo(e.target.value)
    }

    const handleMaximo = (e) => {
        props.setMaximo(e.target.value)
    }

    return (

        <Container>

            <input
                type="text"
                placeholder="Buscar por nome"
                onChange={handlePesquisa}
                value={props.pesquisa}
            />

            <select
                onChange={handleOrdenar}
                value={props.ordenar}
            >
                <option value="">Ordenar por preço</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
            </select>

            <select
                onChange={handleMinimo}
                value={props.minimo}
            >
                <option value="">Filtrar por valor mínimo</option>
                <option value="1000000.00">1000000.00</option>
                <option value="1500000.00">1500000.00</option>
                <option value="2000000.00">2000000.00</option>
                <option value="2500000.00">2500000.00</option>
                <option value="3000000.00">3000000.00</option>
                <option value="3500000.00">3500000.00</option>
                <option value="4000000.00">4000000.00</option>
                <option value="4500000.00">4500000.00</option>
            </select>

            <select
                onChange={handleMaximo}
                value={props.maximo}
            >
                <option value="">Filtrar por valor máximo</option>
                <option value="1000000.00">1000000.00</option>
                <option value="1500000.00">1500000.00</option>
                <option value="2000000.00">2000000.00</option>
                <option value="2500000.00">2500000.00</option>
                <option value="3000000.00">3000000.00</option>
                <option value="3500000.00">3500000.00</option>
                <option value="4000000.00">4000000.00</option>
                <option value="4500000.00">4500000.00</option>
            </select>

        </Container>

    )

}