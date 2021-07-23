import React from 'react';
import Logo from '../images/Logo.svg';
import {makeStyles} from '@material-ui/core/styles'
import { Container, Grid, Theme, } from '@material-ui/core';
import Transfer from './Transfer';
import TicketsContainer from '../components/TicketsContainer';

const useStyles = makeStyles((theme:Theme) => ({
  wrap: {
    background: '#F3F7FA',
  },

  container: {
    maxWidth: 802,
  },

  content: {
    alignItems: 'flex-start'
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
  },

  [theme.breakpoints.down('md')]: {
    logo: {
      marginTop: 10,
      marginBottom: 10
    }
  },

}))

type Props = {
 filters:  Record<string, boolean>,
 onChangeFilter: (target: string, checked: boolean) => void
}

const  AppUi:React.FC<Props> = (props) => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.wrap}>
        <Container className={classes.container}  >
          <Grid container justifyContent='center'  >
            <img className={classes.logo} src={Logo}/>
          </Grid>
          <Grid className={classes.content} container justifyContent='center' spacing={2}  >
            <Grid  container item xs={12} sm={5} md={4}>  
              <Transfer filters={props.filters} onChangeFilter={props.onChangeFilter} />
            </Grid>
            <Grid  container justifyContent='center' item xs={12} sm={7} md={8} >
              <TicketsContainer filters={props.filters} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default AppUi;
