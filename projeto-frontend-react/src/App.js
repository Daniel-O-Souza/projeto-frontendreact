import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import Header from "./Components/Header";
import Filtros from "./Components/Filtros";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import destinos from "./destinos/destinos.json"
import Carrinho from "./Components/Carrinho";
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
/* background-image: url("https://getoutside.ordnancesurvey.co.uk/site/uploads/images/2018champs/Blog%20imagery/Dark_sky_locations_hero.jpg"); */
/* background-size: cover; */
background-color: #545454;

`

function App() {

  const [pesquisa, setPesquisa] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [minimo, setMinimo] = useState("");
  const [maximo, setMaximo] = useState("");
  const [productsCart, setProductsCart] = useState([])

  console.log(productsCart)
 
  // const onAddProductToCart = (productId) => {
  //   const productInCart = productsCart.find(product => productId === product.id)

  //   if(productInCart) {
  //     const newProductsInCart = productsCart.map(product => {
  //       if(productId === product.id) {
  //         return {
  //           ...product,
  //           quantity: product.quantity + 1
  //         }
  //       }

  //       return product
  //     })

  //     setProductsCart({productsCart: newProductsInCart})
  //   } else {
  //     const productToAdd = destinos.find(product => productId === product.id)

  //     const newProductsInCart = [productsCart, {...productToAdd, quantity: 1}]

  //     setProductsCart({productsCart: newProductsInCart})
  //   }
  // }


  function addProductsToCart(id){

  const copyProductsToCart = [...productsCart]

  const item = copyProductsToCart.find((product) => product.id === id)

  if(!item){
    copyProductsToCart.push({id: id, quantidade: 1})
  }else{
    item.quantidade = item.quantidade+1
  }

  setProductsCart(copyProductsToCart)

}

function removeProductsToCart(id){

  const copyProductsToCart = [...productsCart]

  const item = copyProductsToCart.find((product) => product.id === id)

  if(item && item.quantidade > 1){
    item.quantidade = item.quantidade - 1
    setProductsCart(copyProductsToCart)
  }else{
    const arrayFiltered = copyProductsToCart.filter((product)=> product.id !== id)

    setProductsCart(arrayFiltered)
  }

}

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
      />
      <Carrinho productsCart={productsCart} removeProductsToCart={removeProductsToCart} />
      <CardsContainer>
        {destinos.filter((planeta) => {
          return planeta.name.toLowerCase().includes(pesquisa.toLowerCase());
        })
          .filter((planeta) => {
            return (minimo ? planeta.value >= minimo : true)
          })
          .filter((planeta) => {
            return (maximo ? planeta.value <= maximo : true)
          })
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
            return (<Cards planeta={planeta} addProductsToCart={addProductsToCart}/>)
          })}
      </CardsContainer>
      <Footer />
    </div>
  );
}

export default App;
