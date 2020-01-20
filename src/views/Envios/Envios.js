import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import sub from "date-fns/sub";
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MUIDataTable from "mui-datatables";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { estados, empresas } from "variables/general.js";

const useStyles = makeStyles(styles);

export default function Envios() {
  const classes = useStyles();
  const [fechaInicio, setFechaInicio] = React.useState(
    sub(new Date(), { days: 1 })
  );
  const [fechaFin, setFechaFin] = React.useState(new Date());

  const handleDateChange = (date, caller) => {
    caller === "inicio" && setFechaInicio(date);
    caller === "fin" && setFechaFin(date);
  };

  const actions = (
    <>
      <EditIcon />
      <DeleteIcon />
      <VisibilityIcon />
    </>
  );

  const columns = [
    "Fecha",
    "# Pedido",
    "Empresa Logística",
    "Estado",
    "Acciones"
  ];

  const options = {
    responsive: "scroll",
    selectableRowsHeader: false,
    selectableRows: "none",
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false
  };

  /* eslint-disable */
  const data = [
    ["04/01/2020", "346523", empresas[0], estados[0], actions],
    ["04/01/2020", "346523", empresas[1], estados[0], actions],
    ["04/01/2020", "346523", empresas[1], estados[2], actions],
    ["04/01/2020", "346523", empresas[3], estados[1], actions],
    ["04/01/2020", "346523", empresas[2], estados[3], actions],
    ["04/01/2020", "346523", empresas[4], estados[0], actions],
    ["04/01/2020", "346523", empresas[0], estados[2], actions],
    ["04/01/2020", "346523", empresas[1], estados[2], actions],
    ["04/01/2020", "346523", empresas[4], estados[0], actions],
    ["04/01/2020", "346523", empresas[0], estados[3], actions],
    ["04/01/2020", "346523", empresas[3], estados[1], actions],
    ["04/01/2020", "346523", empresas[1], estados[1], actions],
    
  ]
  /* eslint-enable */

  return (
    <GridContainer>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <Grid container justify="space-around">
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
          <div className={classes.searchWrapper}>
            <CustomInput
              formControlProps={{
                className: classes.margin + " " + classes.search
              }}
              inputProps={{
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search"
                }
              }}
            />
            <Button color="white" aria-label="edit" justIcon round>
              <Search />
            </Button>
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
      <GridItem xs={12} sm={12} md={12}>
        <MUIDataTable
          title={"resultados"}
          data={data}
          columns={columns}
          options={options}
        />
      </GridItem>
    </GridContainer>
  );
}
