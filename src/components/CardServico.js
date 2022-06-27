import React from "react";
import styled from "styled-components";

const CardsServico = styled.div`
    margin-top: 50px;
    border: solid 1px black;
    width: 300px;
    padding: 20px;
    text-align: left;
    padding-left: 25px;
    button {
        margin: 2px;
    }
`

export default class CardServico extends React.Component {
    render() {
        return(
            <CardsServico>
                    <p>Nome: Fotógrafo</p>
                    <p>Preço: R$ 750,00</p>
                    <p>11/07/2022</p>
                    <button>Ver Detalhes</button>
                    <button>Adicionar no Carrinho</button>
            </CardsServico>
        )
    }
}