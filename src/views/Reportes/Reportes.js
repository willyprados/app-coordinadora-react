import React from "react";
import "date-fns";
import sub from "date-fns/sub";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { estados, empresas } from "variables/general.js";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

// const useStyles = makeStyles(styles);

export default function Reportes() {
  const classes = useStyles();
  const [fechaInicio, setFechaInicio] = React.useState(
    sub(new Date(), { days: 1 })
  );
  const [fechaFin, setFechaFin] = React.useState(new Date());
  const [estado, setEstado] = React.useState(-1);
  const [empresa, setEmpresa] = React.useState(-1);

  const handleDateChange = (date, caller) => {
    caller === "inicio" && setFechaInicio(date);
    caller === "fin" && setFechaFin(date);
  };

  const handleEstadoChange = e => {
    const key = e.target.value;
    setEstado(key);
  };

  const handleEmpresaChange = e => {
    const key = e.target.value;
    setEmpresa(key);
  };
  // const classes = useStyles();
  return (
    <GridContainer>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <KeyboardDatePicker
          margin="normal"
          id="fecha-inicio"
          label="Fecha Inicio"
          format="dd/MM/yyyy"
          value={fechaInicio}
          onChange={date => handleDateChange(date, "inicio")}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="fecha-fin"
          label="Fecha Fin"
          format="dd/MM/yyyy"
          value={fechaFin}
          onChange={date => handleDateChange(date, "fin")}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            id="demo-simple-select"
            value={estado}
            onChange={handleEstadoChange}
          >
            {estados.map((estado, key) => (
              // eslint-disable-next-line react/jsx-key
              <MenuItem key={key} value={key}>
                {estado}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
          <Select
            id="demo-simple-select"
            value={empresa}
            onChange={handleEmpresaChange}
          >
            {empresas.map((empresa, key) => (
              // eslint-disable-next-line react/jsx-key
              <MenuItem key={key} value={key}>
                {empresa}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </MuiPickersUtilsProvider>
    </GridContainer>
  );
}
