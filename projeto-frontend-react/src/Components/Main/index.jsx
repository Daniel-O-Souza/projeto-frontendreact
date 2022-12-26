import React from "react";
import {Card, Image, Name, Value, Button} from "./styles"




export default function Main() {


    const destinos = [
        { id: 1, name: "Lua", value: 1000000.00, imageUrl: "https://img.freepik.com/fotos-gratis/closeup-tiro-da-lua-isolado-em-um-fundo-preto-otimo-para-artigos-sobre-espaco_181624-8407.jpg?auto=format&h=200" },
        { id: 2, name: "Mercúrio", value: 2000000.00, imageUrl: "https://static.vecteezy.com/ti/vetor-gratis/t2/10995397-aviao-realista-de-mercurio-vetor.jpg" },
        { id: 3, name: "Vênus", value: 1500000.00, imageUrl: "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/132/2020/09/14150933/Venus-200x200.jpg" },
        { id: 4, name: "Marte", value: 1500000.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mars_without_Fastie_finger.png/200px-Mars_without_Fastie_finger.png" },
        { id: 5, name: "Júpiter", value: 2500000.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Jupiter%E2%80%99s_Colourful_Palette.tif/lossy-page1-200px-Jupiter%E2%80%99s_Colourful_Palette.tif.jpg" },
        { id: 6, name: "Saturno", value: 3000000.00, imageUrl: "https://cdn.sci.esa.int/sci-images/44/ACFYMA99aWYv.jpg" },
        { id: 7, name: "Urano", value: 3500000.00, imageUrl: "https://sites.google.com/site/astronimia/_/rsrc/1468758251357/urano/images.jpeg?height=200&width=200" },
        { id: 8, name: "Netuno", value: 4000000.00, imageUrl: "https://www.sobiologia.com.br/figuras/Universo/netuno.jpg" }
    ]

    const produtos = destinos.map((planeta) => {
        return <Card>

            <Image src={planeta.imageUrl} alt="imagem" />
            <Name>{planeta.name}</Name>
            <Value>R$ {planeta.value},00</Value>
            <Button>Adicionar ao carrinho</Button>

        </Card>
    })

    return (

        <div>
            {produtos}
        </div>


    )

}