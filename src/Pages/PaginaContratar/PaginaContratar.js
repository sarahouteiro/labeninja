import React from "react";
import {
  Contratar,
  Container,
  GridServicos
} from "./styled";
import CardServico from '../../components/CardServico/CardServico'
import { key, url } from '../../utils/constants'
import axios from "axios";


export default class PaginaContratar extends React.Component {
  state = {
    jobs: [],
    filterMinValue: '',
    filterMaxValue: '',
    filterTitle: '',
    sortingParameter: 'valor0'
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

  updateSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value })
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
              type='number'
              placeholder="Valor Mínimo"
              value={this.state.filterMinValue}
              onChange={this.updateMinValue}
            />
            <input
              type='number'
              placeholder="Valor Máximo"
              value={this.state.filterMaxValue}
              onChange={this.updateMaxValue}
            />
            <input
              placeholder="Busca por título ou descrição"
              value={this.state.filterTitle}
              onChange={this.updateTitle}
            />
            <select
              name='sort'
              value={this.state.sortingParameter}
              onChange={this.updateSortingParameter}
            >
              <option value='valor0'>Sem Ordenação</option>
              <option value='menor'>Menor Valor</option>
              <option value='maior'>Maior Valor</option>
              <option value='title'>Título</option>
              <option value='dueData'>Prazo</option>
            </select>
            <GridServicos>
              {this.state.jobs
                .filter((job) => {
                  return job.title.toLowerCase().includes(this.state.filterTitle.toLocaleLowerCase())
                })
                .filter((job) => {
                  return this.state.filterMinValue === '' || job.price >= this.state.filterMinValue
                })
                .filter((job) => {
                  return this.state.filterMaxValue === '' || job.price <= this.state.filterMaxValue
                })
                .sort((currentJob, nextJob) => {
                  switch (this.state.sortingParameter) {
                    case 'title':
                      return currentJob.title.localeCompare(nextJob.title)
                    case 'dueData':
                      return new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime()
                    case 'menor':
                      return currentJob.price - nextJob.price
                    case 'maior':
                      return nextJob.price - currentJob.price
                    default:
                      return currentJob.title.localeCompare(nextJob.title)
                  }
                })
                .map((job) => {
                  return <CardServico key={job.id} verDetalhes={() => this.handleSalvarServico(job)} jobInfos={job} />
                })}
            </GridServicos>
          </div>
        </Contratar>
      </Container>

    )
  }
};