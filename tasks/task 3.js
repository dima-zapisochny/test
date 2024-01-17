// Написать функцию которая принимает в качестве аргумента массив чисел и возвращает новый массив
// с количеством повторений первоначального массива { число: кол во повторений }
//
// Примеры:
//
// Входной массив: [1, 3, 2, 2, 4, 3, 5, 6, 5] Выходной массив: [{1:1}, {3: 2}, {2:2}, {4:1},{5:2},{6:1}]

function countRepetitionsInArray(arr) {
    return arr.reduce((acc, elem) => {
        const existingElement = acc.find(item => item.hasOwnProperty(elem));

        existingElement ? existingElement[elem]++ : acc.push({ [elem]: 1 });

        return acc;
    }, []);
}