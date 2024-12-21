import {showFullImage} from "./viewFullimageLogic.js"

function divWithImg({ src = "", alt = "Not added" }) {
  //    <div class="card centerImage">
  //     <img src="./images/51.png" alt="" class="png">
  //   </div>
  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("centerImage");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("png");
  div.appendChild(img);
  return div;
}

export default function loadMoreImages({
  container,
  quantity,
  initialNumber,
}) {
    new Array(quantity).fill(undefined).forEach((element,index)=>{
        
        const src = `./images/${initialNumber+index}.png`
        const label = divWithImg({src})
        container.appendChild(label)
        showFullImage(label)
    })
}
