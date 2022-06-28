import React from 'react';
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import logo from '../assets/images/logo.png'

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
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

const Text = styled.div`
    color: black;

`
const Form = styled.form`
    padding: 5px;
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
`
const Input = styled.input`
    width: 100%;
    margin: 5px;
`

const Select = styled.select`
    width: 100%;
    margin-left: 1%;
    margin: 5px;
`
const Button = styled.button `
    display: flex;
    align-content: center;
`
export default class ComponentForm extends React.Component {
    render() {
        return (
            <Container>
        
        <Header>
          <Logo>
            <img src={logo} alt="logo" />            
          </Logo>          
        </Header>
              <ContainerPage>
                <Text><b>Cadastre o seu serviço</b></Text>
                <Form>
                    <label>
                        <Input type="text" placeholder='Titulo' />
                    </label>
                    <label>
                        <Input type="text" placeholder='Descrição' />
                    </label>
                    <label >
                        <Input type="number" placeholder='Preço' />
                    </label>
                    <label>
                        <Select multiple>
                           <option value="cartao de Debito" >Cartão de Débito</option>
                           <option value="Cartao de Credito" >Cartão de Crédito</option>
                           <option value="Paypal" >PayPal</option>
                           <option value="Boleto" >Boleto</option>
                           <option value="Pix">Pix</option>
                        </Select>
                    </label>
                    <label>
                        <Input type="date" />
                    </label>
                    <div>
                        <Button type='submit'>Cadastrar Serviço</Button>
                    </div>
                </Form>
            </ContainerPage>
      </Container>
            
        )
    }
}