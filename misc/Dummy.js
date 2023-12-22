// const moment = require('moment');

const porkCutletImage = require('./img/Pork_Cutlet.webp');

export const dishes = [
    {id: 0, name: "차돌된장찌개", date: '2023-10-13', image: porkCutletImage, price: 5500, allergen: null, available: true},
    {id: 1, name: "남산왕돈까스", date: '2023-10-13', image: null, price: 5000, allergen: null, available: true},
    {id: 2, name: "나가사키라멘", date: '2023-10-13', image: null, price: 5000, allergen: null, available: true},
    {id: 3, name: "돈사태찜", date: '2023-10-13', image: null, price: 5500, allergen: null, available: true},
    {id: 4, name: "참치김치볶음밥*계란후라이", date: '2023-10-13', image: null, price: 5500, allergen: null, available: true},
];

export const morningDish = {
  id: 1,
  name: "소고기미역국",
  date: "2023-10-13",
  image: null,
  price: null,
  allergen: null,
  available: true,
};

export const EmployeeDishes = {
    id: 1,
    menu: [
        "사골만둣국",
        "잡채말이어묵",
        "콩나물무침",
        "무말랭이무침",
        "쌀밥/잡곡밥",
        "배추김치",
    ],
    date: "2023-10-13",
    image: null,
    price: null,
    allergen: null,
    available: true,
  };

export const ranking = {
  type: 'daily',
  data: [
    { rank: 1, name: '옛날돈까스', likes: 240 },
    { rank: 2, name: '짜장면', likes: 237 },
    { rank: 3, name: '짬뽕', likes: 234 },
  ]
}