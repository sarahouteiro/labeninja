import React from "react";
import styled from "styled-components";
import CardServico from "../components/CardServico";

const Contratar = styled.div`
    color: black;
    text-align: center;
    margin: 40px;
    input {
        margin-left: 20px;
        margin-right: 20px;
        height: 20px;
        width: 200px;
        padding-left: 10px;
    }
    select {
        margin-left: 20px;
        margin-right: 20px;
        height: 25px;
        width: 217px;
        padding-left: 5px;
    }
    @media (max-width: 560px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            margin-bottom: 8px;
        }
    }
`

const GridServicos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    @media (max-width: 560px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`

export default class PaginaContratar extends React.Component {
    render() {
        return(
            <Contratar>
                <div>
                    <input placeholder="Valor Mínimo"/>
                    <input placeholder="Valor Máximo"/>
                    <input placeholder="Busca por título ou descrição"/>
                    <select name='select'>
                        <option value='valor1'>Sem Ordenação</option>
                        <option value='valor2'>Menor Valor</option>
                        <option value='valor3'>Maior Valor</option>
                        <option value='valor4'>Título</option>
                        <option value='valor5'>Prazo</option>
                    </select>
                    <GridServicos>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                        <CardServico/>
                    </GridServicos>
                </div>
            </Contratar>
        )
    }
};