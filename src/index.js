import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

$(document).ready(function() {
  setMinHeight()
});


$(window).resize(function () {
  waitForFinalEvent(function(){
    setMinHeight()
  }, 500, "some unique string");
});


function setMinHeight() {
  let rootHeight = $('#root').outerHeight();
  let friendsPicWidth = $('#friends-group-img').width();
  let friendsPicHeight = friendsPicWidth/1.23711;
  $('.background-overlay').css('min-height', rootHeight+'px');
  $('.intro-block > div > div:first-child').css('min-height', friendsPicHeight);
}

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
