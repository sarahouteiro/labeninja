import React from "react";
import styled from "styled-components";
import CardServico from "../components/CardServico";
import { key, url } from '../utils/constants'
import axios from "axios";

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
const Container = styled.div`
  margin:0px;

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
  state = {
    jobs: [],
    filterMinValue: '',
    filterMaxValue: '',
    filterTitle: ''
  }

  componentDidMount() {
    this.buscarJobs()
  }

  updateMinValue = (event) => {
    this.setState({ filterMinValue: event.target.value })
  }

  updateMaxValue = (event) => {
    this.setState({ filterMaxValue: event.target.value })
  }

  updateTitle = (event) => {
    this.setState({ filterTitle: event.target.value })
  }

  buscarJobs = () => {
    axios.get(`${url}/jobs`, {
      headers: {
        Authorization: key
      }
    })
      .then((sucess) => {
        this.setState({ jobs: sucess.data.jobs })
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  renderizarCards = () => {
    if (this.state.filterMinValue === '' && this.state.filterMaxValue === '' && this.state.filterTitle === '') {
      const renderizaJobs = this.state.jobs.map((job) => {
        return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
      })
      return renderizaJobs
    }

    if (this.state.filterMinValue !== '' && this.state.filterMaxValue === '' && this.state.filterTitle === '') {
      const filtrarMinimo = this.state.jobs.map((job) => {
        return job.price >= Number(this.state.filterMinValue) ? <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} /> : null
      })
      return filtrarMinimo
    }

    if (this.state.filterMaxValue !== '' && this.state.filterMinValue === '' && this.state.filterTitle === '') {
      const filtrarMaximo = this.state.jobs.map((job) => {
        return job.price <= Number(this.state.filterMaxValue) ? <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} /> : null
      })
      return filtrarMaximo
    }

    if (this.state.filterMinValue !== '' && this.state.filterMaxValue !== '' && this.state.filterTitle === '') {
      const filtrarJobs = this.state.jobs.map((job) => {
        if (job.price >= Number(this.state.filterMinValue) && job.price <= Number(this.state.filterMaxValue)) {
          return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
        }
      })
      return filtrarJobs
    }

    if (this.state.filterTitle !== '' && this.state.filterMinValue === '' && this.state.filterMaxValue === '') {
      const filtrarTitle = this.state.jobs.map((job) => {
        return job.title.includes(this.state.filterTitle) ? <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} /> : null
      })
      return filtrarTitle
    }

    if (this.state.filterMinValue !== '' && this.state.filterMaxValue === '' && this.state.filterTitle !== '') {
      const filtrarTudo = this.state.jobs.map((job) => {
        if (job.price >= Number(this.state.filterMinValue) && job.title.includes(this.state.filterTitle)) {
          return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
        }
      })
      return filtrarTudo
    }

    if (this.state.filterMaxValue !== '' && this.state.filterMinValue === '' && this.state.filterTitle !== '') {
      const filtrarTudo = this.state.jobs.map((job) => {
        if (job.price <= Number(this.state.filterMaxValue) && job.title.includes(this.state.filterTitle)) {
          return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
        }
      })
      return filtrarTudo
    }

    if (this.state.filterMinValue.length > 0 && this.state.filterMaxValue.length > 0 && this.state.filterTitle.length > 0) {
      const filtrarTudo = this.state.jobs.map((job) => {
        if (job.price >= Number(this.state.filterMinValue) && job.price <= Number(this.state.filterMaxValue) && job.title.includes(this.state.filterTitle)) {
          return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
        }
      })
      return filtrarTudo
    }

 }

  handleSalvarServico = (servico) => {
    const { salvarServico } = this.props

    salvarServico(servico)
  }
  render() {
    return (
      <Container>
        <Contratar>
          <div>
            <input
              placeholder="Valor Mínimo"
              value={this.state.filterMinValue}
              onChange={this.updateMinValue}
            />
            <input
              placeholder="Valor Máximo"
              value={this.state.filterMaxValue}
              onChange={this.updateMaxValue}
            />
            <input
              placeholder="Busca por título ou descrição"
              value={this.state.filterTitle}
              onChange={this.updateTitle}
            />
            <select name='select'>
              <option value='valor1'>Sem Ordenação</option>
              <option value='valor2'>Menor Valor</option>
              <option value='valor3'>Maior Valor</option>
              <option value='valor4'>Título</option>
              <option value='valor5'>Prazo</option>
            </select>
            <GridServicos>
              {this.renderizarCards()}
            </GridServicos>
          </div>
        </Contratar>
      </Container >

    )
  }
};