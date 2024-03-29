// Написать функцию которая: учитывает массив несортированных чисел и определяет являются ли числа в массиве последовательными,
// например :
//
// Если массив равен [5, 2, 3, 1, 4] тогда функция должна вернуть true потому что массив содержит последовательные числа от 1 до 5 (1,2,3,4,5)
//
// Если массив равен [34, 23, 52, 12, 3] тогда функция должна возвращать значения  false потому что элементы не являются последовательными.
//
// Если массив равен [7, 6, 5, 5, 3, 4] тогда функция должна возвращать значения false, потому что 5  и 5 не являются последовательными

function areNumbersSequential(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return false;
        }
    }

    return true;
}