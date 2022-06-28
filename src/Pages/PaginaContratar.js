import React from "react";
import styled from "styled-components";
import CardServico from "../components/CardServico";
import { createGlobalStyle } from "styled-components";
import logo from "../assets/pages/images/logo.png" 

const Contratar = styled.div`
    color: black;
    text-align: center;
    margin: 40px;
    input {
        margin-left: 20px;
        margin-right: 20px;
        height: 20px;
        width: 200px;
        padding-left: 10px;
    }
    select {
        margin-left: 20px;
        margin-right: 20px;
        height: 25px;
        width: 217px;
        padding-left: 5px;
    }
    @media (max-width: 560px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            margin-bottom: 8px;
        }
    }
`
const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;    
  }
`
const Container = styled.div`
  margin:0px;

`
const Header = styled.div`
  background-color:#F5F4FC;
  /* border:1px solid black; */
  height:80px;
  padding:10px;  
`
const Logo = styled.div`
  img{
    height:80px;    
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

const GridServicos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    @media (max-width: 560px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`

export default class PaginaContratar extends React.Component {
    render() {
        return(
            <Container>
        <GlobalStyle />
        <Header>
          <Logo>
            <img src={logo} alt="logo" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              </button>
          </Logo>          
        </Header>
          <Contratar>
                <div>
                    <input placeholder="Valor Mínimo"/>
                    <input placeholder="Valor Máximo"/>
                    <input placeholder="Busca por título ou descrição"/>
                    <select name='select'>
                        <option value='valor1'>Sem Ordenação</option>
                        <option value='valor2'>Menor Valor</option>
                        <option value='valor3'>Maior Valor</option>
                        <option value='valor4'>Título</option>
                        <option value='valor5'>Prazo</option>
                    </select>
                    <GridServicos>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                    </GridServicos>
                </div>
            </Contratar>
      </Container>
            
        )
    }
};