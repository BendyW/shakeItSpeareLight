/**
 * Created by codeforcoffee on 10/7/16.
 */

var app = app || {};
app.buildPoem = poemBuilder;

// higher order function (HOF)
// functional programming term
// a function that takes functions as arguments
// or uses functions to build a single result

function poemBuilder() {
    // second, we need to append these poems to the dom
    console.log('i am a poem builder');
    console.log(app);
    var i = app.inc;
    // poem is stored in app.poems[i]
    var newPoem = new app.Poem(app.poems[i]);
    app.poemElements.push(newPoem);
    app.inc++;
    $('body > div:nth-child(2) > section').append(newPoem.el);
}