const scrollBar = document.getElementById('scroll');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
let nowIndicator = 1; 
const myWidth = window.innerWidth;
const scrollItem5 = document.getElementById('scrollitem5');
const scrollItem6 = document.getElementById('scrollitem6');

// Переменные для управления автопрокруткой
let autoScrollTimer = null;
let restartAutoScrollTimer = null;

// Удаляем лишние элементы на мобильных устройствах
if (myWidth < 500) {
    if (scrollItem6) scrollItem6.remove();
    if (scrollItem5) scrollItem5.remove();
}

function updateIndicators() {
    // Убираем активный класс со всех индикаторов
    [i1, i2, i3, i4].forEach(indicator => {
        indicator.classList.remove('--indicator-dark');
    });

    // Добавляем активный класс к текущему индикатору
    const indicators = [i1, i2, i3, i4];
    if (indicators[nowIndicator - 1]) {
        indicators[nowIndicator - 1].classList.add('--indicator-dark');
    }
}

function scrollToPosition(direction, distance) {
    if (myWidth > 1000) {
        scrollBar.scrollBy({ left: direction * 450, behavior: 'smooth' });
    }
     else {
        scrollBar.scrollBy({ left: direction * 332, behavior: 'smooth' });
    }
}

function scrollToStart() {
    if (myWidth > 1000) {
        scrollBar.scrollBy({ left: -1350, behavior: 'smooth' });
    }  
    else {
        scrollBar.scrollBy({ left: -996, behavior: 'smooth' });
    }
}

function scrollToEnd() {
    if (myWidth > 1000) {
        scrollBar.scrollBy({ left: 1350, behavior: 'smooth' });
    } 
    else {
        scrollBar.scrollBy({ left: 996, behavior: 'smooth' });
    }
}

function onLeft() {
    console.log('Скролл влево');
    
    if (nowIndicator === 1) {
        // Циклический переход: с 1-го на 4-й
        nowIndicator = 4;
        scrollToEnd();
    } else {
        scrollToPosition(-1); // Скролл влево
        nowIndicator--;
    }
    updateIndicators();
}

function onRight() {
    console.log('Скролл вправо');
    
    if (nowIndicator === 4) {
        // Циклический переход: с 4-го на 1-й
        nowIndicator = 1;
        scrollToStart();
    } else {
        scrollToPosition(1); // Скролл вправо
        nowIndicator++;
    }
    updateIndicators();
}

function autoScroll() {
    onRight();
}

function startAutoScroll() {
    // Очищаем существующий таймер если он есть
    stopAutoScroll();
    // Запускаем новый таймер
    autoScrollTimer = setInterval(autoScroll, 2000);
}

function stopAutoScroll() {
    // Очищаем основной таймер автопрокрутки
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
    }
    
    // Очищаем таймер перезапуска если он есть
    if (restartAutoScrollTimer) {
        clearTimeout(restartAutoScrollTimer);
        restartAutoScrollTimer = null;
    }
}

function handleUserInteraction() {
    stopAutoScroll();
    // Перезапускаем автопрокрутку через 5 секунд после взаимодействия
    restartAutoScrollTimer = setTimeout(startAutoScroll, 2000);
}

// События для остановки автопрокрутки при наведении мыши
scrollBar.addEventListener('mouseenter', stopAutoScroll);
scrollBar.addEventListener('mouseleave', startAutoScroll);

// События для кнопок навигации
document.querySelector('.conteiner__title__left').addEventListener('click', handleUserInteraction);
document.querySelector('.conteiner__title__right').addEventListener('click', handleUserInteraction);

// Останавливаем автопрокрутку при ручной прокрутке
scrollBar.addEventListener('scroll', () => {
    // Проверяем, была ли прокрутка инициирована пользователем
    if (!autoScrollTimer) {
        handleUserInteraction();
    }
});

// Останавливаем автопрокрутку при касании на мобильных устройствах
scrollBar.addEventListener('touchstart', stopAutoScroll);
scrollBar.addEventListener('touchend', () => {
    restartAutoScrollTimer = setTimeout(startAutoScroll, 2000);
});

// Инициализация
updateIndicators();
startAutoScroll();