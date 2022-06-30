import React from "react";
import { CardsServico } from "./styled";

export default class CardServico extends React.Component {
    handleAdicionarAoCarrinho = async () => {
        const {adicionarAoCarrinho, servico} = this.props

        const confirmation = window.confirm("Quer adicionar esse serviço ao carrinho?");

        if(!confirmation) return;

        await this.handleTrocarStatus(servico.id, true)

        adicionarAoCarrinho()
        
    }

    render() {
        const day = new Date(this.props.jobInfos.dueDate).getDay()
        const month = new Date(this.props.jobInfos.dueDate).getMonth()
        const year = new Date(this.props.jobInfos.dueDate).getFullYear()
        const { verDetalhes } = this.props

        return(
            <CardsServico>
                    <p>{this.props.jobInfos.title}</p>
                    <p>R${this.props.jobInfos.price.toFixed(2)}</p>
                    <p>{day}/{month}/{year}</p>
                    <button onClick={verDetalhes}>Ver Detalhes</button>
                    <button onClick={() => this.handleAdicionarAoCarrinho()} >Adicionar no Carrinho</button>
            </CardsServico>
        )
    }
}