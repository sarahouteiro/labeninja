import React, { Component } from 'react'
import { DetalhesContainer } from './styles'
import axios from 'axios';

class DetalhesServico extends Component {
    
    componentDidMount() {
        this.handleVerificarSeTemNoCarrinho()
    }
    
    handleTrocarStatus = async (id, taken) => {

        const body = {
            taken: taken
        }

        try {
            await axios.post(`https://labeninjas.herokuapp.com/jobs/${id}`, body, {
                headers: {
                    Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleVerificarSeTemNoCarrinho = () => {
        const { carrinho, servico, getServicoAtualizado } = this.props

        const servicoNoCarrinho = carrinho.find((item) => {
            return item.id === servico.id
        }) 

        if(!servicoNoCarrinho || carrinho.length === 0){
            this.handleTrocarStatus(servico.id, false)
            getServicoAtualizado(servico.id)
        }
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

    handleAdicionarAoCarrinho = async () => {
        const {adicionarAoCarrinho, servico} = this.props

        const confirmation = window.confirm("Quer adicionar esse serviço ao carrinho?");

        if(!confirmation) return;

        await this.handleTrocarStatus(servico.id, true)

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
                <div><p>Aceita: {this.handleRenderFormasDePagamento()}</p></div>
                <p>Até {this.handleFormatarData(servico.dueDate)} por <b>{this.handleFormatarPreco(servico.price)}</b></p>
                <p>{servico.description}</p>
                <button className= {`${servico.taken ? "disabled" :""}`} onClick={() => this.handleAdicionarAoCarrinho()} disabled={servico.taken}>Adicionar ao carinho</button>
                <button type='' onClick={voltarLista}>Voltar para lista</button>
            </DetalhesContainer>
        )
    }
}

export default DetalhesServico;