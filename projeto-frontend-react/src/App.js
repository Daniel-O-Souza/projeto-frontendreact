import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import Header from "./Components/Header";
import Filtros from "./Components/Filtros";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import destinos from "./destinos/destinos.json"
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

}
`
const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
justify-items: center;
background-image: url("https://getoutside.ordnancesurvey.co.uk/site/uploads/images/2018champs/Blog%20imagery/Dark_sky_locations_hero.jpg");
/* background-size: cover; */

`

function App() {

  const [pesquisa, setPesquisa] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [minimo, setMinimo] = useState("");
  const [maximo, setMaximo] = useState("");
  // const [filtro, setFiltro] = useState("");
  // const [valor, setValor] = useState("")


  return (
    <div>
      <Header />
      <Filtros
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        ordenar={ordenar}
        setOrdenar={setOrdenar}
        minimo={minimo}
        setMinimo={setMinimo}
        maximo={maximo}
        setMaximo={setMaximo}
        // filtro={filtro}
        // setFiltro={setFiltro}
        // valor={valor}
        // setValor={setValor}
      />
      <CardsContainer>
        {destinos.filter((planeta) => {
          return planeta.name.toLowerCase().includes(pesquisa.toLowerCase());
        })

        // .filter((planeta) =>{
        //   if (filtro === "Valor máximo") {
        //     return planeta.value <= valor
        //   }else if (filtro === "Valor mínimo") {
        //     return planeta.value >= valor
        //   }
          
        // })
        
          .filter((planeta) => {
            if (planeta.value >= minimo) {
              return planeta;
            }
          })

          // .filter((planeta) => {
          //   if (planeta.value <= maximo) {
          //     return planeta;
          //   }
          // })
          
          .sort((a, b) => {
            if (ordenar === 'Crescente') {
              return (a.value < b.value) ? -1 : 1
            }
            if (ordenar === 'Decrescente') {
              return (a.value < b.value) ? 1 : -1
            }
            return 0;
          })
          .map((planeta) => {
            return (<Cards planeta={planeta} />)
          })}
      </CardsContainer>
      <Footer />
    </div>
  );
}

export default App;
