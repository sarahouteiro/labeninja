import React from 'react';
import Styled from "styled-components"

const Container = Styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`
const Text = Styled.div`
    color: black;

`
const Form = Styled.form`
    padding: 5px;
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
`
const Input = Styled.input`
    width: 100%;
    margin: 5px;
`

const Select = Styled.select`
    width: 100%;
    margin-left: 1%;
    margin: 5px;
`
const Button = Styled.button `
    display: flex;
    align-content: center;
`
export default class ComponentForm extends React.Component {
    render() {
        return (
            <Container>
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
            </Container>
        )
    }
}