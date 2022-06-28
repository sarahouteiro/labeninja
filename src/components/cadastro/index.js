import React, { Component } from 'react'
import Select from 'react-select'
import { CadastroContainer } from './styles';

class Cadastro extends Component {
    state = {
        titulo: "",
        descricao: "",
        preco: 0,
        tipoPagamento: [],
        prazo: "",
        data: [
            {
                value: "crédito",
                label: "Cartão de crédito"
            },
            {
                value: "débito",
                label: "Cartão de débito"
            },
            {
                value: "pix",
                label: "Pix"
            },
            {
                value: "boleto",
                label: "Boleto"
            },
            {
                value: "paypal",
                label: "Paypal"
            }
        ]
    }

    handleChange = (e) => {
        this.setState({
            tipoPagamento: Array.isArray(e) ? e.map(x => x.value) : []
        })
    }

    render() {
        const { descricao, prazo, preco, data, titulo, tipoPagamento } = this.state

        return (
            <CadastroContainer>
                <h1>Cadastre o seu serviço</h1>
                <form onSubmit="">
                    <input type="text" value={titulo} onChange={(e) => this.setState({ titulo: e.target.value })} placeholder='Título' required />
                    <input type="text" value={descricao} onChange={(e) => this.setState({ descricao: e.target.value })} placeholder='Descrição' required />
                    <input type="number" value={preco} onChange={(e) => this.setState({ preco: e.target.value })} placeholder='Preço' required />
                    <Select
                        className="dropdown"
                        placeholder="Select Option"
                        value={data.filter(obj => tipoPagamento.includes(obj.value))} // set selected values
                        options={data} // set list of the data
                        onChange={this.handleChange} // assign onChange function
                        isMulti
                        isClearable
                    />
                    <input type="date" value={prazo} onChange={(e) => this.setState({ prazo: e.target.value })} placeholder='Prazo' required />
                    <button type='submit'>CADASTRAR</button>
                </form>
            </CadastroContainer>
        )
    }
}

export default Cadastro;