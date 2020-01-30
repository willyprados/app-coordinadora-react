import Dashboard from "@material-ui/icons/Dashboard";
import EmailIcon from "@material-ui/icons/Email";
import ReportIcon from "@material-ui/icons/Report";
import SettingsIcon from "@material-ui/icons/Settings";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DashboardPage from "views/Dashboard/Dashboard.js";
import Envios from "views/Envios/Envios.js";
import Reportes from "views/Reportes/Reportes.js";
import Configuracion from "views/Configuracion/Configuracion.js";
import { Fuente } from "views/Fuente/Fuente.js";
import { Maestro } from "views/Maestro/Maestro.js";
import { Prueba } from "views/Pruebas/Prueba.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/envios",
    name: "Envios",
    icon: EmailIcon,
    component: Envios,
    layout: "/admin"
  },
  {
    path: "/reporte",
    name: "Reporte",
    icon: ReportIcon,
    component: Reportes,
    layout: "/admin"
  },
  {
    path: "/config",
    name: "Configuración",
    icon: SettingsIcon,
    component: Configuracion,
    layout: "/admin"
  },
  {
    path: "/fuente",
    name: "Fuente",
    icon: BorderColorIcon,
    component: Fuente,
    layout: "/admin"
  },
  {
    path: "/maestro",
    name: "Maestro",
    icon: BorderColorIcon,
    component: Maestro,
    layout: "/admin"
  },
  {
    path: "/prueba",
    name: "Prueba",
    icon: BorderColorIcon,
    component: Prueba,
    layout: "/admin"
  }
];

export default dashboardRoutes;
