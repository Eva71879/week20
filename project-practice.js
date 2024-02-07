const test = document.querySelector('.test');



fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    // test.innerText = JSON.stringify(data);
    console.log(data);
    const imageURL = data.products[0].images[2];
    console.log(data.products[0].images[0]);
    console.log(typeof imageURL);


    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    test.appendChild(imageElement);
})
.catch((error) => console.error('Ошибка:', error));




// const answer = document.querySelector('.answer');
// const finalAnswer = document.querySelector('.finally');

// async function loadData(apiType) {
//     const inputNumber = document.querySelector('.inputNumber').value;

//     try {
//         if (inputNumber < 0 || inputNumber > 10) {
//             throw new Error('Введите число от 1 до 10');
//         }

//         const response = await fetch(`http://swapi.dev/api/${apiType}/${inputNumber}`);
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('Объект не найден')
//         }

//         console.log(data.name);
//         answer.innerText = JSON.stringify(data.name);

//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//         answer.innerText = `Ошибка! ${error.message}`;
//     } finally {
//         finalAnswer.innerText = 'Ваш запрос обработан';
//     }
// }

// document.querySelector('.button').onclick = function () {
//     const selectedValue = document.getElementById('select').value;
//     console.log(selectedValue);

//     switch (selectedValue) {
//         case '1':
//             loadData('planets');
//             break;
//         case '2':
//             loadData ('vehicles');
//             break;
//         case '3':
//             loadData('species');
//             break;
//         default:
//             console.error('Некорректное значение выбора');
//             break;
//     }
// };