class MainEtiqueta extends HTMLElement{

    constructor(){
        super();
        this.render();
    };

    render(){
        this.innerHTML = /* html */
        `

        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" data-verocultar='["#formularioR",["#tablaR"]]' href="#">Registrar Nuevo Residente</a>
        </li>
        <li>
          <a id="verR" class="nav-link" href="#" data-verocultar='["#tablaR",["#formularioR"]]'>Listar Residentes</a>
        </li>
      </ul>

        <h1 class="display-6 m-3">Residente</h1>
        <div id="formularioR">
        <form id="frmDataR">
          <div class="container">
            <div class="row g-2">
              <div class="col-4">
                <div class="p-2">
                    <label>Torre</label>
                    <select id="selTorreR" name="selTorreR" class="form-control"></select>
                </div>
             </div>

                <div class="col-4">
                    <div class="p-2">
                        <label>Apartamento</label>
                        <select id="txtApartR" name="selApartR" class="form-control"></select>
                    </div>
              </div>

                <div class="col-4">
                    <div class="p-2">
                        <label>Piso</label>
                        <select id="selPisoR" name="selPisoR" class="form-control"></select>
                    </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Documento de Identidad</label>
                  <input type="number" min="0" id="txtIdR" name="txtIdR" class="form-control">
                </div>
              </div> 

              <div class="col-6">
                <div class="p-2">
                  <label>Nombre</label>
                  <input id="txtNomR" name="txtNomR" class="form-control">    
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Apellido</label>
                  <input id="txtApeR" name="txtApeR" class="form-control" type="email">
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Telefono</label>                
                  <input type="number" min="0"  id="txtTelR" name="txtTelR" class="form-control">               
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Correo</label>
                  <input id="txtCorreoR" name="txtCorreoR" class="form-control">
                </div>
              </div> 

              <div class="col-6">
                <div class="p-2">
                  <label>Fecha de Ingreso</label>
                  <input type="date" id="dateFechaIngR" name="dateFechaIngR" class="form-control">
                </div> 
              </div> 

              <div class="col-6">
                <div class="p-2">
                  <label>Matrícula del Vehículo</label>
                  <input id="txtPlacaR" name="txtPlacaR" class="form-control">    
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                    <label>¿Tiene Mascota?</label>
                    <select id="txtMascotaR" name="txtMascotaR" class="form-control">
                        <option value="SI">Si</option>
                        <option value="NO">No</option>
                    </select>
                </div>
            </div>

          </div>           
          </form>

          <div class="d-grid gap-2 col-6 mx-auto m-3">
          <button id="btnAddR" class="btn btn-primary btn-lg">Agregar</button>
          <!-- <button class="btn btn-primary btn-lg" onclick="agregarEquipo()">Agregar</button> -->
        </div>
        </div>  
        </div>

        <div id="tablaR" class="container text-center"> 
          <div class="row" id="listaR">
          </div>
        </div>


        `


}
}
customElements.define("main-etiqueta", MainEtiqueta);