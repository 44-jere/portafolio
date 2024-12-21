import {cursosContenedor} from "./index.js"
export function showFullImage(element){
    element.addEventListener("click",e=>{
        const src = e.target.src
        window.open(src, '_blank');
    })
}
cursosContenedor.querySelectorAll("img")
.forEach(element => {
    showFullImage(element)
});