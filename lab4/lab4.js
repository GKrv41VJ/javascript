const titleKey = Symbol('title');

class Book {
    // price (цена) приватное
    #price;

    // Конструктор
    constructor(title, pubYear, price) {

        // Инициализация переменных
        this.title = title;
        this._pubYear = pubYear;
        this.#price = price;
    }

    // Вывод заголовка и цены в консоль
    show() {
        console.log(`${this.title}: ${this.#price}`);
    }

    // Геттер Заголовка
    get title() {
        return this[titleKey]
    }
    // Сеттер заголовка с проверкой на пустую строку
    set title(value) {
        if (value === "") {
            throw new Error("Заголовок не должен быть пустой строкой");
        }
        this[titleKey] = value;
    }

    // Геттер для года публикации
    get pubYear() {
        return this._pubYear;
    }
    // Сеттер для года публикации с проверкой на отрицательность
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    // Геттер для цены
    get price() {
        return this.#price;
    }
    // Сеттер для цены с проверкой на отрицательность
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }


    // Статический метод для сравнения книг по году публикации
    static compare(a, b) {
        return a._pubYear - b._pubYear;
    }
}

// Функция для проверки наличия свойств в объекте
function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

// Объект с различными методами
let obj = {
    className: 'open menu',
    // Метод для добавления класса
    addClass: function (cls) {
        // /\s+/ - несколько пробелов подряд, filter(boolean) - true, если элемент не пустой
        let classes = new Set(this.className.split(/\s+/).filter(Boolean));
        classes.add(cls);
        this.className = Array.from(classes).join(' ');
        return this;
    },
    // Метод для удаления класса
    removeClass: function (cls) {
        let classes = new Set(this.className.split(/\s+/).filter(Boolean));
        classes.delete(cls);
        this.className = Array.from(classes).join(' ');
        return this;
    }
};

// Преобразование obj в JSON
const obJson = JSON.stringify(obj, null, 2);
console.log("Объект obj, преобразованный в JSON:");
console.log(obJson);
// Декодирование JSON обратно в объект (obj2), проверка их равенства
const obj2 = JSON.parse(obJson);
console.log("Декодированный объект:", obj2);
console.log("Проверка равенства по className:", obj.className === obj2.className);

// Функция, возвращающая число секунд с начала текущего дня
function getSecondsToday() {
    let timeATM = new Date();
    let today = new Date(timeATM.getFullYear(), timeATM.getMonth(), timeATM.getDate());
    let diff = timeATM - today;
    return Math.floor(diff / 1000);
}

// Функция, форматирующая дату в формат дд.мм.гг
// function formatDate(date) {
//     let day = String(date.getDate()).padStart(2, '0');
//     let month = String(date.getMonth() + 1).padStart(2, '0');
//     let year = String(date.getFullYear()).slice(-2);
//     return `${day}.${month}.${year}`;
// }

function formatDate(date) {
    return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(date);
}