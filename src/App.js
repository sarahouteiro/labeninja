import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import logo from "./assets/images/logo.png"
import Cadastro from "./components/cadastro";

const GlobalStyle = createGlobalStyle`
    body{
    margin:0px;
    padding:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;
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
`
const Logo = styled.div`
  img{
    height:80px;
    margin-left:50px;
  }
`

export default class App extends React.Component {
  render(){
    return (
      <Container>
        <GlobalStyle/>
        <Header>
          <Logo>
            <img src={logo} alt="logo"/>
          </Logo>
        </Header>
        <Cadastro/>
      </Container>
    )
  }
}

