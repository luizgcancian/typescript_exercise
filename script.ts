async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}


function mostrarCursos(cursos: Curso) {
    document.body.innerHTML = `
    
    `
}

interface Curso {
    nome: string;
    horas: number;
    aulas: number;
}
