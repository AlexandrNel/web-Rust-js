"use strict";

let characters = [
    ['Строитель',
        'Не выпускает из рук киянку и почти не выходит из дома. Любит строить даже там, где нужно взрывать.',
        'https://thumb.tildacdn.com/tild3161-6331-4430-b836-366666613339/-/format/webp/_.png'
    ],
    ['Комбатер',
        'Вместо школы ходила в тир, а когда отчим подарил ей травмат, окончательно слетела с катушек.',
        'https://static.tildacdn.com/tild3037-3864-4730-b631-636465303535/photo.png'
    ],
    ['Кепка',
        'Он был обычным парнем, но мамина инвалидность внесла свои коррективы. Импульсивен, порой даже слишком',
        'https://static.tildacdn.com/tild6263-3466-4435-a430-633630353333/-.png'
    ],
    ['Клановый игрок',
        'Ежедневно проводит с кланом семь часов по контракту. Обожает турели и вкусно поесть, почти не выходит из дома',
        'https://static.tildacdn.com/tild3462-3834-4134-a339-353230653436/-.png'
    ],
    ['Ютубер',
        'Таскает с собой костюм коровы и старую видеокамеру. Из любой потасовки может сделать контент',
        'https://static.tildacdn.com/tild3539-3366-4033-a430-343661656466/photo.png'
    ],
    ['Лакер',
        'Родился в рубашке, а когда из нее вырос, ничего другого носить не смог. Чрезвычайно удачлив и весьма хорош собой',
        'https://static.tildacdn.com/tild6235-3065-4238-b238-623531396635/photo.png'
    ],
    ['Донатер',
        'Ее батя – настоящий ходячий кошелек, влиятельный тип из Кобальта. Любит большие и громкие пушки',
        'https://static.tildacdn.com/tild3462-6136-4363-a435-343632386462/photo.png'
    ],
    ['Фармила',
        'Не привык к солнечному свету и затяжным разговорам. Нужно что–то сказать – говори только по делу, и давай без глупостей',
        'https://static.tildacdn.com/tild3231-6131-4661-b433-626162363938/photo.png'
    ]
];

let urlInput = document.getElementById("characterImage");
let nameInput = document.getElementById("characterName");
let classInput = document.getElementById("characterDescription");
let newUrlInput = urlInput.value;
let newCharacterName = nameInput.value;
let newCharacterClass = classInput.value;
let charactersContainer = document.getElementById("charactersContainer");
let characterImageLink;

displayHeroes();

function displayHeroes() {
    charactersContainer.innerHTML = '';
    let newCharacter;
    let characterName;
    let characterDescription;
    let characterUrl;
    for (let i = 0; i < characters.length; i++) {
        let characterDiv = document.createElement('div');
        let characterDivImg = document.createElement('div');
        let characterDivWrap = document.createElement('div');
        newCharacter = characters[i];
        characterName = newCharacter[0];
        characterDescription = newCharacter[1];
        characterUrl = newCharacter[2];
        characterDivWrap.classList.add('character');
        charactersContainer.appendChild(characterDivWrap);
        characterDivImg.innerHTML = (`<img src="${characterUrl}" alt="${characterName}">`);
        characterDivImg.classList.add('character__img');
        characterDivWrap.appendChild(characterDivImg);

        characterDiv.innerHTML = (`<h2>${characterName}</h2><p>${characterDescription}</p>`); //
        characterDiv.classList.add('character__text');
        characterDivWrap.appendChild(characterDiv);
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
        newUrlInput = './images/Animated-Avatars/rust-spin.gif'
    }
    if (newCharacterName == 0 & newCharacterClass == 0) {
        noticeName.style.display = 'block';
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterName == 0 & newCharacterClass !== 0) {
        noticeName.style.display = 'block';
        noticeDescription.style.display = 'none';
    }
    else if (newCharacterName !== 0 & newCharacterClass == 0) {
        noticeName.style.display = 'none';
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterClass == 0) {
        noticeDescription.style.display = 'block';
    }
    else if (newCharacterName == 0) {
        noticeName.style.display = 'block';
    }
    else {
        noticeName.style.display = 'none';
        noticeDescription.style.display = 'none';
        let newCharacter = [newCharacterName, newCharacterClass, newUrlInput];
        characters.push(newCharacter);
        displayHeroes();
        nameInput.value = '';
        classInput.value = '';
        urlInput.value = '';
    }
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', addHero);

let videoSource = ['oil-rig', 'dome-monument-landscape', 'forest-night', 'scientists']
let video = document.querySelector('video')
let url = 0;

let changeBackgroundBtn = document.getElementById('changeBackground');
changeBackgroundBtn.addEventListener('click', function () {
    url += 1;
    if (url == videoSource.length) {
        url = 0;
    }
    video.setAttribute('src', `./images/Animated-Backgrounds/${videoSource[url]}.mp4`)
})

