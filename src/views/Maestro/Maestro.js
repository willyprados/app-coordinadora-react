import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import MUIDataTable from "mui-datatables";
// import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { idUser } from "variables/general.js";
import { dataUser } from "variables/charts.js";
import { ButtonModal } from "components/Button/ButtonModal.js"

// const useStyles = makeStyles(styles);

export const Maestro = () => {

    const columns = [
        "ID",
        "Cliente",
        "Dirección",
        "Teléfono",
        "Ciudad",
        "Fuente",
        "Concepto"
      ];


      const options = {
        responsive: "scrollMaxHeight",
        selectableRowsHeader: false,
        selectableRows: "none",
        filter: false,
        search: false,
        print: false,
        download: false,
        viewColumns: false,
        customToolbar: () => {
          return (
            <ButtonModal/>
          );
        }
      };

      const data = [
        [idUser[0], dataUser.results[0].name, dataUser.results[0].address, dataUser.results[0].phone, dataUser.results[0].city, " "],
        [idUser[1], dataUser.results[1].name, dataUser.results[1].address, dataUser.results[1].phone, dataUser.results[1].city, " "],
        [idUser[2], dataUser.results[2].name, dataUser.results[2].address, dataUser.results[2].phone, dataUser.results[2].city, " "],
        [idUser[3], dataUser.results[3].name, dataUser.results[3].address, dataUser.results[3].phone, dataUser.results[3].city, " "],
        [idUser[4], dataUser.results[4].name, dataUser.results[4].address, dataUser.results[4].phone, dataUser.results[4].city, " "],
        [idUser[5], dataUser.results[5].name, dataUser.results[5].address, dataUser.results[5].phone, dataUser.results[5].city, " "],
        [idUser[6], dataUser.results[0].name, dataUser.results[0].address, dataUser.results[0].phone, dataUser.results[0].city, " "],
        [idUser[7], dataUser.results[1].name, dataUser.results[1].address, dataUser.results[1].phone, dataUser.results[1].city, " "],
        [idUser[8], dataUser.results[2].name, dataUser.results[2].address, dataUser.results[2].phone, dataUser.results[2].city, " "],
        [idUser[9], dataUser.results[3].name, dataUser.results[3].address, dataUser.results[3].phone, dataUser.results[3].city, " "],
        [idUser[0], dataUser.results[4].name, dataUser.results[4].address, dataUser.results[4].phone, dataUser.results[4].city, " "],
        [idUser[1], dataUser.results[5].name, dataUser.results[5].address, dataUser.results[5].phone, dataUser.results[5].city, " "],
        
      ]

    return(
        <GridItem xs={12} sm={12} md={12}>
            <MUIDataTable
            title={"Pedidos"}
            data={data}
            columns={columns}
            options={options}
            />
        </GridItem>
    )
}