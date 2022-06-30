import React from "react";
import styled from "styled-components"
import axios from "axios";
import logo from '../assets/images/logo.png'

const ContainerCarrinho = styled.div`
  margin:0px;
`
const Produto = styled.div`
    background-color:#D3D3D3;
    border:1px solid black;
    margin:10px;
    padding:35px 15px;
    display:flex;
    justify-content: space-between;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 50px;
`

const ButtonArea = styled.div`
  height:80px;
  margin-right:0px;
  display:flex;
  align-items: center;
`

export default class Carrinho extends React.Component {

    state = {
        produtos: [],
    }

    componentDidMount() {
        this.getJobById()
    }

    getJobById = () => {
        const id = "0809bf0b-fbf0-422b-b54a-065f1e5df1d8"
        axios.get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
            headers: {
                Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
            }
        }).then(res => {
            this.setState({ produtos: [res.data] })
        }).catch(err => {
            console.log(err.response)
        })
    }

    removerDoCarrinho = (id) => {
        const novoCarrinho = this.state.produtos.filter((item) => {
            return item.id !== id
        })
        this.setState({ produtos: novoCarrinho })
    }

    render() {
        const produto = this.state.produtos.map((p) => {
            return (
                <Produto key={p.id}>
                    <div>{p.title}</div>
                    <div>{`R$${p.price}.00`}</div>
                    <button onClick={() => this.removerDoCarrinho(p.id)}>Remover</button>
                </Produto>
            )
        })
        return (
            <Container>
                
                <Header>
                    <Logo>
                        <img src={logo} alt="logo" />
                        {/* <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </button> */}
                        <ButtonArea>                            
                            <button>Voltar</button>
                        </ButtonArea>
                    </Logo>
                </Header>
                <ContainerCarrinho>
                    {produto}
                    <span>{`Total: R$00.00`}</span>
                    <button>Finalizar Compra</button>                    
                </ContainerCarrinho>
            </Container>

        )
    }
}

