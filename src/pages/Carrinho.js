import React from "react";
import styled from "styled-components";
import axios from "axios";
import logo2 from "../assets/images/logo2.png";
import carrinho from "../assets/images/carrinho.png";

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
  state = {
    produtos: [],
  };

  componentDidMount() {
    this.getJobById();
  }

  getJobById = () => {
    const id = "0809bf0b-fbf0-422b-b54a-065f1e5df1d8";
    axios
      .get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
        },
      })
      .then((res) => {
        this.setState({ produtos: [res.data] });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  removerDoCarrinho = (id) => {
    const novoCarrinho = this.state.produtos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ produtos: novoCarrinho });
  };

  finalizarCompra = () => {
    alert("Obrigada por comprar com a gente!");
  };

  render() {
    const produto = this.state.produtos.map((p) => {
      return (
        <Produto key={p.id}>
          <div>{p.title}</div>
          <div>{`R$${p.price}.00`}</div>
          <Button onClick={() => this.removerDoCarrinho(p.id)}>Remover</Button>
        </Produto>
      );
    });

    let total = 0;
    this.state.produtos.forEach((item) => {
      total += item.price;
    });

    return (
      <Container>
        <ContainerCarrinho>
          {produto}
          <Total>
            <span>{`Total: R$${total},00`}</span>
            <Button onClick={this.finalizarCompra}>Finalizar Compra</Button>
          </Total>
        </ContainerCarrinho>
      </Container>
    );
  }
}
