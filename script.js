'use strict';

const colomns = document.querySelectorAll('.colomn');

// const page = {
//     colomns: document.querySelectorAll('.colomn'),
// }

function generateRandomColor() {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color;
}

function setRandomColors() {
    const colors = [];

    colomns.forEach(colomn => {
        const color = generateRandomColor();
        const text = colomn.querySelector('.color__name');
        const button = colomn.querySelector('.button');
        const icon = button.querySelector('.fa-solid');
        if (icon.classList.contains('fa-lock')) {
            return;
        }
        colors.push(color);
        text.innerText = color;
        colomn.style.background = color;
        setTextColor(text, color);
        setTextColor(button, color);
    });

    updateColorsHash(colors);
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}


function toggleLock(index) {
    const button = document.querySelector(`[index="${index}"`);
    const icon = button.querySelector('.fa-solid');
    if (icon.classList.contains('fa-lock')) {
        icon.classList.remove('fa-lock');
        icon.classList.add('fa-lock-open');
    } else {
        icon.classList.add('fa-lock');
        icon.classList.remove('fa-lock-open');
    }
}

function copyColorToClick(text) {
    return navigator.clipboard.writeText(text.innerText);
}


// function updateColorsHash(colors = []) {
//     document.location.hash = colors.map(color => 1);
// }

(() => setRandomColors())();