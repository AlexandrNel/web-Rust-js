"use strict";

const avatars = ['hazmat-blue.gif', 'hazmat.gif', 'rust-rusty.gif', 'rust-spin.gif', 'rust-zoom.gif', 'scientist-idle-blue.gif', 'scientist-idle-red.gif', 'scientist-patrol-blue.gif', 'scientist-patrol-red.gif']
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
        nameInput.value = '';
        classInput.value = '';
        urlInput.value = '';
    }
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addHero);

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
buttonBurgerMenu.addEventListener('click', () => {
    document.querySelector('.header__inputs').classList.toggle('opened');
    buttonBurgerMenu.classList.toggle('active');
})

const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')
console.log(mobileWidthMediaQuery)
mobileWidthMediaQuery.addEventListener('change', function (event) {
    if (!event.matches && buttonBurgerMenu.classList.contains('active')){
        document.querySelector('.header__inputs').classList.toggle('opened');
        buttonBurgerMenu.classList.toggle('active');
    }
  })