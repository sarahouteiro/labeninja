import React from "react";
import styled from "styled-components"
import Home from "./assets/pages/Home"
import Carrinho from "./Pages/Carrinho";
import PaginaContratar from "./Pages/PaginaContratar";
import ComponentForm from "./components/RegistrationPage";
import DetalhesServico from "./Pages/detalhesServico";
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
  state = {
    paginaAtual: "home",
    carrinho: [],
    servico: {
      id: "ffffff",
      titulo: "Vender Pastel",
      preço: 100,
      descricao: "blablabla",
      formasDePagamento: [
        "Paypal",
        "Cartão de crédito",
        "Cartão de débito",
        "Pix",
        "Boleto"
      ]
    }
  }

  handleAdicionarServicoAoCarrinho = () => {
    const { servico, carrinho } = this.state;

    const novoServico = {
      id: servico.id,
      titulo: servico.titulo,
      preco: servico.preco,
      prazo: servico.prazo,
      descricao: servico.descricao,
      formasDePagamento: servico.formasDePagamento
    }

    const novoCarrinho = [...carrinho, novoServico]

    this.setState({
      carrinho: novoCarrinho
    })
  }

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


  render() {
    return (
      <div>
        <GlobalStyle />
        <ComponentForm />
      </div>

    )
  }
}

