import React, { Component } from 'react'
import { DetalhesContainer } from './styles'
import axios from 'axios';

class DetalhesServico extends Component {
    handleChangeStatus = async (id) => {
        const body = {
            taken: true
        }
        
        await axios.post(`https://labeninjas.herokuapp.com/jobs/${id}`, body, {
            headers: {
                Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
            }
        })
    }

    handleRenderFormasDePagamento = () => {
        const { servico } = this.props

        return servico && servico.paymentMethods.map((paymentMethod, index) => {
            return <span key={index}>{paymentMethod}</span>
        })
    } 

    handleFormatarPreco = (price) => {
        return `R$ ${price.toFixed(2).replace(".", ",")}`
    }

    handleAdicionarAoCarrinho = (id) => {
        const {adicionarAoCarrinho, getServicoAtualizado} = this.props

        this.handleChangeStatus(id)

        this.handleChangeStatus(id)
        getServicoAtualizado(id)

        adicionarAoCarrinho()
        
    }

    handleFormatarData = (data) => {
        const dividirDataEHorario = data.split("T");
        const dividirAnoMesDia = dividirDataEHorario[0].split("-");

        const ano = dividirAnoMesDia[0]
        const mes = dividirAnoMesDia[1]
        const dia = dividirAnoMesDia[2]

        return `${dia}/${mes}/${ano}`
    }

    render() {
        const { servico, voltarLista } = this.props

        return (
            <DetalhesContainer>
                <h1>{servico.title}</h1>
                <p>Aceita: {this.handleRenderFormasDePagamento()}</p>
                <p>Até {this.handleFormatarData(servico.dueDate)} por <b>{this.handleFormatarPreco(servico.price)}</b></p>
                <p>{servico.description}</p>
                <button className= {`${servico.taken ? "disabled" :""}`} onClick={() => this.handleAdicionarAoCarrinho(servico.id)} disabled={servico.taken}>Adicionar ao carinho</button>
                <button type='' onClick={voltarLista}>Voltar para lista</button>
            </DetalhesContainer>
        )
    }
}

export default DetalhesServico;