import React, { useState } from 'react'
import { Button, ButtonGroup, Theme } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import TicketCard from '../ui/TicketCard';
import { TicketType } from '../types';

const useStyles = makeStyles((theme:Theme) => ({

    root: {
      backgroundColor: '#FFFFFF',
      color: 'black',
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: 400,
      paddingTop: 13.6,
      paddingBottom: 13.6,
      paddingRight: 15,
      paddingLeft: 15,
      border: '1px solid #DFE5EC',
      borderRadius: 0,

      '&:first-child': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
    },

    [theme.breakpoints.down('md')]: {
      root: {
        fontSize: 11
      }
    },

    [theme.breakpoints.down('sm')]: {
      root: {
        fontSize: 10
      }
    },

    lastButton: {
    
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
  
    active: {
      backgroundColor: '#2196F3',
      color: '#fff',
      borderColor: '#2196F3',

      '&:hover': {
        borderColor: 'white'
      }
    },
  
    MuiButtonGroupRoot: {
        width: '100%',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },

    more: {
        backgroundColor: '#2196F3',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20
    },
}))

type Props = {
  tickets: TicketType[];
  filters:  Record<string, boolean>,
}

const Tickets:React.FC<Props> = (props) => {

  const[viewMore, setViewMore] = useState(5)

  const fiveMore = () => {
    setViewMore(viewMore + 5)
  }

  const[activeSort, setActiveSort] = useState<string>('');

  const classes = useStyles();

  const[filtered, setFiltered] = useState<TicketType[]>(props.tickets);
  const[sort, setSort] = useState<TicketType[]>(filtered);
  
  const handleSort = (type:string) => {
    setActiveSort(type)
    const draftSort: TicketType[] = filtered;
    
    switch (type) {
      case 'cheaper':
        draftSort.sort((a, b) => a.price - b.price);
        break;
      case 'faster': {
        draftSort.sort((a, b) => {
          let aDuration = 0;
          let bDuration = 0;
          
          for(const segment of a.segments) {
            aDuration = aDuration + segment.duration
          }
          for(const segment of b.segments) {
            bDuration = bDuration + segment.duration
          }
          return aDuration - bDuration
        })
        break;
      }
    }
  
    setSort(draftSort);
  }
  

  React.useEffect(() => {
    filterTickets(props.tickets);
  }, [props.tickets, props.filters])

  React.useEffect(() => {
    handleSort(activeSort)
  }, [filtered])

  const calcStops = (item: TicketType) => {
    let count = 0;
    for(const segment of item.segments) {
      count = count + segment.stops.length
    }
    return count;
  }

  const filterTickets = (tickets: TicketType[]) => {
    
    let newTickets: TicketType[] = []

    newTickets=tickets.filter((ticket)=> {

      if(props.filters['all'] === true){
        if(calcStops(ticket) < 4) {
          return ticket
        }
      } if (props.filters['noTransfer'] === true || props.filters['oneTransfer'] === true
        || props.filters['twoTransfers'] === true || props.filters['threeTransfers'] === true){

           if(props.filters['noTransfer'] === true){
            if(calcStops(ticket) === 0) {
              return ticket
            }
          }
          if(props.filters['oneTransfer'] === true){
            if(calcStops(ticket) === 1) {
              return ticket
            }
          }
          if(props.filters['twoTransfers'] === true){
              if(calcStops(ticket) === 2) {
                return ticket
              }
          }
            if(props.filters['threeTransfers'] === true){
              if(calcStops(ticket) === 3) {
                return ticket
              }
          }
      }
      else{
        return ticket
      }
    })

    setFiltered(newTickets)

  }

  return(
      <>
              <ButtonGroup fullWidth  className={classes.MuiButtonGroupRoot} >
                  <Button onClick={() => handleSort('cheaper')} className={`${classes.root} ${activeSort === 'cheaper' && classes.active}`}>Самый дешевый</Button>
                  <Button onClick={() => handleSort('faster')} className={`${classes.root} ${activeSort === 'faster' && classes.active}  ${classes.lastButton}`}>Самый быстрый</Button>
              </ButtonGroup>
          {sort.slice(0,viewMore).map((ticket, index) => {
              return (
                  <TicketCard key={index} ticket={ticket}/>
              )
          })}
              <Button onClick={() => fiveMore()} className={classes.more} fullWidth>Показать еще 5 билетов!</Button>
      
      </>
  )
 }

 export default Tickets




