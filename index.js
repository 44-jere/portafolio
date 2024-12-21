export const cursosContenedor = document.getElementById("contenedor-cursos");
const proyectosContenedor = document.getElementById("contenedor-proyectos");


const cursosBTN = document.getElementById("cursos");
const proyectosBTN = document.getElementById("proyectos");
let alreadyFill = false;

async function fillWithImg() {
  const insertMoreCourses = await import("./loadMoreImages.js");

  insertMoreCourses.default({
    container: cursosContenedor,
    quantity: 52 - 10,
    initialNumber: 11,
  });
  alreadyFill = true;
}

proyectosBTN.addEventListener("click", (e) => {
  proyectosContenedor.classList.toggle("expanded");
});

cursosBTN.addEventListener("click", async (e) => {
  cursosContenedor.classList.toggle("expanded");
  if (!alreadyFill) await fillWithImg();
});
