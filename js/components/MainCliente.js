import {agregarCliente, listarClientes} from "../controller/cliente.controller.js";

class MainCliente extends HTMLElement{

    constructor(){
        super();
        this.render();
        this.saveData();
        this.verData();
    };

    render(){

        this.innerHTML = /* html */
        `
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" data-verocultar='["#formularioCli",["#tablaCli"]]' href="#">Registrar Nuevo Clientes</a>
          </li>
          <li>
            <a id="verCliente" class="nav-link" href="#" data-verocultar='["#tablaCli",["#formularioCli"]]'>Listar Clientes</a>
          </li>
        </ul>

        <h1 class="display-6 m-3">Nuevo Cliente</h1>
        <div id="formularioCli">
            <form id="frmDataCliente">
              <div class="container">
                <div class="row g-2">

                  <div class="col-4">
                      <div class="p-2">
                          <label># Documento</label>
                          <input type="number" min="0" id="txtDoCli" name="txtDoCli" class="form-control">
                      </div>
                  </div>

                    <div class="col-4">
                        <div class="p-2">
                            <label>Nombre</label>
                            <input id="txtNomCli" name="txtNomCli" class="form-control">
                        </div>
                  </div>

                    <div class="col-4">
                        <div class="p-2">
                            <label>Apellido</label>
                            <input id="txtApeCli" name="txtApeCli" class="form-control">
                        </div>
                  </div>

                  <div class="col-6">
                    <div class="p-2">
                      <label>Telefono</label>                
                      <input type="number" min="0"  id="txtTelC" name="txtTelC" class="form-control">               
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="p-2">
                      <label>Fecha de Nacimiento</label>
                      <input type="date" id="dateNacli" name="dateNacli" class="form-control">
                    </div> 
                  </div> 

                  <div class="col-6">
                    <div class="p-2">
                      <label>ciudad Origen</label>
                      <input id="txtCiudadOri" name="txtCiudadOri" class="form-control">
                    </div>
                  </div> 


                  <div class="col-6">
                    <div class="p-2">
                      <label>País de Origen</label>
                      <input id="txtPaisOri" name="txtPaisOri" class="form-control">
                    </div>
                  </div> 


                  <div class="col-6">
                    <div class="p-2">
                      <label>Correo</label>
                      <input id="txtCorreoCli" name="txtCorreoCli" class="form-control">    
                    </div>
                  </div>

              </div>           
            </form>
                <div class="d-grid gap-2 col-6 mx-auto m-3">
                  <button id="btnAddCliente" class="btn btn-primary btn-lg">Agregar</button>
                  <!-- <button class="btn btn-primary btn-lg" onclick="agregarEquipo()">Agregar</button> -->
                </div>
        </div>  
        </div>


        <div id="tablaCli" class="container text-center"> 
          <div class="row" id="listarClientes">
          </div>
        </div>

        `

}

saveData(){

  agregarCliente();

}

verData(){

  listarClientes();

}

}
customElements.define("main-cliente", MainCliente);

