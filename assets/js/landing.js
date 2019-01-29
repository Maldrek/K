$(document).ready(function() {

    let first = document.querySelector('.first');
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');

    let firstC = document.querySelector('#container1');
    let secondC = document.querySelector('#container2');
    let thirdC = document.querySelector('#container3');

    let logo = document.querySelector('.logo');


    first.addEventListener('click', function () {
        console.log('CLICKED');
        if (!first.classList.contains('landing-toggle1') && !firstC.classList.contains('landing-toggle1')) {
            first.classList.add('landing-toggle1');
            firstC.classList.add('landing-toggle1');
            second.classList.remove('landing-toggle2');
            third.classList.remove('landing-toggle3');
            thirdC.classList.remove('landing-toggle3');
            secondC.classList.remove('landing-toggle2');
            logo.classList.remove('fadeIn');
            logo.classList.add('fadeOut');
        } else {
            first.classList.remove('landing-toggle1');
            firstC.classList.remove('landing-toggle1');
            logo.classList.remove('fadeOut');
            logo.classList.add('fadeIn');
        }
    });

    second.addEventListener('click', function () {
        console.log('CLICKED');
        if (!second.classList.contains('landing-toggle2')) {
            second.classList.add('landing-toggle2');
            secondC.classList.add('landing-toggle2');
            first.classList.remove('landing-toggle1');
            third.classList.remove('landing-toggle3');
            firstC.classList.remove('landing-toggle1');
            thirdC.classList.remove('landing-toggle3');
            logo.classList.remove('fadeIn');
            logo.classList.add('fadeOut');
        } else {
            second.classList.remove('landing-toggle2');
            secondC.classList.remove('landing-toggle2');
            logo.classList.remove('fadeOut');
            logo.classList.add('fadeIn');
        }
    });

    third.addEventListener('click', function () {
        console.log('CLICKED');
        if (!third.classList.contains('landing-toggle3')) {
            third.classList.add('landing-toggle3');
            thirdC.classList.add('landing-toggle3');
            second.classList.remove('landing-toggle2');
            first.classList.remove('landing-toggle1');
            secondC.classList.remove('landing-toggle2');
            firstC.classList.remove('landing-toggle1');
            logo.classList.remove('fadeIn');
            logo.classList.add('fadeOut');
        } else {
            third.classList.remove('landing-toggle3');
            thirdC.classList.remove('landing-toggle3');
            logo.classList.remove('fadeOut');
            logo.classList.add('fadeIn');
        }
    });


})

