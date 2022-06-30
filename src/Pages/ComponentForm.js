import React from 'react';
import styled from "styled-components"
import axios from 'axios'

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`

const Container = styled.div`
  margin:0px;

`

const Text = styled.div`
    color: black;
    margin-top: 40px;

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

            <div>
                <input type='checkbox' value="cartao de Debito" onChange={this.onChangePagamento}/>
                Cartão de Débito
                <input type='checkbox' value="Cartao de Credito" onChange={this.onChangePagamento}/>
                Cartão de Crédito
                <input type='checkbox' value="Paypal" onChange={this.onChangePagamento}/>
                Paypal
                <input type='checkbox' value="Boleto" onChange={this.onChangePagamento}/>
                Boleto
                <input type='checkbox' value="Pix" onChange={this.onChangePagamento}/>
                Pix
            </div>
            
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