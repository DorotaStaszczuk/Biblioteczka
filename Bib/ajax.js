$.ajax({
    url: "http://localhost:8000/book/",
    data: {},
    type: "GET",
    dataType: "json"
}).done(function(result) {

    displayRequest(result);

}).fail(function(xhr,status,err) {
    alert( "Sorry, there was a problem!" );
}).always(function(xhr,status) {
    alert( "The request is complete!" );
});


function displayRequest(res) {
    console.log(res);
}