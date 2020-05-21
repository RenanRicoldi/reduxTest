import { createStore, combineReducers } from 'redux'

const INITIAL_STATE = {
    data: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'RN',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'RJS',
        }
    ]
}

// função que é o reducer dos cursos, recebe uma action e dependendo de seu tipo atualiza algo na store
function courses(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_COURSE':
            return { ...state, data: [ ...state.data, action.payload ] }
        default:
            return state
    }
}

// função que é o reducer dos dias, recebe uma action e dependendo de seu tipo atualiza algo na store
function days(state = { data:[] }, action) {
    switch(action.type) {
        case 'ADD_DAY':
            return { ...state, data: [ ...state.data, action.payload ] }
        default:
            return state
    }
}

// Cria uma store com a combinação dos reducers existentes
const store = createStore(combineReducers({courses, days}))

export default store