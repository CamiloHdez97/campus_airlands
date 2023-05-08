import "../js/env.js";
import {Ruta} from "../js/model/Ruta.js";
import {Cliente} from "../js/model/Cliente.js";
import {Flota} from "../js/model/Flota.js";

import "./components/MainMenu.js";
import "./components/footer.js";
import "./components/MainCliente.js";
import "./components/MainRuta.js";
import "./components/MainFlota.js";
import "./components/MainEtiqueta.js";
import "./components/MainEmbarque.js";
import "./components/MainPersonal.js";
import { agregarCliente } from "./controller/cliente.controller.js";



document.querySelectorAll(".nav-link").forEach((val,id) =>{
    val.addEventListener("click", (e)=>{
       let data = JSON.parse(e.target.dataset.verocultar);
        let cardVer = document.querySelector(data[0]);
       cardVer.style.display = 'block';
       data[1].forEach(card => {
          let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        });
        e.stopImmediatePropagation();
        e.preventDefault();
    })
});

