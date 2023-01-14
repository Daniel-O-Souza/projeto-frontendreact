import styled from "styled-components";

export const Card = styled.div`

    display: grid;
    border: 1px solid black;
    margin: 15px;
    width: 20vw;
    height: 60vh;
    background-image: url("https://getoutside.ordnancesurvey.co.uk/site/uploads/images/2018champs/Blog%20imagery/Dark_sky_locations_hero.jpg");
    background-size: cover;  
    box-shadow: 1px 1px 4px 4px rgb(191, 191, 191);

`

export const Photo = styled.img`

    border-radius: 50%;
    align-items: center;
    justify-self: center;

`

export const Name = styled.h1`

    color: white;
    justify-self: center;
    font-family: sans-serif;
    text-shadow: 1px 1px 2px black;

`

export const Value = styled.div`

    color: white;
    font-family: sans-serif;
    justify-self: center;
    text-shadow: 1px 1px 2px black;


`

export const Button = styled.button`

    height: 35px;
    width: 150px;
    margin: 20px;
    justify-self: center;
    background-image: url("https://plainbackground.com/plain1024/da680f.png");    background-size: cover;
    font-family: sans-serif;
    border-radius: 8px;
    transition: transform .3s;
    box-shadow: 1px 1px 4px rgb(191, 191, 191);
    color: white;
    text-shadow: 1px 1px 2px black;

`

