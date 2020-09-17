import {ADD_BOOK_TO_CART,REMOVE_BOOK_FROM_CART} from '../actions/actionTypes'

let initialState = {
    items: [{
        "id": 0,
        "title": "1984",
        "author": "Джордж Оруэлл",
        "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_330/129098--.jpg",
        "description": "Джордж Оруэлл (настоящее имя — Эрик А. Блэр), писатель острого, иронического ума, за свою недолгую жизнь создал множество произведений, из которых в нашей стране наиболее известны повесть-притча «Скотный двор» и знаменитый, ставший итогом жизненного и творческого пути своего создателя роман-антиутопия «1984», вошедший в данное издание. Написанный четыре с лишним десятилетия назад, этот роман и сегодня сохраняет свою актуальность.",
        "price": 415,
        "rating": 5
    },
        {
            "id": 1,
            "title": "Девушка в тумане",
            "author": "Донато Карризи",
            "image": "https://s1.livelib.ru/boocover/1002703940/o/be6b/Donato_Karrizi__Devushka_v_tumane.jpeg",
            "description": "Затерянный в Альпах сонный городок, рождественский вечер, туман. От дома, где сияют огни елки и лежат подарки, до празднично украшенной местной церкви, всего триста метров, но в церкви юная Анна Лу так и не появилась… Вездесущие журналисты, фоторепортеры и телевизионщики осаждают городок. Каждый из них жаждет первым сообщить сенсационные новости о ходе расследования. Этим мастерски пользуется спецагент Фогель, привлекая внимание к собственной персоне.",
            "price": 464,
            "rating": 4
        },
        {
            "id": 2,
            "title": "Грокаем алгоритмы",
            "author": "Адитья Бхаргава",
            "image": "https://cv8.litres.ru/pub/c/pdf-kniga/cover_330/39158380-aditya-bhargava-grokaem-algoritmy-illustrirovannoe-posobie-dlya-p-39158380.jpg",
            "description": "Алгоритмы - это всего лишь последовательность решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузиться в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы - это просто. А грокать алгоритмы - это веселое и увлекательное занятие.",
            "price": 246,
            "rating": 4
        },
        {
            "id": 3,
            "title": "Метро 2035",
            "author": "Дмитрий Глуховский",
            "image": "https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_57_223.jpg",
            "description": "Третья мировая стерла человечество с лица Земли. Планета опустела. Мегаполисы обращены в прах и пепел. Железные дороги ржавеют. Спутники одиноко болтаются на орбите. Радио молчит на всех частотах. Выжили только те, кто, услышав сирены тревоги, успел добежать до дверей московского метро. Там, на глубине в десятки метров, на станциях и в туннелях, люди пытаются переждать конец.",
            "price": 837,
            "rating": 4
        },
        {
            "id": 4,
            "title": "Земное притяжение",
            "author": "Татьяна Устинова",
            "image": "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_330/25719119-tatyana-ustinova-zemnoe-prityazhenie.jpg",
            "description": "Их четверо. Летчик из Анадыря; знаменитый искусствовед; шаманка из алтайского села; модная московская художница. У каждого из них своя жизнь, но возникает внештатная ситуация, и эти четверо собираются вместе. Точнее – их собирают для выполнения задания!.. В тамбовской библиотеке умер директор, а вслед за этим происходят странные события – библиотека разгромлена, словно в ней пытались найти все сокровища мира, а за сотрудниками явно кто-то следит.",
            "price": 317,
            "rating": 1
        }],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case REMOVE_BOOK_FROM_CART: {
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            }
        }
        default:
            return state;
    }
}
export default cartReducer;