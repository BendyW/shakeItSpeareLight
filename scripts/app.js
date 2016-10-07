/**
 * Created by codeforcoffee on 10/7/16.
 */

var app = app || {};
var game = game || {};
// gobally defined up here
// a common namespace to store
// everything about our game
app.score = 0;
app.playerName = window.prompt('What is your name');

$(document).ready(function(event) {
    console.log('document.ready');
    console.log(event);
    console.log(app);
});

window.onload = function(event) {
    console.log('window onload');
    console.log(event);
    console.log(app);
};
