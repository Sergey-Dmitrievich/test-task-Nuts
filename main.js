const scrollBar = document.getElementById('scroll');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
let nowIndicator = 1; 
const myWidth = window.innerWidth
const scrillItem5 = document.getElementById('scrollitem5')
const scrillItem6 = document.getElementById('scrollitem6')

function updateIndicators() {

    i1.classList.remove('--indicator-dark');
    i2.classList.remove('--indicator-dark');
    i3.classList.remove('--indicator-dark');
    i4.classList.remove('--indicator-dark');

    if(myWidth < 500){
      scrillItem6.remove()
      scrillItem5.remove()
    }

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
    if(myWidth > 1000){
        scrollBar.scrollBy({ left: -450, behavior: 'smooth' });
    }
    if(myWidth < 1000 && myWidth > 500){
        scrollBar.scrollBy({ left: -450, behavior: 'smooth' });
    }
    if(myWidth < 500){
        scrollBar.scrollBy({ left: -332, behavior: 'smooth' });
    }
    if (nowIndicator > 1) {
        nowIndicator--; 
        updateIndicators(); 
    }
}

function onRight(){
    console.log('Скролл вправо');
    if(myWidth > 1000){
        scrollBar.scrollBy({ left: 450, behavior: 'smooth' });
    }
    if(myWidth < 1000 && myWidth > 500){
        scrollBar.scrollBy({ left: 450, behavior: 'smooth' });
    }
    if(myWidth < 500){
        scrollBar.scrollBy({ left: 332, behavior: 'smooth' });
    }

    if (nowIndicator < 4) {
        nowIndicator++; 
        updateIndicators(); 
    }
}


updateIndicators();