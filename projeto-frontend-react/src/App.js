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
background-image: url("https://static6.depositphotos.com/1053932/550/i/600/depositphotos_5508416-stock-photo-aged-wood-texture-gray-background.jpg"); 
background-size: cover;
/* background-color: #545454; */

`

function App() {

  const [pesquisa, setPesquisa] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [minimo, setMinimo] = useState("");
  const [maximo, setMaximo] = useState("");
  const [productsCart, setProductsCart] = useState([])

  console.log(productsCart)
 
  const onAddProductToCart = (productId) => {
    const productInCart = productsCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = productsCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      setProductsCart(newProductsInCart)
    } else {
      const productToAdd = destinos.find(product => productId === product.id)

      const newProductsInCart = [...productsCart, {...productToAdd, quantity: 1}]

      setProductsCart(newProductsInCart)
    }
  }

  const onRemoveProductFromCart = (productId) => {
    const newProductsInCart = productsCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    setProductsCart(newProductsInCart)
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
      <Carrinho productsCart={productsCart} onRemoveProductFromCart={onRemoveProductFromCart} />
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
            return (<Cards planeta={planeta} onAddProductToCart={onAddProductToCart}/>)
          })}
      </CardsContainer>
      <Footer />
    </div>
  );
}

export default App;
