// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

const estados = ["Entregado", "Enviado", "Por Entregar", "Anulado"];

const empresas = ["Servientrega", "Coordinadora", "Deprisa", "DHL", "FedEx"];

// Fuente
const idUser = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

const programacion = ["Recibido", "Armando pedido", "Despachado", "Entregado", "Anulado"];

const garantia = [" ", "Solicitud", "Recogido", "En el taller", "Despachado", "Entregado"];

const devolucion = [" ", "Solicitud", "Procesado"];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  estados,
  empresas,
  programacion,
  garantia,
  devolucion,
  idUser
};
