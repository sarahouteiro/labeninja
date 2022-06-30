import styled from "styled-components";

export const CardsServico = styled.div`
    margin: 20px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #f5f4fb;
    width: 300px;
    padding: 20px;
    text-align: left;
    color: #7c65ab;
    text-align: center;
    font-size: 18px;
    box-shadow: 2px 2px 15px #ccc;
    button {
        height: 30px;
        border: solid 1px #7c65ab;
        border-radius: 5px;
        background-color: #7c65ab;
        color: white;
        margin-top: 10px;
        margin-left: 10px;
        text-align: center; 
        padding: 0px 10px;
        cursor: pointer; 
        transition: all 0.5s ease-in-out;
        &:hover {
            box-shadow: 2px 2px 15px #ccc;
            background-color: #544985;
        }
    }
`