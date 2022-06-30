import React from "react";
import PaginaContratar from "./Pages/PaginaContratar/PaginaContratar";
import { createGlobalStyle } from "styled-components";
import ComponentForm from "./Pages/ComponentForm";
import DetalhesServico from "./Pages/detalhesServico";
import Carrinho from "./Pages/Carrinho"
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios'
import Home from "./Pages/Home";
import logo from "./assets/images/logo.png"


const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

const Header = styled.div`
  background-color:#F5F4FC;
  /* border:1px solid black; */
  height:80px;
  padding:10px; 
  button {
    cursor: pointer;
  } 
`
const Logo = styled.div`
  img{
    height:80px;    
    cursor: pointer;
  }
  button{
    border: 0;
    background-color:#F5F4FC;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 50px;
`


export default class App extends React.Component {
  state = {
    paginaAtual: "home",
    carrinho: [],
    servico: {}
  }

  handleGetServico = async (id) => {

    try {
      const response = await axios.get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
        }
      })

      this.setState({
        servico: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleAdicionarServicoAoCarrinho = () => {
    const { servico, carrinho } = this.state;

    const novoServico = {
      id: servico.id,
      title: servico.title,
      price: servico.price,
      dueDate: servico.dueDate,
      description: servico.description,
      paymentMethods: servico.paymentMethods,
      taken: servico.taken
    }

    const novoCarrinho = [...carrinho, novoServico]

    this.setState({
      carrinho: novoCarrinho
    })

    this.handleGetServico(servico.id)
  }

  handleRemoverDoCarrinho = (id) => {
    const { carrinho } = this.state;
    
    const newCarrinho = carrinho.filter((item) => {
      return item.id !== id
    })

    this.setState({
      carrinho: newCarrinho
    })
  }

  trocarPagina = () => {
    const { paginaAtual, servico, carrinho } = this.state

    switch (paginaAtual) {
      case "home":
        return <Home registrar={this.onClickRegistrar} irPraLista={this.onClickLista} />
      case "carrinho":
        return <Carrinho carrinho={carrinho} removerDoCarrinho={this.handleRemoverDoCarrinho}/>
      case "detalhes":
        return <DetalhesServico carrinho={carrinho} getServicoAtualizado={this.handleGetServico} servico={servico} voltarLista={this.onClickLista} adicionarAoCarrinho={this.handleAdicionarServicoAoCarrinho} />
      case "lista":
        return <PaginaContratar salvarServico={this.onClickVerDetalhes} />
      case "registrar":
        return <ComponentForm />
      default:
        return <Home registrar={this.onClickRegistrar} irPraLista={this.onClickLista} />
    }
  }

  onClickHome = () => {
    this.setState({ paginaAtual: "home" })
  }

  onClickCarrinho = () => {
    this.setState({ paginaAtual: "carrinho" })
  }

  onClickLista = () => {
    this.setState({ paginaAtual: "lista" })
  }

  onClickRegistrar = () => {
    this.setState({ paginaAtual: "registrar" })
  }

  onClickVerDetalhes = (servico) => {

    this.handleGetServico(servico.id)

    this.setState({
      servico: servico,
      paginaAtual: "detalhes",
    })
  }

  render() {
    const { paginaAtual } = this.state

    return (
      <div>
        <GlobalStyle />
        <Header>
          <Logo>
            <img onClick={this.onClickHome} src={logo} alt="logo" />

            {paginaAtual !== "carrinho" ? <button onClick={this.onClickCarrinho}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button> : <button onClick={this.onClickLista}>Voltar</button>}
          </Logo>
        </Header>
        {this.trocarPagina()}
      </div>

    )
  }
}

