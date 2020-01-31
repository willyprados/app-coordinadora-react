import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
// Date
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// Switch
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

// Switch
const AntSwitch = withStyles(theme => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);



export const Form = () => {

    //Select
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange1 = event => {
    setCurrency(event.target.value);
  };
    // Date Pickers
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  // Swetch
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <>
        <Typography variant="h6">Title</Typography>
        <GridContainer container justify="space-around" className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className={classes.root}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <TextField
                id="standard-select-currency"
                select
                label="Fuente"
                value={currency}
                onChange={handleChange1}
                helperText="Please select your currency"
            >
                {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
            <TextField
                id="standard-select-currency"
                select
                label="Concepto"
                value={currency}
                onChange={handleChange1}
                helperText="Please select your currency"
            >
                {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>    
        </GridContainer>

        <GridContainer>
            <Grid container justify="space-around" className={classes.root}>
                <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue=" "
                /> 
                <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue=" "
                /> 
                <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>NO</Grid>
                        <Grid item>
                        <AntSwitch
                            checked={state.checkedC}
                            onChange={handleChange('checkedC')}
                            value="checkedC"
                        />
                        </Grid>
                        <Grid item>SI</Grid>
                    </Grid>
                </Typography>
            </Grid>
        </GridContainer>




        
            


        <form className={classes.root} noValidate autoComplete="off">
        <Grid xs={12} sm={12} md={12}>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            
        </Grid>
        </form> 
    </>
  );
}

