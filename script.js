// DOM Elements 
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const IdEl = document.getElementById('id');

// initial State 
const initialState = {
    id: 1,
    value: 0,
}

// reducer function 
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
            id: Math.random(state.id),
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
            id: Math.ceil(Math.random(state.id) * 50),
        }
    } else {
        return state;
    }
}

//create store

const store = Redux.createStore(counterReducer);

// clickevent listeners 

incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment'
    })
})
decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    })
})

// for Ui Rendering 

const render = () => {
    const state = store.getState();
    counterEl.innerText = 'Value: ' + state.value.toString();
    IdEl.innerText = 'ID: ' + state.id.toString();
}

render();

store.subscribe(render)