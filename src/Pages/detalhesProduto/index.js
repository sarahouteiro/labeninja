import React, { Component } from 'react'
import { DetalhesContainer } from './styles'

class DetalheProduto extends Component {

    handleRenderFormasPagamento = () => {
        const { produto } = this.props

        const formasDePagamento = produto.formasPagamento.map((formaPagamento, index) => {
            return <span key={index}>{formaPagamento}</span>
        })

        return formasDePagamento
    }

    handleFormatarPreco = (preco) => {
        return `R$ ${preco.toFixed(2).replace(".", ",")}`
    }

    handleAdicionarAoCarrinho = (id) => {
        console.log("id",id)
    }

    render() {
        const { produto, voltar } = this.props

        return (
            <DetalhesContainer>
                <h1>{produto.titulo}</h1>
                <p>Aceita: {this.handleRenderFormasPagamento()}</p>
                <p>Até {produto.prazo} por {this.handleFormatarPreco(produto.preco)}</p>
                <p>{produto.descricao}</p>
                <button type='' onClick={() => this.handleAdicionarAoCarrinho(produto.id)}>ADICIONAR AO CARRINHO</button>
                <button type='' onClick={voltar}>VOLTAR PARA LISTA</button>
            </DetalhesContainer>
        )
    }
}

export default DetalheProduto;