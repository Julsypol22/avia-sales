import React from 'react';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import  Checkbox  from '@material-ui/core/Checkbox';
import {makeStyles, Theme} from '@material-ui/core/styles'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

const useStyles = makeStyles((theme:Theme) => ({

    checkedCheck: {
        color: '#2196F3'
    },

    blankCheck: {
        color: '#9ABBCE'
    },

    checks: {
        cursor: 'pointer',
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        '&:hover': {
            backgroundColor: '#F1FCFF;'
        }
    },

    [theme.breakpoints.down('md')]: {
        checks: {
            '& .MuiTypography-body1': {
                fontSize:'14px'
            }
        }
      },

    [theme.breakpoints.down('sm')]: {
        checks: {
            '& .MuiTypography-body1': {
                fontSize:'14px'
            }
        }
      },
}))

type Props = {
    title: string;
    name: string;
    check: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const CheckBox:React.FC<Props> = (props) => {

    const classes = useStyles();

    return(
        <FormControlLabel
        className={classes.checks} 
          control={
            <Checkbox
                name={props.name}
                checked={props.check}
                icon={<CheckBoxOutlineBlankIcon fontSize='medium' className={classes.blankCheck}/>}
                checkedIcon={<CheckBoxOutlinedIcon fontSize='medium' className={classes.checkedCheck}/>}
                onChange={props.onChange}
          />
          }
          label={props.title}
        />
    )
 }

 export default CheckBox