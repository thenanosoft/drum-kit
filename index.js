for (i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        pressedButton = this.textContent;

        makeSound(pressedButton);
        buttonAnimation(pressedButton);
    });
}


document.addEventListener('keypress', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case 'w':
            tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector('.' + key).classList.add('pressed');


    setTimeout(() => {
        document.querySelector('.' + key).classList.remove('pressed');
    }, 100);
}