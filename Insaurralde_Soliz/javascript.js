const contenedor =  document.getElementById("cont");
const camino = document.getElementById("cmn");
const comenzar = document.getElementById( "cmzr" );
const mensaje = document.getElementById( "msj" );

let metas = "meta1"

contenedor.addEventListener("mousemove",(x)=>{
    x.target.classList.value == "cuerpo" ?  perdiste():"" 
    x.target.classList.value == metas ? console.log(1):1 
})

function perdiste( ) {
    mensaje.innerText="reintentar"
    comenzar.style.zIndex=1;
}
function empezar( ) {
    metas = "meta1"
    camino.classList.value = "camino1"
    comenzar.style.zIndex=-1;
}