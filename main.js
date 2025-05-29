const scrollBar = document.getElementById('scroll');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
let nowIndicator = 1; // Присваиваем начальное значение

function updateIndicators() {
    // Сбрасываем класс у всех индикаторов
    i1.classList.remove('--indicator-dark');
    i2.classList.remove('--indicator-dark');
    i3.classList.remove('--indicator-dark');
    i4.classList.remove('--indicator-dark');

    // Добавляем класс активному индикатору
    if (nowIndicator === 1) {
        i1.classList.add('--indicator-dark');
    } else if (nowIndicator === 2) {
        i2.classList.add('--indicator-dark');
    } else if (nowIndicator === 3) {
        i3.classList.add('--indicator-dark');
    } else if (nowIndicator === 4) {
        i4.classList.add('--indicator-dark');
    }
}

function onLeft(){
    console.log('Скролл влево');
    scrollBar.scrollBy({ left: -450, behavior: 'smooth' });

    if (nowIndicator > 1) {
        nowIndicator--; // Уменьшаем счетчик индикатора
        updateIndicators(); // Обновляем индикаторы
    }
}

function onRight(){
    console.log('Скролл вправо');
    scrollBar.scrollBy({ left: 450, behavior: 'smooth' });

    if (nowIndicator < 4) {
        nowIndicator++; // Увеличиваем счетчик индикатора
        updateIndicators(); // Обновляем индикаторы
    }
}

// Инициализация индикаторов при загрузке
updateIndicators();