$(document).ready(function () {

    // create array for gif searches
    var topic = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + userInput + "&limit=10&offset=0&rating=G&lang=en";
    var APIkey = "HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I";

    var currentSelection = "";
    var userInput = "";

    function renderButtons(arrayPerm, location) {
        for (var i = 0; i < arrayPerm.length; i++) {
            var a = $("<button>").text(arrayPerm[i]);
            $(location).append(a);
            var c = data("name", arrayPerm[i]);
        }
    }
    renderButtons(topic, "#gifList");

   // $(document).on("click", ".gifClass", function () {
      function renderImage() {
            var b = $(this).data("name");
            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search?api_key=HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I&q=" + b + "&limit=10&offset=0&rating=G&lang=en",
                method: "GET"

            })

        }
        
        $(document).on("click", ".gifClass", renderImage() );

    
});


var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + userInput + "&limit=10&offset=0&rating=G&lang=en";
var APIkey = "HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I";

var currentSelection = "";
var userInput = "";


renderButton(topic);

// $(document).on("click", ".gifClass", function () {
  function renderImage() {
        var b = $(this).data("name");
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I&q=" + b + "&limit=10&offset=0&rating=G&lang=en",
            method: "GET"

        })

    }
    
    $(document).on("click", ".gifClass", renderImage() );


});

// Function to render buttons from array
function renderButton(array){
for (let i = 0; i < array.length; i++) {
    
    var a = $("<button>").text(array[i]);
    $("#gifList").append(a);
}