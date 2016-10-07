var app = app || {};
app.ezFetchPoem = ezFetchPoem;

function ezFetchPoem() {

	$.getJSON('http://shakeitspeare.com/api/poem', function(data) {
        app.poems.push(data.poem);
	});

}


// function fetchPoem() {
//     $.ajax({
//         url: 'http://shakeitspeare.com/api/poem',
//         type: 'get',
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             app.poems.push(data.poem);
//             // call our HOF
//             app.buildPoem();
//         },
//         error: function(err) {
//             console.log(err);
//         }
//     });
// }