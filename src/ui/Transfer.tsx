import { Box, Grid, Typography, Theme } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import СheckTransfer from '../ui/CheckTransfer';


const useStyles = makeStyles((theme:Theme) => ({
    transfers: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        boxShadow:' 0px 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
    },

    [theme.breakpoints.down('md')]: {
        container: {
          width: '45%'
        },
      },

    heading: {
        paddingLeft: 20,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
        marginBottom: 20
    },

    [theme.breakpoints.down('md')]: {
        heading: {
          textAlign: 'center',
          paddingLeft: 0
        }
      },
    [theme.breakpoints.down('sm')]: {
        heading: {
          textAlign: 'left',
          paddingLeft: 10
        }
      },
}))

type Props = {
  filters:  Record<string, boolean>,
  onChangeFilter: (target: string, checked: boolean) => void
 }

const Transfer:React.FC<Props> = (props) =>  {

    const classes = useStyles();

    return(
        <Grid className={classes.transfers}  container>
            <Box  width='100%'>
                <Typography className={classes.heading} variant='h5' component="p">
                    Количество пересадок
                </Typography>
            </Box>
             <СheckTransfer filters={props.filters} onChangeFilter={props.onChangeFilter} />
        </Grid>
    )
}

export default Transfer