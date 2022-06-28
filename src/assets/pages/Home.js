import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import logo from "./images/logo.png"


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
  border:1px solid black;
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

const Bloco = styled.div`
display: flex;
flex-direction: column;
color: black;
height: 70vh;
justify-content: end;
align-items: center;
button{
  margin:20px 60px
}
div{
  margin: 50px;
}


`

export default class Home extends React.Component {
  render() {
    return (
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
        <Bloco>
            <p>Titulo</p>
            <div>frase</div>
            <div>
              <button>QUERO SER UM NINJA</button>
              <button>QUERO CONTRATAR UM NINJA</button>
            </div>
          </Bloco>      
      </Container>
    )
  }
}