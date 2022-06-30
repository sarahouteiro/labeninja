import React from "react";
import { CardsServico } from "./styled";

export default class CardServico extends React.Component {
    render() {
        const day = new Date(this.props.jobInfos.dueDate).getDay()
        const month = new Date(this.props.jobInfos.dueDate).getMonth()
        const year = new Date(this.props.jobInfos.dueDate).getFullYear()
        return(
            <CardsServico>
                    <p>{this.props.jobInfos.title}</p>
                    <p>R${this.props.jobInfos.price.toFixed(2)}</p>
                    <p>{day}/{month}/{year}</p>
                    <button>Ver Detalhes</button>
                    <button>Adicionar no Carrinho</button>
            </CardsServico>
        )
    }
}