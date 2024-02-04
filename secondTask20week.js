//Нам нужно создать приложение, которое будет делать запрос к API и полученную информацию показывать на экране. Пример запроса:

// https://swapi.nomoreparties.co/planets/1 — // планета с идентификатором 1

// То есть в запросе нам нужно передать, какую сущность хотим получить (фильмы, людей, планет starships) и её числовой идентификатор. В API есть по 10 сущностей каждого вида, поэтому идентификатор должен быть от 1 до 10:

// // Attributes:
// films string -- The URL root for Film resources
// people string -- The URL root for People resources
// planets string -- The URL root for Planet resources
// species string -- The URL root for Species resources
// starships string -- The URL root for Starships resources
// vehicles string -- The URL root for Vehicles resources

// И указать числовой идентификатор, он должен быть от 1 до 10 (так как для каждого списка в API всего по 10 сущностей):

// /people/  -- get all the people resources
//   // Пример запроса: https://swapi.dev/api/people
// /people/:id/-- get a specific people resource 
// // Пример запроса: https://swapi.dev/api/people/1/

// Запрос должен уходить на сервер при нажатии на кнопку (нужно добавить обработчик). В разметке HTML должно быть минимум два поля: в первое нужно выводить результат поиска, если данные пришли и всё хорошо, во втором — ошибку, если что-то пошло не так. (Добейтесь, чтобы ваше приложение выводило понятные пользователю сообщения в случае ошибки, например «Сервер не доступен»). Сообщения должны быть видны поочередно, если результат показан, ошибка должна быть сброшена. И наоборот. Обязательно добавьте обработчик ответа: если ответ успешный, следующий обработчик `then` получит объект ответа на вход, если с ответом что-то не так, отклоните промис (для этого верните `Promise.reject` с кодом статуса ответа). Блок `catch` и `finally` использовать обязательно.

// Хороший интерфейс сообщает пользователю, что идёт загрузка надписью «Идёт загрузка» или крутящимся лоадером пока идёт запрос. Если хотите улучшить ваше приложение, то вы можете также реализовать этот функционал.

const answer = document.querySelector('.answer');
const finalAnswer = document.querySelector('.finally');

async function loadData(apiType) {
    const inputNumber = document.querySelector('.inputNumber').value;

    try {
        if (inputNumber < 0 || inputNumber > 10) {
            throw new Error('Введите число от 1 до 10');
        }

        const response = await fetch(`http://swapi.dev/api/${apiType}/${inputNumber}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Объект не найден')
        }

        console.log(data.name);
        answer.innerText = JSON.stringify(data.name);

    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        answer.innerText = `Ошибка! ${error.message}`;
    } finally {
        finalAnswer.innerText = 'Ваш запрос обработан';
    }
}

document.querySelector('.button').onclick = function () {
    const selectedValue = document.getElementById('select').value;
    console.log(selectedValue);

    if (selectedValue === '1') {
        loadData('planets');
    } else if (selectedValue === '2') {
        loadData('vehicles');
    } else if (selectedValue === '3') {
        loadData('species');
    }
};


