function show(op) {
    let elementoP;
    let elementoSecundario1;
    let elementoSecundario2;
    if (op == 1) {
        elementoP = document.getElementById("porsche_mobile");
        elementoSecundario1 = document.getElementById("mclaren_mobile");
        elementoSecundario2 = document.getElementById("lamborghini_mobile");
        console.log(elementoP);
    }
    else if (op == 2) {
        elementoP = document.getElementById("mclaren_mobile");
        elementoSecundario1 = document.getElementById("porsche_mobile");
        elementoSecundario2 = document.getElementById("lamborghini_mobile");
    }
    else if (op == 3) {
        elementoP = document.getElementById("lamborghini_mobile");
        elementoSecundario1 = document.getElementById("mclaren_mobile");
        elementoSecundario2 = document.getElementById("porsche_mobile");
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