import React from "react";
import styled from "styled-components"
import axios from "axios";

const Container = styled.div`
  margin:0px;
`
const Produto = styled.div`
    background-color:#D3D3D3;
    border:1px solid black;
    margin:10px;
    padding:35px 15px;
    display:flex;
    justify-content: space-between;
`

export default class Carrinho extends React.Component {

    state = {
        produtos: [],
    }

    componentDidMount(){
        this.getJobById()
    }

    getJobById = () => {
        const id = "0809bf0b-fbf0-422b-b54a-065f1e5df1d8"
        axios.get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
            headers: {
                Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
            }
        }).then(res => {
            this.setState({produtos: [res.data]})
        }).catch(err => {
            console.log(err.response)
        })
    }

    removerDoCarrinho = (id) => {
        const novoCarrinho = this.state.produtos.filter((item) => {
            return item.id !== id
        })
        this.setState({produtos: novoCarrinho})
    }

  render(){
    const produto = this.state.produtos.map((p) => {
            return (
                <Produto key={p.id}>
                    <div>{p.title}</div>
                    <div>{`R$${p.price}.00`}</div>
                    <button onClick={() => this.removerDoCarrinho(p.id)}>Remover</button>
                </Produto>
            )
    })
    return (
      <Container>
        {produto}
        <span>{`Total: (FUNÇÀO TOTAL)`}</span>
        <button>Finalizar Compra</button>
        <button onClick={this.props.voltar}>Voltar</button>
      </Container>
    )
  }
}

