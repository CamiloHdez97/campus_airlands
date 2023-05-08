class MainRuta extends HTMLElement{

    constructor(){
        super();
        this.render();
       // this.agregarAp();
    };

    render(){

        this.innerHTML = /* html */
        `
        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" data-verocultar='["#formularioR",["#tablaR"]]' href="#">Registrar ruta</a>
        </li>
        <li>
          <a id="verA" class="nav-link" href="#" data-verocultar='["#formularioA",["#tablaR"]]'>Registrar Apartamento</a>
        </li>
      </ul>

        <div id="formularioR">
            <h1 class="display-6 m-3">Registrar Torre</h1>
            <form id="frmDataT">
              <div class="container">
                <div class="row g-2">
                  <div class="col-4">
                    <div class="p-2">
                      <label>Numero de la torre</label>
                      <input type="Number" min="0" id="txtNumT" name="txtNumT" class="form-control">    
                    </div>
                </div>
              </div>           
            </form>
              <div class="d-grid gap-2 col-6 mx-auto m-3">
                <button id="btnAddT" class="btn btn-primary btn-lg">Agregar</button>
                <!-- <button class="btn btn-primary btn-lg" onclick="agregarEquipo()">Agregar</button> -->
              </div>
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
customElements.define("main-ruta",MainRuta);