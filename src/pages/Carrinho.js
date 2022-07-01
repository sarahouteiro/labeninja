import React from "react";
import styled from "styled-components";
import carrinhoVazio from "../assets/images/carrinho-vazio.png"

const ContainerCarrinho = styled.div`
  margin: 0px;
  padding: 50px;
  user-select: none;
`;
const CarrinhoVazio = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:50px;
  padding-top:100px;
  img{
    height:400px;
  }
  p{
    margin-left:50px;
  }
  @media (max-width:475px){
    font-size:30px;
    img{
    height:150px;
  }
  }
`
const Produto = styled.div`
  background-color: #f5f4fb;
  box-shadow: 2px 2px 15px #ccc;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  padding: 35px 0px;
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  border-radius: 5px;
  div{
    margin:0px 10px;
  }

  @media (max-width:475px){
    flex-direction: column;
    div{
      margin-bottom:5px;
    }
  }
`;

const Container = styled.div`
  margin: 0px;
  color: #7c65ab;
`;
const Total = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  justify-content: space-around;
  font-size: 20px;

  @media (max-width:475px){
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`;
const Button = styled.div`
  background-color: #7c65ab;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 15px #ccc;
    background-color: #544985;
  }

  @media (max-width:475px){
    margin-top:10px;
    max-width:150px;
  }
`;

export default class Carrinho extends React.Component {

  removerDoCarrinho = (id) => {
    const { removerDoCarrinho } = this.props
    removerDoCarrinho(id)
  };

  handleGetTotal = () => {
    const { carrinho } = this.props;

    let total = 0

    carrinho.map((servico) => {
      return total += servico.price
    })

    return total.toFixed(2).replace(".", ",")
  }

  render() {
    const { carrinho, finalizarCompra } = this.props
    const servicosAdicionados = this.props.carrinho.map((p) => {
      return (
        <Produto key={p.id}>
          <div>{p.title}</div>
          <div>{`R$${p.price}.00`}</div>
          <Button onClick={() => this.removerDoCarrinho(p.id)}>Remover</Button>
        </Produto>
      );
    });

    return (
      <Container>
        {this.props.carrinho.length === 0 ?
        <ContainerCarrinho>
          <CarrinhoVazio>
            <img src={carrinhoVazio} alt="carrinho-vazio"/>
            <p>Seu carrinho está vazio!</p>
          </CarrinhoVazio>
        </ContainerCarrinho>
        :
        <ContainerCarrinho>
          {servicosAdicionados}
          <Total>
            <span>{`Total: R$${this.handleGetTotal()}`}</span>
            <Button onClick={finalizarCompra}>Finalizar Compra</Button>
          </Total>
        </ContainerCarrinho>
        }
        
      </Container>
    );
  }
}
