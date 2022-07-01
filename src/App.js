import React from "react";
import PaginaContratar from "./Pages/PaginaContratar/PaginaContratar";
import Carrinho from "./Pages/Carrinho"
import ComponentForm from "./Pages/ComponentForm";
import DetalhesServico from "./Pages/detalhesServico";
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios'
import Home from "./Pages/Home";
import logo from "./assets/images/logo2.png"
import carrinho from "./assets/images/carrinho.png"
import voltar from "./assets/images/voltar.png"

const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
  }
`

const Header = styled.div`
  background-color: #f5f4fc;
  height: 80px;
  display: flex;
  justify-content: space-around;
  user-select: none;
`;
const Logo = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  height: 50px;
  padding:5px 10px;
  :hover {
    border-radius: 5px;
    cursor: pointer;
    background-color:#EEECF9;
  }
  img {
    height: 50px;
  }
`;
const LogoTitle = styled.div`
  color: #7c65ab;
  font-size: 22px;
  margin-right: 5px;
`;
const Carr = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding:10px;
  div{
    display:flex;
  }
  :hover {
    border-radius: 5px;
    cursor: pointer;
    background-color:#EEECF9;
  }
  img {
    height: 40px;
  }
`;
const Span = styled.span`
  color:#7c65ab;
  background-color:#EEECF9;
  padding:10px;
  border-radius:50%;
  ${(props) => {
    if(props.numeroItens === 0){
      return 'display:none'
    }
    else{
      return 'display:block'
    }
  }}
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
          Authorization: "a3ec4097-49f2-4d14-a000-3955659ffee9"
        }
      })

      this.setState({
        servico: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  adicionarAoCarrinho = (job) => {
    const novoServico = [...this.state.carrinho, job]
    this.setState({carrinho: novoServico})
    alert(`O serviço ${job.title} foi adicionado ao carrinho`)
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

  handleFinalizarCompra = () => {
    const { carrinho } = this.state;

    if(carrinho.length === 0) return;
    
    this.setState({
      carrinho: []
    })

    alert("Obrigada por comprar com a gente!");
  }

  trocarPagina = () => {
    const { paginaAtual, servico, carrinho } = this.state

    switch (paginaAtual) {
      case "home":
        return <Home registrar={this.onClickRegistrar} irPraLista={this.onClickLista} />
      case "carrinho":
        return <Carrinho carrinho={this.state.carrinho} removerDoCarrinho={this.handleRemoverDoCarrinho} finalizarCompra={this.handleFinalizarCompra}/>
      case "detalhes":
        return <DetalhesServico carrinho={carrinho} getServicoAtualizado={this.handleGetServico} servico={servico} voltarLista={this.onClickLista}/>
      case "lista":
        return <PaginaContratar adicionarAoCarrinho={this.adicionarAoCarrinho} salvarServico={this.onClickVerDetalhes} />
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
    console.log("entrei aqui")
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
          <Logo onClick={this.onClickHome}>
            <img src={logo} alt="logo"/>
            <LogoTitle>LabeNinja</LogoTitle>
          </Logo>
          <Carr>
            {paginaAtual !== "carrinho" ? <div onClick={this.onClickCarrinho}>
            <Span numeroItens={this.state.carrinho.length}>{this.state.carrinho.length}</Span>
            <img src={carrinho} alt="icone carrinho"/>
            </div> : <img src={voltar} onClick={this.onClickLista}/>}
          </Carr>
        </Header>
        {this.trocarPagina()}
      </div>

    )
  }
}

