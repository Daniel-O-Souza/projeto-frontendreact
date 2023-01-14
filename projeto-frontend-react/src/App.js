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
  border: 1px solid black;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
  background-image: url("https://img.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg?w=360"); 
  background-size: cover;

`

function App() {

  const [pesquisa, setPesquisa] = useState("");
  const [ordenar, setOrdenar] = useState("");
  const [minimo, setMinimo] = useState("");
  const [maximo, setMaximo] = useState("");
  const [productsCart, setProductsCart] = useState([])
  const [page, setPage] = useState("homepage")

  const changePage = (page) => setPage(page)

  const onAddProductToCart = (productId) => {
    const productInCart = productsCart.find(product => productId === product.id)


    if (productInCart) {
      const newProductsInCart = productsCart.map(product => {
        if (productId === product.id) {
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

      const newProductsInCart = [...productsCart, { ...productToAdd, quantity: 1 }]

      setProductsCart(newProductsInCart)

      localStorage.setItem("compra", JSON.stringify(newProductsInCart))

    }
  }

  const onRemoveProductFromCart = (productId) => {
    const newProductsInCart = productsCart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    setProductsCart(newProductsInCart)
  }

  const renderPage = () => {

    switch (page) {
      case "homepage":
        return <div>
          <Header changePage={changePage} />
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
                return (<Cards planeta={planeta} onAddProductToCart={onAddProductToCart} />)
              })}
          </CardsContainer>
          <Footer />
        </div>

      case "carrinho":
        return <div>
          <Header changePage={changePage} />


          <Carrinho productsCart={productsCart} onRemoveProductFromCart={onRemoveProductFromCart} setProductsCart={setProductsCart} />
          <Footer />
        </div>
    }
  }


  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
