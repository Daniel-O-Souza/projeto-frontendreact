import { Container, Title, Titlebox, ValorTotal, Card, Image, Name, Value, Quantidade, Remover } from "./styles";
import { useEffect } from "react";

export default function Carrinho(props) {

  useEffect(() => {
    if (props.productsCart.length > 0) {
      const carrinho = JSON.stringify(props.productsCart)
      localStorage.setItem("compras", carrinho)
    }
  }, [props.productsCart])

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("compras"))
    if (novoCarrinho !== null) {
      props.setProductsCart(novoCarrinho)
    }
  }, [])

  const renderCarrinho = props.productsCart.map((planeta) => {
    return <Card>
      <Image src={planeta.imageUrl} alt="imagem" />
      <Name>{planeta.name}</Name>
      <Value>R${planeta.value},00</Value>
      <Quantidade>Quantidade:{planeta.quantity}</Quantidade>
      <Remover onClick={() => props.onRemoveProductFromCart(planeta.id)} >Remover</Remover>
    </Card>
  })

  const totalValue = () => {
    let total = 0

    for (let product of props.productsCart) {
      total += product.value * product.quantity
    }

    return total
  }

  return (
    <Titlebox>
      <Title>Meu Carrinho:</Title>
      <Container>
        {renderCarrinho}
      </Container>
      <ValorTotal>Valor total da minha
        compra: R${totalValue()},00</ValorTotal>
    </Titlebox>

  )

}