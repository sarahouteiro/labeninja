import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  margin: 0px;
  padding: 50px;
  user-select: none;
`;
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
`;

const Container = styled.div`
  margin: 0px;
`;
const Total = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  justify-content: space-around;
  font-size: 20px;
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
    const produto = carrinho.map((p) => {
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
        <ContainerCarrinho>
          {produto}
          <Total>
            <span>{`Total: R$${this.handleGetTotal()}`}</span>
            <Button onClick={finalizarCompra}>Finalizar Compra</Button>
          </Total>
        </ContainerCarrinho>
      </Container>
    );
  }
}
