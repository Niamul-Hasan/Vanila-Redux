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

//action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

//action creator

const increment = (inputNum) => {
    return {
        type: INCREMENT,
        payload: inputNum,
    }
};
const decrement = (inputNum) => {
    return {
        type: DECREMENT,
        payload: inputNum,
    }
};


// reducer function 
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
            id: Math.random(state.id),
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
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
    store.dispatch(increment(10));
})
decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(5));
})

// for Ui Rendering 

const render = () => {
    const state = store.getState();
    counterEl.innerText = 'Value: ' + state.value.toString();
    IdEl.innerText = 'ID: ' + state.id.toString();
}

render();

store.subscribe(render)