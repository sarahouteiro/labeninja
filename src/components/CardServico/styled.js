import styled from "styled-components";

export const CardsServico = styled.div`
    margin: 20px;
    border: solid 1px #7c65ab;
    border-radius: 10px;
    background-color: #f5f4fb;
    width: 300px;
    padding: 20px;
    text-align: left;
    color: #7c65ab;
    text-align: center;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    button {
        height: 30px;
        border: solid 1px #7c65ab;
        border-radius: 10px;
        background-color: #7c65ab;
        color: white;
        margin-top: 10px;
        margin-left: 10px;
        text-align: center; 
        cursor: pointer; 
        transition: all 0.5s ease-in-out;
        &:hover {
            background-color: #494949;
        }
    }
`