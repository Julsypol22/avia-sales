import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import { TicketType } from '../types';

const useStyles = makeStyles({

    tickets: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        borderRadius: 5,
        marginTop: 20,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        flexBasis : '100%'
    },

    h3: {
            color: '#2196F3',
            fontFamily: 'Roboto',
            fontWeight: 600,
            fontSize: 24,
        

    },

    infoWrap: {
        marginTop: 20
    },

    info: {
        '& h6': {
            color: '#A0B0B9',
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 12,
            textTransform: 'uppercase'
        },
        '& p': {
            color: '#4A4A4A',
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 14,
        },
    },
  })

  type Props = {
    ticket: TicketType;
  }

 const TicketCard:React.FC<Props> = (props) => {

    function minutesToTime(min: number) {
        return (parseInt(`${min/60}`) + "ч " + min%60 + "м" );
      }

    const getDate = (date: string) => {
        const date1 = new Date(date);
        return (
            `${date1.getHours()}:${date1.getMinutes()}`
        )
    }

  const classes = useStyles();

  return (
    <Box className={classes.tickets}>
            <Box display= 'flex' justifyContent='space-between' alignItems='center' marginBottom='20'>
                <Typography className={classes.h3} variant='h3'>{props.ticket.price}P</Typography>
                <img src={`http://pics.avs.io/99/36/${props.ticket.carrier}.png`}/>
            </Box>
            <Grid className={classes.infoWrap} container  justifyContent='space-around'  spacing={1}>
                {props.ticket.segments.map((segment, index)=>{
                    return (
                        <React.Fragment key={index}>
                            <Grid item xs={4}>
                                <div className={classes.info}>
                                    <Typography variant='h6'>{segment.origin} - {segment.destination}</Typography>
                                    <Typography component='p'>{getDate(segment.date)}</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={classes.info}>
                                    <Typography variant='h6'>В пути</Typography>
                                    <Typography component='p'>{minutesToTime(segment.duration)}</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={classes.info}>
                                    <Typography variant='h6'>{segment.stops.length} пересадки</Typography>
                                    <Typography component='p'>
                                        {segment.stops.length && segment.stops.map((stop)=>{
                                            return (
                                                stop+','
                                            )
                                        })}
                                    </Typography>
                                </div>
                            </Grid>
                        </React.Fragment>
                    )
                })}
            </Grid>
    </Box>
  );
}

export default TicketCard

