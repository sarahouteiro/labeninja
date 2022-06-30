import React, { Component } from 'react'
import { DetalhesContainer } from './styles'

class DetalhesServico extends Component {
    state = {
        disabled: false
    }

    handleRenderFormasDePagamento = () => {
        const { servico} = this.props

        return servico.formaDePagamento.map((formaDePagamento) => {
            return <span>{formaDePagamento}</span>
        })
    } 

    handleFormatarPreco = (preco) => {
        return `R$ ${preco.toFixed(2).replace(".", ",")}`
    }

    handleAdicionarAoCarrinho = () => {
        const {adicionarAoCarrinho} = this.props

        this.setState({
            disabled: true
        })

        adicionarAoCarrinho()
        
    }

    render() {
        const { disabled } = this.state
        const { servico, voltarLista } = this.props

        return (
            <DetalhesContainer>
                <h1>{servico.titulo}</h1>
                <p>Aceita: {this.handleRenderFormasDePagamento()}</p>
                <p>Até {servico.prazo} por <b>{this.handleFormatarPreco(servico.preco)}</b></p>
                <p>{servico.descricao}</p>
                <button className= {`${disabled ? "disabled" :""}`} onClick={this.handleAdicionarAoCarrinho} disabled={disabled}>Adicionar ao carinho</button>
                <button type='' onClick={voltarLista}>Voltar para lista</button>
            </DetalhesContainer>
        )
    }
}

export default DetalhesServico;