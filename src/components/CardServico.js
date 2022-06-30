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

    handleFormatarData = (data) => {
        const dividirDataEHorario = data.split("T");
        const dividirAnoMesDia = dividirDataEHorario[0].split("-");

        const ano = dividirAnoMesDia[0]
        const mes = dividirAnoMesDia[1]
        const dia = dividirAnoMesDia[2]

        return `${dia}/${mes}/${ano}`
    }

    render() {

        const { verDetalhes } = this.props
        
        return(
            <CardsServico>
                    <p>{this.props.jobInfos.title}</p>
                    <p>R${this.props.jobInfos.price.toFixed(2)}</p>
                    <p>{this.handleFormatarData(this.props.jobInfos.dueDate)}</p>
                    <button onClick={verDetalhes}>Ver Detalhes</button>
                    <button>Adicionar no Carrinho</button>
            </CardsServico>
        )
    }
}