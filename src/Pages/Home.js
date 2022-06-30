import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"


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
    const { irPraLista } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Bloco>
          <p>Titulo</p>
          <div>frase</div>
          <div>
            <button>QUERO SER UM NINJA</button>
            <button onClick={irPraLista}>QUERO CONTRATAR UM NINJA</button>
          </div>
        </Bloco>
      </Container>
    )
  }
}