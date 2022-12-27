import React from "react";
import { Rodape, Image, Icons, Autor} from "./styles";



export default function Footer () {

    return (

        <Rodape>
            <Autor>Projeto de Front-End/React desenvolvido por Daniel de Oliveira para o curso Labenu</Autor>
           <div>
           <Icons href="https://github.com/Daniel-O-Souza" target={"_blank"}> <Image src="https://img.freepik.com/free-icon/github_318-698188.jpg?auto=format&h=200" alt="Github" /> </Icons>
            <Icons href="https://br.linkedin.com/in/daniel-de-oliveira-souza-395662136" target={"_blank"}> <Image src="https://logoeps.com/wp-content/uploads/2014/07/linkedin-icon-vector.png" alt="LinkedIn" /> </Icons>
            <Icons href="https://www.facebook.com/daniel.deoliveira.9803" target={"_blank"}> <Image src="https://freepngimg.com/thumb/facebook/73463-icons-computer-facebook-signature-email-block-thumb.png" alt="Facebook" /> </Icons>
           </div>  
        </Rodape>
    )

}