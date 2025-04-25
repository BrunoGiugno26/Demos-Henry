const sumar = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number"){
        return null;
    }
    return a + b;
};

const calcularTotal = (items) =>{

    if(!items.length){
        throw Error("factura invalida");
    }

    let total = 0;

    for(let item of items) total += item.quantity * item.price
    return total
}

module.exports = {
    sumar,
    calcularTotal,
};