// es6 import style
import $ from 'jquery';

require('./style.scss');


// this is a generator function.
// note the *
function *simpleCounter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

// instantiate generator
const counter = simpleCounter();

setInterval(
  // arrow notation for anonymous function
  () => { $('#main').html(`You've been on this page for ${counter.next().value} seconds.`); }
  , 1000
);
