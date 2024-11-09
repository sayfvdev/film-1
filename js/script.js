/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const bgc = document.querySelector(".promo__bg")
bgc.style.background = `url("./img/bg.jpg") center center/cover no-repeat`






const del = document.querySelectorAll('.promo__adv img')
del.forEach((block, idx) => {
    if (idx < 3) {
        block.remove();
    }
});




const t = document.querySelector('.promo__genre')
t.textContent = 'Драма';







const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.forEach((movie, index) => {
    index++
    const listItem = document.createElement('li');
    listItem.textContent = `${index}  ${movie}`;
    movieList.append(listItem);
});
