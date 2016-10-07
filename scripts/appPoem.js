/**
 * Created by codeforcoffee on 10/7/16.
 */

var app = app || {};
app.Poem = Poem;

// in other languages, this is a 'class'
// a constructor is a function that blueprints objects
// think of it as an object factory
// hint: this is a new design pattern
// "Factory" pattern
function Poem (poemText) {
    this.el = $('<article>');
    this.poem = poemText;
    $(this.el).html(poemText);
    console.log(this.el);
}

var firstPoem = new Poem('such sweet sweet sorrow');
console.log(firstPoem);