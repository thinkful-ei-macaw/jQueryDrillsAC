'use strict';
/*eslint-env jquery*/
function main() {
  $('#number-chooser').submit(event => {
    event.preventDefault();

    // get the input number
    let ourNumber = $('input').val();
    // loop from 1 to that number
    for (let i = 1; i <= ourNumber; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        $('.js-results').append(`<div class="fizz-buzz-item">
        <span>${i}</span></div>`);
      } else if (i % 15 === 0) {
        $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span></div>`);
      } else if (i % 3 === 0) {
        $('.js-results').append(`<div class="fizz-buzz-item fizz">
        <span>fizz</span></div>`);
      } else if (i % 5 === 0) {
        $('.js-results').append(`<div class="fizz-buzz-item buzz">
        <span>buzz</span></div>`);
      }
    }
    // -> inside the loop
    
    //    check if current number is fizz, buzz or fizzbuzz

    //    add a div to js-results



  });
}

$(main)