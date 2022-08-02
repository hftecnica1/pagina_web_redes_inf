const adios = document.querySelector(".adios")
const hola = document.querySelector(".hola")

adios.addEventListener("mousemove",(x)=>{
    x.target.classList.value =="adios" ?  console.log("perdiste"):"hola"
})

