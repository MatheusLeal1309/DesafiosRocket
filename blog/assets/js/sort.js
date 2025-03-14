/*Função de ordenar numeros*/
const array = [1, 4, 6, 2, 7, 8, 2, 4, 8, 3, 4, 8, 90, 1, 6 , 50];

function orderNumber(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    console.log(array);
}

orderNumber(array);