class MainMenu extends HTMLElement{

  constructor(){
      super();
      this.render();
  };

  render(){
      
      this.innerHTML = /* html */
      `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><img src="img/logoPrincipal-xl.png" width="50px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpClientes",["#grpRutas","#grpFlotas","#grpEtiqueta","#grpEmbarque","#grpPersonal"]]'>Gestión Clientes</a></li>
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpRutas",["#grpClientes","#grpFlotas","#grpEtiqueta","#grpEmbarque","#grpPersonal"]]'>Gestión Rutas</a></li>
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpFlotas",["#grpClientes","#grpRutas","#grpEtiqueta","#grpEmbarque","#grpPersonal"]]'>Gestión Flota Aerea</a></li>
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpEtiqueta",["#grpClientes","#grpFlotas","#grpRutas","#grpEmbarque","#grpPersonal"]]'>Gestión Etiqueta</a></li>
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpEmbarque",["#grpClientes","#grpFlotas","#grpEtiqueta","#grpRutas","#grpPersonal"]]'>Gestión Embarque</a></li>
              <li class="nav-item">
                  <a class="nav-link" data-verocultar='["#grpPersonal",["#grpClientes","#grpFlotas","#grpEtiqueta","#grpEmbarque","#grpRutas"]]'>Gestión Personal</a></li>    
          </ul>      
        </div>
      </div>
    </nav>
      `
  }
}
customElements.define("main-menu",MainMenu);