const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 4500,
        discount: 5,
        marks: [4, 3, 3, 5, 3]
    },
    {
        id: 2,
        title: 'ролики',
        price: 700,
        discount: 10,
        marks: [5, 5, 4, 5, 3, 4]
    },
    {
        id: 3,
        title: 'лыжи',
        price: 19010,
        discount: 7,
        marks: []
    },
    {
        id: 4,
        title: 'самокат',
        price: 740,
        discount: 2,
        marks: [5, 5, 5, 4, 5, 3, 4, 5]
    },
    {
        id: 5,
        title: 'сноуборд',
        price: 2700,
        marks: [3, 2, 4]
    }
];

// написать скрипт, который формирует массив из названий товаров (массив из строк)

const result = products.map(({ title }) => title);
console.log(result);


// написать скрипт, который выводит товары (объект со всеми свойствами) дешевле 1000 единиц 
// (!!! без учета скидки)

const result_one = products.filter(({ price }) => price < 1000);
console.log(result_one);


// написать скрипт, который выводит массив с названием товаров, дешевле 1000 единиц 
// (без учета скидки)

const result_two = products
    .filter(({ price }) => price < 1000)
    .map(({ title }) => title);
console.log(result_two);

// написать скрипт, который выводит массив с названием товаров, дешевле 1000 единиц 
// (!!! с учетом скидки)

const result_three = products
    .filter(({ price, discount }) => (price - price * discount / 100) < 1000)
    .map(({ title }) => title);
console.log(result_three);


// написать скрипт, который формирует массив из объектов со свойствами title, price, marks

const result_four = products.map(({ title, price, marks }) => ({ title, price, marks }));
console.log(result_four);

// написать скрипт, который формирует массив из объектов исключив свойство discount

const result_five = products.map(({ discount, ...item }) => item);
console.log(result_five);

// написать скрипт, который формирует массив из объектов со всеми свойствами, кроме discount и с ценой уже с учетом скидки

const result_six = products.map(({ price, discount, ...item }) => ({
    ...item,
    price: price - price * (discount ?? 0) / 100
}))
console.log(result_six);

//  сформировать массив с объектами, у которых свойства title, avg_mark (средняя оценка)
// если оценок нет, то в avg_mark должно быть значение undefined

const result_seven = products.map(({ title, marks }) => ({
    title,
    avg_mark: +(marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2) || undefined
}))
console.log(result_seven);

// написать скрипт, который выводит в консоль товар (объект с данными товара), у которого максимальная цена

const result_eight = products.reduce((a, b) => a.price > b.price ? a : b);
console.log(result_eight);

// написать скрипт, который выводит максимальную цену товара


const result_nine = products.reduce((a, {price}) => a > price ? a : price, 0);
console.log(result_nine);

//======================================================================

const arr = [1, 4, 4, 3, 5, 1, 4, 3, 4, 5, 1, 1];


// создать скрипт, который формирует из данного массива объект, где в качестве ключа выступает элемент массива, а в качестве значения кол-во его повторений в массиве 

// {
//     1: 4,
//     4: 4,
//     3: 2,
//     5: 2
// }


const result_ten = arr.reduce((acc, item) => ({
    ...acc, 
    [item]: acc[item] +1 || 1
}), {})

console.log(result_ten);



