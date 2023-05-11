async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

function mostrarCursos(cursos: Curso[]) {
  cursos.map((arr) => {
    let color;
    if (arr.nivel === "avancado") {
      color = "blue";
    } else if (arr.nivel === "iniciante") {
      color = "green";
    }

    document.body.innerHTML += `<div>
    <h2 style="color:${color}">${arr.nome}</h2>
    <p> Horas: ${arr.horas}</p>
    <p>Aulas: ${arr.aulas}</p>
    </div>`;
  });
}

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  nivel: string;
}

fetchCursos();
