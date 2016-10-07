/**
 * Created by codeforcoffee on 10/7/16.
 */

var app = app || {};
app.poems = [];
app.fetchPoem = fetchPoem;

function fetchPoem() {
    $.ajax({
        url: 'http://shakeitspeare.com/api/poem',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            app.poems.push(data.poem);
        },
        error: function(err) {
            console.log(err);
        }
    });
}