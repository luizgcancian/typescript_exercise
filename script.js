"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        mostrarCursos(data);
    });
}
function mostrarCursos(cursos) {
    cursos.map((arr) => {
        let color;
        if (arr.nivel === "avancado") {
            color = "blue";
        }
        else if (arr.nivel === "iniciante") {
            color = "green";
        }
        document.body.innerHTML += `<div>
    <h2 style="color:${color}">${arr.nome}</h2>
    <p> Horas: ${arr.horas}</p>
    <p>Aulas: ${arr.aulas}</p>
    </div>`;
    });
}
fetchCursos();
