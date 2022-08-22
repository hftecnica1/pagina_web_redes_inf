const contenedor =  document.getElementById("cont");
const camino = document.getElementById("cmn");
const comenzar = document.getElementById( "cmzr" );
const mensaje = document.getElementById( "msj" );
const metaFinal = document.getElementById( "mtf" );

let metas = "meta1"

contenedor.addEventListener("mousemove",(x)=>{
    x.target.classList.value == "cuerpo" ?  perdiste():"" 
    x.target.classList.value == metas ? empezarSiguiente(camino.classList.value,metas):1 
})

function siguiente(params) {
    
}
function perdiste( ) {
    mensaje.innerText="reintentar"
    comenzar.style.zIndex=1;
}
function empezarSiguiente( valor1, valor2 ) {
    comenzar.style.zIndex=1;
    if (arguments.length != 0){
        let metaDic = {"meta1":"meta2","meta2":"meta3"} 
        let caminoDic = {"camino1":"camino2","camino2":"camino3"} 
        metas = metaDic[valor2]
        metaFinal.classList.value = metaDic[valor2]
        camino.classList.value = caminoDic[valor1]
        console.log(metaDic[valor2],caminoDic[valor1]);
    }else{
        metas = "meta1"
        camino.classList.value = "camino1"
        metaFinal.classList.value = "meta1"
    }
    comenzar.style.zIndex=-1;
}