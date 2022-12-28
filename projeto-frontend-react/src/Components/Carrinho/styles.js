import styled from "styled-components";


export const Card = styled.div`
    display: grid;
    border: 1px solid black;
    margin: 15px;
    width: 20vw;
    height: 60vh;
    /* background-color: black; */
    background-image: url("https://getoutside.ordnancesurvey.co.uk/site/uploads/images/2018champs/Blog%20imagery/Dark_sky_locations_hero.jpg");
    background-size: cover;

    

`

export const Image = styled.img`

border-radius: 50%;
align-items: center;
justify-self: center;

`

export const Name = styled.h1`

color: white;
justify-self: center;
font-family: sans-serif;

`

export const Value = styled.div`

color: white;
font-family: sans-serif;
justify-self: center;

`

export const Button = styled.button`

height: 35px;
width: 150px;
margin: 20px;
justify-self: center;

`