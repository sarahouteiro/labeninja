import React from "react";
import styled from "styled-components"
import Home from "./assets/pages/Home"
import Carrinho from "./Pages/Carrinho";
import PaginaContratar from "./Pages/PaginaContratar";
import ComponentForm from "./components/RegistrationPage";
import DetalheProduto from "./Pages/detalhesProduto";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;    
  }
`


export default class App extends React.Component {
  // state = {
  //   paginaAtual: "home"
  // }

  // trocarPagina = () => {
  //   switch(this.state.paginaAtual){
  //     case "home":
  //       return <div>Home...</div>
  //     case "carrinho":
  //       return <Carrinho voltar={this.onClickHome}/>
  //     default:
  //       return <div>Home...</div>
  //   }
  // }

  // onClickHome = () => {
  //   this.setState({paginaAtual: "home"})
  // }
  
  // onClickCarrinho = () => {
  //   this.setState({paginaAtual: "carrinho"})
  // }


  render(){
    return (
      <div>
        <GlobalStyle />
      <Home/>
      </div>
      
    )
  }
}

