import React from "react";
import { 
  Contratar, 
  Container, 
  Header, 
  Logo, 
  GridServicos 
} from "./styled";
import CardServico from '../../components/CardServico/CardServico'
import logo from "../../assets/images/logo.png" 
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
    this.setState({filterMinValue: event.target.value})
  }

  updateMaxValue = (event) => {
    this.setState({filterMaxValue: event.target.value})
  }

  updateTitle = (event) => {
    this.setState({filterTitle: event.target.value})
  }

  updateSortingParameter = (event) => {
    this.setState({sortingParameter: event.target.value})
  }

  buscarJobs = () => {
    axios.get(`${url}/jobs`, {
      headers: {
        Authorization: key
      }
    })
    .then((sucess) => {
      this.setState({jobs: sucess.data.jobs})
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
  }

    render() {
        return(
            <Container>
                <Header>
                  <Logo>
                    <img src={logo} alt="logo" />
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      </button>
                  </Logo>          
                </Header>
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
                        return <CardServico jobInfos={job}/>
                      })}
                    </GridServicos>
                </div>
            </Contratar>
      </Container>
            
        )
    }
};