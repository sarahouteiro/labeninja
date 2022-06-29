import React from "react";
import PaginaContratar from "./Pages/PaginaContratar";
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


  render(){
    return (
      <div>
        <GlobalStyle />
        <PaginaContratar/>
      </div>
      
    )
  }
}

