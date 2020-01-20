import Dashboard from "@material-ui/icons/Dashboard";
import EmailIcon from "@material-ui/icons/Email";
import ReportIcon from "@material-ui/icons/Report";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardPage from "views/Dashboard/Dashboard.js";
import Envios from "views/Envios/Envios.js";
import Reportes from "views/Reportes/Reportes.js";
import Configuracion from "views/Configuracion/Configuracion.js";

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
  }
];

export default dashboardRoutes;
