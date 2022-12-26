import React from "react";
import { Rodape, Image} from "./styles";



export default function Footer () {

    return (

        <Rodape>
            <a href="https://github.com/Daniel-O-Souza" target={"_blank"}> <Image src="https://img.freepik.com/free-icon/github_318-698188.jpg?auto=format&h=200" alt="Github" /> </a>
            <a href="https://br.linkedin.com/in/daniel-de-oliveira-souza-395662136" target={"_blank"}> <Image src="https://logoeps.com/wp-content/uploads/2014/07/linkedin-icon-vector.png" alt="LinkedIn" /> </a>
            <a href="https://www.facebook.com/daniel.deoliveira.9803" target={"_blank"}> <Image src="https://freepngimg.com/thumb/facebook/73463-icons-computer-facebook-signature-email-block-thumb.png" alt="Facebook" /> </a>
        </Rodape>
    )

}