import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    border: 1px solid black;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
    background-image: url("https://img.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg?w=360"); 
    background-size: cover;
    min-height: 50vh;

`

export const Title = styled.h2`

    font-family: sans-serif;
    justify-content: center;
    margin-left: 16px;
    color: white;
    text-shadow: 1px 1px 2px black;

   

`

export const Titlebox = styled.div`

    background-color: white;
    border: 1px solid black;
    background-image: url("https://plainbackground.com/plain1024/da680f.png");
    background-size: cover;

`

export const ValorTotal = styled.h2`

    font-family: sans-serif;
    justify-content: center;
    margin-left: 16px;
    color: white;
    text-shadow: 1px 1px 2px black;

`

export const Card = styled.div`

    display: grid;
    border: 1px solid black;
    margin: 15px;
    width: 10vw;
    height: 30vh;
    background-image: url("https://getoutside.ordnancesurvey.co.uk/site/uploads/images/2018champs/Blog%20imagery/Dark_sky_locations_hero.jpg");
    background-size: cover;  
    box-shadow: 1px 1px 4px 4px rgb(191, 191, 191);
 
`

export const Image = styled.img`

    border-radius: 50%;
    align-items: center;
    justify-self: center;
    width: 30%;

`

export const Name = styled.div`

    color: white;
    justify-self: center;
    font-family: sans-serif;

`

export const Value = styled.div`

    color: white;
    font-family: sans-serif;
    justify-self: center;

`

export const Quantidade = styled.p`

    color: white;
    font-family: sans-serif;
    justify-self: center;

`

export const Remover = styled.button`

    height: 35px;
    width: 100px;
    justify-self: center;
    background-image: url("https://plainbackground.com/plain1024/da680f.png");    background-size: cover;
    font-family: sans-serif;
    transition: transform .3s;
    border-radius: 8px;
    transition: transform .3s;
    box-shadow: 1px 1px 4px rgb(191, 191, 191);
    color: white;
    text-shadow: 1px 1px 2px black;

`
