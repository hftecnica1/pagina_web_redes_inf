const contenedor =  document.getElementById("cont");
const camino = document.getElementById("cmn");

contenedor.addEventListener("mousemove",(x)=>{
    x.target.classList.value =="container" ?  alert("perdiste"):""
})

