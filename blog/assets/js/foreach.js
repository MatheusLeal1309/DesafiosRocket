/*Dunção forEach*/
function forEach(array, callbackfn) {
    for (let i = 0; i < array.lenght; i++) {
        callbackfn(array[i], i, array);
    }
}

/*Exemplos de Callback */
const lista = [1, 2, 3];

foreach(lista, (a, b, c) => {
    console.log("value", a);
    console.log("index", b);
    console.log("array", c);
    console.log("============================");
});

const item = lista.find((item) => item === 3);
const itemIndex = lista.findIndex((item) => item === 3);
const itemNum = lista.filter((item) => item !== 3);
const itemInclud = lista.includes(3);
const itemSort = lista.sort((a, b) => {
    return a - b;
});
const itemSortLocale = lista.sort((a, b) => {
    return a.localeCompare(b);
});
const itemReduce = lista.reduce((antigo, atual) => {
    return atual + antigo;
}, 0);

