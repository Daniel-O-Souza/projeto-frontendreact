import React from "react";
import { Container } from "./styles";



export default function Filtros() {

    return (

        <Container>

            <input
                type="text"
                placeholder="Buscar por nome"
            />

            <select>
                <option value="">Ordenar por preço</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
            </select>

            <select>
                <option value="">Filtrar por preço</option>
                <option value="Crescente">Maior preço</option>
                <option value="Decrescente">Menor preço</option>
            </select>

            <select>
                <option value="">Filtrar por nome</option>
                <option value="Crescente">A - Z</option>
                <option value="Decrescente">Z - A</option>
            </select>


        </Container>

    )

}