"use strict";

// Переменная с почтой
const studentEmail = 'vipman2005@mail.ru'

// Переменная для хранения данных от сервера 
let cards;

// Получение элементов формы
const form = document.forms.addCharacter;
const imageInput = form.elements.characterImage;
const nameInput = form.elements.characterName;
const descriptionInput = form.elements.characterDescription;

//При полной загрузке
fetch(
    `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=`
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // В консоли можно исследовать полученные данные
        cards = data; // Записываем данные в переменную
        displayHeroes(cards); // Функция отрисовки полученных данных
    })
    .catch((error) => console.error("Ошибка:", error));


// Массив с аватарками
const avatars = ['hazmat-blue.gif', 'hazmat.gif', 'rust-rusty.gif', 'rust-spin.gif', 'rust-zoom.gif', 'scientist-idle-blue.gif', 'scientist-idle-red.gif', 'scientist-patrol-blue.gif', 'scientist-patrol-red.gif']

// Объект с начальными персонажами
const characters = [
    {
        name: 'Строитель',
        description: 'Не выпускает из рук киянку и почти не выходит из дома. Любит строить даже там, где нужно взрывать.',
        url: 'https://thumb.tildacdn.com/tild3161-6331-4430-b836-366666613339/-/format/webp/_.png'
    },
    {
        name: 'Комбатер',
        description: 'Вместо школы ходила в тир, а когда отчим подарил ей травмат, окончательно слетела с катушек.',
        url: 'https://static.tildacdn.com/tild3037-3864-4730-b631-636465303535/photo.png'
    },
    {
        name: 'Кепка',
        description: 'Он был обычным парнем, но мамина инвалидность внесла свои коррективы. Импульсивен, порой даже слишком',
        url: 'https://static.tildacdn.com/tild6263-3466-4435-a430-633630353333/-.png'
    },
    {
        name: 'Клановый игрок',
        description: 'Ежедневно проводит с кланом семь часов по контракту. Обожает турели и вкусно поесть, почти не выходит из дома',
        url: 'https://static.tildacdn.com/tild3462-3834-4134-a339-353230653436/-.png'
    },
    {
        name: 'Ютубер',
        description: 'Таскает с собой костюм коровы и старую видеокамеру. Из любой потасовки может сделать контент',
        url: 'https://static.tildacdn.com/tild3539-3366-4033-a430-343661656466/photo.png'
    },
    {
        name: 'Лакер',
        description: 'Родился в рубашке, а когда из нее вырос, ничего другого носить не смог. Чрезвычайно удачлив и весьма хорош собой',
        url: 'https://static.tildacdn.com/tild6235-3065-4238-b238-623531396635/photo.png'
    },
    {
        name: 'Донатер',
        description: 'Ее батя – настоящий ходячий кошелек, влиятельный тип из Кобальта. Любит большие и громкие пушки',
        url: 'https://static.tildacdn.com/tild3462-6136-4363-a435-343632386462/photo.png'
    },
    {
        name: 'Фармила',
        description: 'Не привык к солнечному свету и затяжным разговорам. Нужно что–то сказать – говори только по делу, и давай без глупостей',
        url: 'https://static.tildacdn.com/tild3231-6131-4661-b433-626162363938/photo.png'
    }
];

// Функция отображения пресонажей
displayHeroes();

function displayHeroes() {
    charactersContainer.innerHTML = '';
    for (let i = 0; i < characters.length; i++) {
        let character = `
        <div class="character">
        <div class="character__img">
          <img
            src="${characters[i].url}"
            alt="${characters[i].name}"
          />
        </div>
        <div class="character__text">
          <h2>${characters[i].name}</h2>
          <p>
          ${characters[i].description}
          </p>
        </div>
      </div>
      `;
        charactersContainer.innerHTML += character;
    }
}

// Функция добавления нового персонажа

function addHero() {
    let urlInput = document.getElementById("characterImage");
    let nameInput = document.getElementById("characterName");
    let classInput = document.getElementById("characterDescription");
    let newUrlInput = urlInput.value;
    let newCharacterName = nameInput.value;
    let newCharacterClass = classInput.value;

    let noticeUrl = document.querySelector('.notice__url');
    let noticeName = document.querySelector('.notice__name');
    let noticeDescription = document.querySelector('.notice__desc');

    if (newUrlInput == 0) {

        newUrlInput = `./images/Animated-Avatars/${avatars[Math.round(Math.random() * (avatars.length - 1))]}`

    }
    if (newCharacterName == '' & newCharacterClass == '') {
        noticeName.style.display = 'block';
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterName == '' & newCharacterClass !== '') {
        noticeName.style.display = 'block';
        noticeDescription.style.display = 'none';
    }
    else if (newCharacterName !== '' & newCharacterClass == '') {
        noticeName.style.display = 'none';
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterClass == '') {
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterName == '') {
        noticeName.style.display = 'block';
    }
    else {
        noticeName.style.display = 'none';
        noticeDescription.style.display = 'none';
        let newCharacter = { name: newCharacterName, description: newCharacterClass, url: newUrlInput };
        characters.push(newCharacter);
        displayHeroes();
        if (mobileWidthMediaQuery.matches && buttonBurgerMenu.classList.contains('active')) {
            openAndCloseBurgerMenu();
        }
    }
}

// Получили кнопку добавления персонажа в переменную
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addHero);

// Массив с названиями фонов
const videoSource = ['oil-rig', 'dome-monument-landscape', 'forest-night', 'scientists']
const video = document.querySelector('video')
let url = 0;

const changeBackgroundBtn = document.getElementById('changeBackground');
const changeBackgroundBtnHeader = document.getElementById('changeBackground-header');
changeBackgroundBtn.addEventListener('click', function () {
    url += 1;
    if (url == videoSource.length) {
        url = 0;
    }
    video.setAttribute('src', `./images/Animated-Backgrounds/${videoSource[url]}.mp4`)
})
changeBackgroundBtnHeader.addEventListener('click', function () {
    url += 1;
    if (url == videoSource.length) {
        url = 0;
    }
    video.setAttribute('src', `./images/Animated-Backgrounds/${videoSource[url]}.mp4`)
})

const buttonBurgerMenu = document.querySelector('.burger-lines');

// Функция открытия и закрытия мобильного меню
function openAndCloseBurgerMenu() {
    document.querySelector('.header__form').classList.toggle('opened');
    buttonBurgerMenu.classList.toggle('active');
}

buttonBurgerMenu.addEventListener('click', () => {
    openAndCloseBurgerMenu();
})

const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')
mobileWidthMediaQuery.addEventListener('change', function (event) {
    if (!event.matches && buttonBurgerMenu.classList.contains('active')) {
        openAndCloseBurgerMenu();
    }
})

const audio = document.querySelector('audio')
const soundtracks = ['mp3/01 - Rust - Safe Zone.mp3', 'mp3/02 - Rust - Descent.mp3', 'mp3/03 - Rust - Umbra.mp3', 'mp3/04 - Rust - Closed Circuit.mp3', 'mp3/05 - Rust - Fissure.mp3', 'mp3/06 - Rust - Spaces.mp3', 'mp3/07 - Rust - Legacy.mp3', 'mp3/08 - Rust - Summit.mp3', 'mp3/09 - Rust - Stranded.mp3', 'mp3/10 - Rust - Crest.mp3', 'mp3/11 - Rust - Repose.mp3', 'mp3/12 - Rust - Companion.mp3', 'mp3/13 - Rust - Armored.mp3', 'mp3/14 - Rust - Questions.mp3', 'mp3/15 - Rust - Controller.mp3', 'mp3/16 - Rust - Sunny.mp3', 'mp3/17 - Rust - Calm.mp3', 'mp3/18 - Rust - Bask.mp3', 'mp3/19 - Rust - Wastes.mp3', 'mp3/20 - Rust - Thunder.mp3', 'mp3/21 - Rust - Drop Point.mp3', 'mp3/22 - Rust - Decay.mp3', 'mp3/23 - Rust - Dust.mp3', 'mp3/24 - Rust - Excavator Theme.mp3', 'mp3/25 - Rust - Rev.mp3', 'mp3/26 - Rust - Oil Rig.mp3', 'mp3/27 - Rust - Work Cart.mp3', 'mp3/28 - Rust - Halcyon.mp3', 'mp3/29 - Rust - Windswept.mp3'];



// Автоматическое воспроизведение музыки
audio.addEventListener('ended', function () {
    changeBackgroundMusic();
    playMusic();
})

let g = 0;
function changeBackgroundMusic() {
    if (g === soundtracks.length - 1) {
        g = 0;
    }
    audio.src = `${soundtracks[g]}`;
    g++;
};

// Функция воспроизведения музыки
let playMusic = function () {
    audio.src = `${soundtracks[g]}`;
    audio.autoplay = true;
    audio.volume = 0.1;
}

const equalizer = document.querySelector('.equalizer');
function animationMusic(){
    if (!equalizer.classList.contains('--animation-active')){
        equalizer.classList.add('--animation-active');
    }   else equalizer.classList.remove('--animation-active');
}

// Функция включающая или выключающая музыку, в зависимости от того, выключен звук или нет.
function isMuted() {
    if (audio.volume === 0) {
        audio.volume = 0.1;
        iconMute.setAttribute('hidden', '')
        iconUnmute.removeAttribute('hidden', '')
        animationMusic();
        if (audio.paused) audio.play();
        console.log('Unmuted');
    } else if (audio.volume > 0) {
        audio.volume = 0;
        iconUnmute.setAttribute('hidden', '')
        iconMute.removeAttribute('hidden', '')
        animationMusic();
        console.log('muted')
        console.log(audio.volume)
    }
}
g = Math.floor(Math.random() * (soundtracks.length - 1))
playMusic();
audio.volume = 0;
const iconUnmute = document.querySelector('.unmuted')
const iconMute = document.querySelector('.muted')
const buttonMute = document.getElementById('unmute')
const buttonNextMusic = document.getElementById('changeMusic')

buttonMute.addEventListener('click', function () {
    isMuted();
});

buttonNextMusic.addEventListener('click', function () {
    changeBackgroundMusic();
    playMusic();
    animationMusic();
    if (audio.volume !== 0) {
        iconMute.setAttribute('hidden', '')
        iconUnmute.removeAttribute('hidden', '')
        equalizer.classList.add('--animation-active');
    }
})


// Форма отправки данных о персонаже на сервер
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addButton.disabled = true;
    addButton.textContent = 'Отправляем данные...'
    let newCharacter = {
        image: imageInput.value,
        name: nameInput.value,
        description: descriptionInput.value,
        studentEmail: studentEmail,
    }
    let newCharacterJSON = JSON.stringify(newCharacter);
    console.log(newCharacterJSON);
    fetch('https://api-code.practicum-team.ru/heroes', {
        method: 'POST',
        body: newCharacterJSON,
        headers: { "Content-type": "application/json; charset=UTF-8", },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            form.reset();
        })
        .catch((e) => {
            console.log('Произошла ошибка')
        })

        .finally(() => {
            addButton.disabled = false;
            addButton.textContent = 'Добавить персонажа';
        })
})

