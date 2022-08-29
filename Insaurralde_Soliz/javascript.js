const contenedor =  document.getElementById("cont");
const camino = document.getElementById("cmn");
const comenzar = document.getElementById( "cmzr" );
const mensaje = document.getElementById( "msj" );
const metaFinal = document.getElementById( "mtf" );

let metas = "meta1"

contenedor.addEventListener("mousemove",(x)=>{
    x.target.classList.value == "cuerpo" ?  perdiste():"" 
    x.target.classList.value == metas ? empezarSiguiente(camino.classList.value,metas):1
    x.target.classList.value == "trampa-activado" ? imagenTerror():1
    
})

function siguiente(params) {
    
}
function perdiste( ) {
    mensaje.innerText="Reintentar"
    comenzar.style.zIndex=1;
    document.getElementById('tmp').classList.value = "trampa"
}
function imagenTerror(  ) {
    document.getElementById("img-scream").classList.value = "imagenExorcistea-activado"
    let audio = new Audio("sonido.mp3");
    audio.addEventListener("ended",()=>{
        document.getElementById("img-scream").classList.value="imagenExorcistea-desativado"
        perdiste()
    })
    audio.play()
}
function empezarSiguiente( valor1, valor2 ) {
    console.log(1)
    comenzar.style.zIndex=1;
    if (arguments.length != 0){
        let metaDic = {"meta1":"meta2","meta2":"meta3"} 
        let caminoDic = {"camino1":"camino2","camino2":"camino3"} 
        metas = metaDic[valor2]
        metaFinal.classList.value = metaDic[valor2]
        camino.classList.value = caminoDic[valor1]
        console.log(metaDic[valor2],caminoDic[valor1]);
        if ( valor2 == "meta2" ) {
            document.getElementById('tmp').classList.value = "trampa-activado"
            console.log(31);
        }
    }else if (arguments.length == 0){
        metas = "meta1"
        camino.classList.value = "camino1"
        metaFinal.classList.value = "meta1"
    }
    comenzar.style.zIndex=-1;
}