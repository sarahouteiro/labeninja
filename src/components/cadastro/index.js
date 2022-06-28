import React, { Component } from 'react'
import { CadastroContainer } from './styles';

class Cadastro extends Component {
    state = {
        titulo: "",
        descricao: "",
        preco: 0,
        tipoPagamento: [],
        prazo: ""
    }

    render() {
        const { descricao, prazo, preco, tipoPagamento, titulo } = this.state

        return (
            <CadastroContainer>
                <h1>Cadastre o seu serviço</h1>
                <form onSubmit="">
                    <input type="text" value={titulo} onChange={(e) => this.setState({ titulo: e.target.value })} placeholder='Título' required />
                    <input type="text" value={descricao} onChange={(e) => this.setState({ descricao: e.target.value })} placeholder='Descrição' required />
                    <input type="number" value={preco} onChange={(e) => this.setState({ preco: e.target.value })} placeholder='Preço' required />
                    <select multiple value={tipoPagamento} onChange={(e) => this.setState({ tipoPagamento: e.target.value })} >
                        <option value="debito">cartao de débito</option>
                        <option value="credito">cartao de crédito</option>
                        <option value="píx">pix</option>
                        <option value="paypal">paypal</option>
                        <option value="boleto">boleto</option>
                    </select>
                    <input type="date" value={prazo} onChange={(e) => this.setState({ prazo: e.target.value })} placeholder='Prazo' required />
                    <button type='submit'>CADASTRAR</button>
                </form>
            </CadastroContainer>
        )
    }
}

export default Cadastro;