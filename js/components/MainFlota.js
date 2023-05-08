class MainFlota extends HTMLElement{

  constructor(){
    super();
    this.render();
  };

    render(){

      this.innerHTML = /* html */

      `
      <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" data-verocultar='["#formularioRE",["#tablaRE"]]' href="#">Nueva Reservación</a>
      </li>
      <li>
        <a id="verE" class="nav-link" href="#" data-verocultar='["#tablaRE",["#formularioRE"]]'>Listar Torres/Apartamentos</a>
      </li>
    </ul>

      <div id="formularioRE">
          <h1 class="display-6 m-3">Nueva Reservación</h1>
          <form id="frmDataRE">
            <div class="container">
              <div class="row g-2">

              <div class="col-6">
                  <div class="p-2">
                    <label>Torre</label>
                    <select type="Number" min="0" id="selNumTRE" name="selNumTRE" class="form-control"></select> 
                  </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Selecciones el Espacio</label>
                  <select type="Number" min="0" id="" name="selZoneRE" name="selZoneRE" class="form-control"></select>
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Tipo de Evento</label>
                  <select type="Number" min="0" id="selTRE" name="selTRE" class="form-control">
                    <option value="0">SOCIAL</option>
                    <option value="1">ADMINISTRATIVO</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Día del Evento</label>
                  <input type="date" min="0" id="txtDiaRE" name="txtDiaRE" class="form-control">
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Hora Inicio</label>
                  <input type="time" min="0" id="txtTimeIRE" name="txtTimeRE" class="form-control">
                </div>
              </div>

              <div class="col-6">
                <div class="p-2">
                  <label>Hora de Finalización</label>
                  <input type="time" min="0" id="txtTimeFRE" name="txtTimeFRE" class="form-control">
                </div>
            </div>

            </div>           
            </form>
            <div class="d-grid gap-2 col-6 mx-auto m-3">
            <button id="btnAddRE" class="btn btn-primary btn-lg">Agregar</button>
            <!-- <button class="btn btn-primary btn-lg" onclick="agregarEquipo()">Agregar</button> -->
          </div>
        </div>  
      </div>

      <div id="tablaRE" class="container text-center"> 
        <div class="row" id="listaRE">
      </div>

    </div>

      `;

    }




}
customElements.define("main-flota",MainFlota)