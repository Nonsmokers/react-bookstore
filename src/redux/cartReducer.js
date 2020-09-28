import {ADD_BOOK_TO_CART,REMOVE_BOOK_FROM_CART,CLEAR_CART} from '../actions/actionTypes'

let initialState = {
    items: [
        {
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
        },]
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
        case CLEAR_CART: {
            return {
                ...state,
                items: []
            }
        }
        default:
            return state;
    }
}
export default cartReducer;