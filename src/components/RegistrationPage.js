import React from 'react';
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import logo from '../assets/images/logo.png';
import axios from 'axios'


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
const Cadastro = styled.button`
    display: flex;
    align-content: center;
`
export default class ComponentForm extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: [],
    inputData: ""
  }

  onChangeTitulo = (ev) => {
    this.setState({ inputTitulo: ev.target.value })
  }

  onChangeDescricao = (ev) => {
    this.setState({ inputDescricao: ev.target.value })
  }

  onChangePreco = (ev) => {
    this.setState({ inputPreco: ev.target.value })
  }

  onChangePagamento = (ev) => {
    if (!(this.state.inputPagamento.includes(ev.target.value))) {
      this.setState({ inputPagamento: [...this.state.inputPagamento, ev.target.value] })
    }
  }

  onChangeData = (ev) => {
    this.setState({ inputData: ev.target.value })
  }


  createJob = () => {
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputPreco),
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputData
    }

    axios.post('https://labeninjas.herokuapp.com/jobs', body,
      {
        headers: {
          Authorization: 'a3ec4097-49f2-4d14-a000-3955659ffee9'
        }
      }).then((res) => {
        alert("Serviço cadastrado com sucesso!")
      }).catch((er) => {
        alert("Erro")
      })
  }



  render() {
    console.log(this.state.inputData, this.state.inputDescricao, this.state.inputPreco, this.state.inputTitulo, this.state.inputPagamento)
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
              <Input type="text" placeholder='Titulo' value={this.state.inputTitulo} onChange={this.onChangeTitulo} />
            </label>
            <label>
              <Input type="text" placeholder='Descrição' value={this.state.inputDescricao} onChange={this.onChangeDescricao} />
            </label>
            <label >
              <Input type="number" placeholder='Preço' value={this.state.inputPreco} onChange={this.onChangePreco} />
            </label>

            <label>
              <Select multiple onChange={this.onChangePagamento}>
                <option value="cartao de Debito" >Cartão de Débito</option>
                <option value="Cartao de Credito" >Cartão de Crédito</option>
                <option value="Paypal" >PayPal</option>
                <option value="Boleto" >Boleto</option>
                <option value="Pix">Pix</option>
              </Select>
            </label>
            <label>
              <Input type="date" value={this.state.inputData} onChange={this.onChangeData} />
            </label>
          </Form>
          <div>
            <Cadastro type='submit' onClick={this.createJob} >Cadastrar Serviço</Cadastro>
          </div>
        </ContainerPage>
      </Container>

    )
  }
}