import React from 'react'
import { ticketsAPI } from '../API'
import { TicketType } from '../types'
import Tickets from '../ui/Tickets'

interface IState {
    tickets: TicketType[],
    id: string
}

type Props = {
  filters:  Record<string, boolean>,
 }

class TicketsContainer extends React.Component<Props, IState> {

  state = {
    tickets: [],
    id: ''
  }

  componentDidMount() {
    ticketsAPI.getSearchId().then((data) => {
      
      this.setState({id: data.searchId})
      this.getTickets()
    })
  }
  getTickets() {
    ticketsAPI.getTickets(this.state.id).then((data) => {
      if(data.tickets && Array.isArray(data.tickets)){
        this.setState({tickets: this.state.tickets.concat(data.tickets)})
        if (!data.stop) {
          this.getTickets()
        }
      }
    })
    .catch(() =>{
      this.getTickets()
    } )
  }

  render() {
    console.log(this.state.tickets)
    return (
      <Tickets filters={this.props.filters} tickets={this.state.tickets}/>
    )
  }
  
}

export default TicketsContainer
