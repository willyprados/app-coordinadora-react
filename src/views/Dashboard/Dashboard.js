import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccessTime from "@material-ui/icons/AccessTime";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { deliveryDays } from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <OpenInBrowserIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Pedidos en recogidos</p>
              <h3 className={classes.cardTitle}>
                115 <small>Paquetes</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>Lun - Sab</div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <LocalShippingIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Pedidos en Camino</p>
              <h3 className={classes.cardTitle}>
                97 <small>Paquetes</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>Lun - Sab</div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={deliveryDays.data}
                type="Bar"
                options={deliveryDays.options}
                responsiveOptions={deliveryDays.responsiveOptions}
                listener={deliveryDays.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Pedidos entregados</h4>
              {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Gráfica de pedidos entregados durante la semana
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
