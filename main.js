function show(){
    const elemento = document.getElementById("porsche");
    const elementoClasses = elemento.classList;
    const elementoSize = elementoClasses.length;

    console.log(elementoSize);
    for(let i = 0; i<elementoSize; i++){
        if(elementoClasses[i] == "show"){
            elemento.classList.remove("show");
        }else{
            elemento.classList.add("show");
        }
        console.log("tes");
    }

    // if(elementoClasses) elemento.classList.add("show");
    // else elemento.className += " show";
    // console.log(elemento.classList);
}