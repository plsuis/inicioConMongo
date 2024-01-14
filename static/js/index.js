import {eventosHome} from "./eventos/eventosHome.js";
eventosHome()

  /* crearLocal.addEventListener("click", function crearLocal() {
    localStorage.setItem("test", 1);
    console.log(localStorage.getItem("test"));
  });
  borrarLocal.addEventListener("click", function borrarLocal() {
    localStorage.removeItem("test");
  });
  crearSession.addEventListener("click", function crearSession() {
    sessionStorage.setItem("clave", "Jacinto");
    console.log(sessionStorage.getItem("clave"));
  });
  borrarSession.addEventListener("click", function borrarSession() {
    sessionStorage.removeItem("clave");
  });

  envioDatosParams.addEventListener("click", async () => {
    let response = await fetch("/datos/4");
  });
  envioDatosQuery.addEventListener("click", async () => {
    let response = await fetch("/datosquery/?name=Juan&apelido=fernandez");
  });
  reciboDatosGet.addEventListener("click", async () => {
    let response = await fetch("/backEnviaDatos");
    let result = await response.json();
    console.log("datos que envía o back: ", result);
  });
  reciboDatosGet2.addEventListener("click", () => {
    const _fetch = fetch("./backEnviaDatos");

    _fetch
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        //console.log("response é: ", response);
        console.log(`a varible response é: ${response}`);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
*/
  
