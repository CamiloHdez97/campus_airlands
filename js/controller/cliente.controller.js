//http://localhost:3000/posts

import { Cliente } from "../model/Cliente.js";

function postData(data) {
  let config = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };
  console.log("Realizando Post");
  fetch("http://localhost:3000/clientes", config)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
    
}


function getData() {
    let config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    console.log("Realizando get");

    fetch("http://localhost:3000/clientes", config)
      .then((res) =>  { return res.json()})
      
  }

export function agregarCliente() {
  btnAddCliente.addEventListener("click", (e) => {
    const formC = document.querySelector("#frmDataCliente");
    const formCData = new FormData(formC);
    const dataOk = document.querySelector(".alert-success");
    const dataError = document.querySelector(".alert-danger");

    let objCliente = new Cliente(
      formCData.get("txtDoCli"),
      formCData.get("txtNomCli"),
      formCData.get("txtApeCli"),
      formCData.get("txtTelC"),
      formCData.get("dateNacli"),
      formCData.get("txtCiudadOri"),
      formCData.get("txtPaisOri"),
      formCData.get("txtCorreoCli")
    );

    if (
      formCData.get("txtDoCli") != "" &&
      formCData.get("txtNomCli") != "" &&
      formCData.get("txtApeCli") != ""
    ) {
      postData(objCliente);

      dataOk.style.display = "block";
      setTimeout(function () {
        dataOk.style.display = "none";
        document.getElementById("frmDataCliente").reset();
      }, 2000);
    } else {
      dataError.style.display = "block";
      setTimeout(function () {
        dataError.style.display = "none";
      }, 2000);
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  });
}



export function listarClientes(DatosGet){

    verCliente.addEventListener("click", (e) =>{

         //Limpiar el div listaEquipos rescribiendo en vacio ""
         document.getElementById('listarClientes').innerHTML = "";

         let dataGet = getData();
         console.log(dataGet);

         dataGet.forEach(dataGet => {

             console.table(dataGet);
             let clientesHTML = /* html */
             `
             <div class="col-3 col-md-4 d-flex justify-content-center p-5">
                 <div class="card" style="width: 15rem;">
                     <div class="card-body">
                             <p class="card-text">${DatosGet._doc}</p>
                             <p class="card-text">Fundado: ${DatosGet._name}</p>
                             <p class="card-text">Ubicación: ${DatosGet._lastname}</p>
                             <p class="card-text">Ubicación: ${DatosGet._tel}</p>
                             <p class="card-text">Ubicación: ${DatosGet._fechaN}</p>
                             <p class="card-text">Ubicación: ${DatosGet._ciudadOrigen}</p>
                             <p class="card-text">Ubicación: ${DatosGet._paisOrigen}</p>
                             <p class="card-text">Ubicación: ${DatosGet._correo}</p>

                     </div>
                 </div>
             </div>
             `;

             //Re-escribir la lista
             document.getElementById('listaClientes').innerHTML += clientesHTML;
    
         });

     })

}
