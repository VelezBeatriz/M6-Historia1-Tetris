//Recojo la fecha del momento
let currentDate = new Date();
//Formateo la fecha del momento al sistema español
let formatDate = currentDate.toLocaleDateString("es-Es");

//Datos de los usuarios
const partidas = [
  {
    avatar:
      "https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",
    nick: "BEA",
    puntos: "-10000",
    fecha: formatDate,
  },
  {
    avatar: "https://www.svgrepo.com/show/75578/avatar.svg",
    nick: "PACO",
    puntos: "985",
    fecha: formatDate,
  },
  {
    avatar:
      "https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",
    nick: "KIKO",
    puntos: "98584956",
    fecha: formatDate,
  },
];

//Datos de un usuario random
const datosEjemploPartida = {
  avatar:
    "https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",
  nick: "MANUEL",
  puntos: 100,
  fecha: "21 MAYO 2023",
};

//------------------------------- FUNCIONES --------------------------------------------------------------
//Función que se encarga de Pintar el Ranking
function pintaRanking() {
  let tableRanking = `<h2 class="text-center text-light">Ranking</h2>
          <table class="table table-dark align-middle">
            <theader>
              <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </theader>
            <tbody>							
            </tbody>
            <tfoot></tfoot>
          </table>`;

  const locateRanking = (document.querySelector("#ranking").innerHTML =
    tableRanking);
}

//Funcion que se encarga de Pintar la Tabla de usuarios
function pintaTabla(datos) {
  //Declarar variable para guardar el contenido de la Tabla
  let rellenarTabla = "";

  //Recorrer el elemento recibido, en este caso las partidas y pintar la filas segun los elementos recibidos
  datos.forEach((element) => {
    rellenarTabla += `<tr>
                  <td><img  width=50 src="${element.avatar}" alt="avatar" /></td>
                  <td>${element.nick}</td>
                  <td>${element.puntos}</td>
                  <td>${element.fecha}</td>
              </tr>`;
  });

  //Crear un elemento final con los theader y añadir las filas de los usuarios para no pisar etiquetas
  let tableGames = `<h2 class="text-center text-light">Partidas</h2>
      <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Buscador" aria-label="Buscador"
              aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">
              <i class="bi bi-x-lg"></i>
          </button>
      </div>
      <table class="table table-dark">
          <theader>
              <tr>
                  <td></td>
                  <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                  <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                  <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
              </tr>
          </theader>
          <tbody>`;

  tableGames += rellenarTabla;

  tableGames += `</tbody>
          <tfoot></tfoot>
      </table>`;

  //Imprimir la tabla con datos
  const locatePartidas = (document.querySelector("#partidas").innerHTML =
    tableGames);
}

function insertaNuevaPartida(datosEjemploPartida) {
  // console.log(datosEjemploPartida.avatar);
  // console.log(datosEjemploPartida.nick);
  // console.log(datosEjemploPartida.puntos);
  // console.log(datosEjemploPartida.fecha);

  // Agregar la partida de user a todas
  partidas.push(datosEjemploPartida);
  //console.log(partidas);s

  console.log("~~ Partida Guardada ~~");
}

//Funcion que se encarga de pintar los nuevos datos
function pintaDatosPartida(datosEjemploPartida) {
  let verificar = confirm(
    "Estos son tus datos:\n -" +
      datosEjemploPartida.nick +
      "\n -" +
      datosEjemploPartida.puntos +
      "\n -" +
      datosEjemploPartida.fecha +
      "\n -" +
      datosEjemploPartida.avatar +
      "\n ¿Deseas guardar estos datos?"
  );

  if (verificar) {
    //console.log("~~ Partida Guardada ~~");
    insertaNuevaPartida(datosEjemploPartida);
    pintaTabla(partidas);
  } else {
    // console.log("~~ Partida NO Guardada ~~");
    pintaTabla(partidas);
  }
}

//------------------------------- LLAMADA DE FUNCIONES --------------------------------------------------------------
pintaRanking();
pintaDatosPartida(datosEjemploPartida);
