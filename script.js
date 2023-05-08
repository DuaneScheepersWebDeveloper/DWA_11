const number = document.querySelector('#number');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');

const countedValue = 1;

const counter = (state, action) => {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'Increment':
      return (state = state + countedValue);
    case 'Decrement':
      return (state = state - countedValue);
    case 'reset':
      return (state = state * 0);
    default:
      return state;
  }
};

const store = Redux.createStore(counter);

const renderValue = () => {
  number.innerHTML = store.getState().toString();
  console.log(store.getState());
};
renderValue();

//subscribe to changes of the state.
store.subscribe(renderValue);

add.addEventListener('click', () => {
  store.dispatch({ type: 'Increment' });
  console.log();
});
subtract.addEventListener('click', () => {
  store.dispatch({ type: 'Decrement' });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
});
