function show(op) {
    let elementoP;
    let elementoSecundario1;
    let elementoSecundario2;
    if (op == 1) {
        elementoP = document.getElementById("porsche");
        elementoSecundario1 = document.getElementById("mclaren");
        elementoSecundario2 = document.getElementById("lamborghini");
    }
    else if (op == 2) {
        elementoP = document.getElementById("mclaren");
        elementoSecundario1 = document.getElementById("porsche");
        elementoSecundario2 = document.getElementById("lamborghini");
    }
    else if (op == 3) {
        elementoP = document.getElementById("lamborghini");
        elementoSecundario1 = document.getElementById("mclaren");
        elementoSecundario2 = document.getElementById("porsche");
    }

    const elemento = elementoP;
    const elementoClasses = elemento.classList;
    const elementoSize = elementoClasses.length;

    for (let i = 0; i < elementoSize; i++) {
        if (elementoClasses[i] == "show") {
            elemento.classList.remove("show");
        } else {
            elemento.classList.add("show");
            elementoSecundario1.classList.remove("show");
            elementoSecundario2.classList.remove("show");
        }
    }
}