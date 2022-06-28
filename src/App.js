import React from "react";
import styled, { createGlobalStyle }  from "styled-components"
import logo from "./assets/images/logo.png"
import Home from "./Pages/Home"
import Carrinho from "./Pages/Carrinho";
import DetalheProduto from "./Pages/detalhesProduto";

const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #0e0e0e;
    box-sizing: border-box;

  }
`
const Container = styled.div`
  margin:0px;

`
const Header = styled.div`
  background-color:#F5F4FC;
  border:1px solid black;
  height:80px;
  padding:10px;
  display:flex;
  justify-content: space-between;
`
const Logo = styled.div`
  img{
    height:80px;
    margin-left:50px;
  }
`
const ButtonArea = styled.div`
  height:80px;
  margin-right:50px;
  display:flex;
  align-items: center;
`

export default class App extends React.Component {
  state = {
    paginaAtual: "home",
    produto: {
      id: 1,
      titulo: "Pasteis",
      formasPagamento: ["Paypal","Boleto"],
      preco: 100,
      prazo: "15/06/1997",
      descricao: "blablabla" 
    }
  }

  trocarPagina = () => {
    switch(this.state.paginaAtual){
      case "home":
        return <Home/>
      case "carrinho":
        return <Carrinho voltar={this.onClickHome}/>
      case "detalhes": 
        return <DetalheProduto voltar={this.onClickHome} produto={this.state.produto}/>
      default:
        return <div>Home...</div>
    }
  }

  onClickHome = () => {
    this.setState({paginaAtual: "home"})
  }
  
  onClickCarrinho = () => {
    this.setState({paginaAtual: "carrinho"})
  }
  render(){
    return (
      <Container>
        <GlobalStyle/>
        <Header>
          <Logo>
            <img src={logo} alt="logo"/>
          </Logo>
          <ButtonArea>
            <button onClick={this.onClickHome}>Home</button>
            <button onClick={this.onClickCarrinho}>Carrinho</button>
          </ButtonArea>
        </Header>
        {this.trocarPagina()}
      </Container>
    )
  }
}

