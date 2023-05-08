class MainPersonal extends HTMLElement{

    constructor(){
        super();
        this.render();
    };

    render(){
        this.innerHTML = /* html */
        `

        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" data-verocultar='["#formularioP",["#tablaP"]]' href="#">Registrar Nuevo Personal</a>
        </li>
        <li>
          <a id="verR" class="nav-link" href="#" data-verocultar='["#tablaP",["#formularioP"]]'>Listar Personal</a>
        </li>
      </ul>

        <h1 class="display-6 m-3">Nuevo Personal</h1>
        <div id="formularioP">
        <form id="frmDataPersonal">
          <div class="container">
            <div class="row g-2">
              <div class="col-4">
                <div class="p-2">
                    <label># Documento</label>
                    <input id="txtDocPer" name="txtDocPer" class="form-control">
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
                  <label>Correo</label>
                  <input id="txtEmailP" name="txtEmailP" class="form-control" type="email">    
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Telefono</label>
                  <input type="number" min="0" id="txtTelP" name="txtTelP" class="form-control">
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Profesión</label>
                  <input id="txtProP" name="txtProP" class="form-control">    
                </div>
              </div>

          </div>           
          </form>

          <div class="d-grid gap-2 col-6 mx-auto m-3">
          <button id="btnAddP" class="btn btn-primary btn-lg">Agregar</button>
          <!-- <button class="btn btn-primary btn-lg" onclick="agregarEquipo()">Agregar</button> -->
        </div>
        </div>  
        </div>

        <div id="tablaP" class="container text-center"> 
          <div class="row" id="listaP">
          </div>
        </div>


        `


}
}
customElements.define("main-personal", MainPersonal);