$(document).ready(function () {

// global variables, var topic Array for initial buttons and selections get added to the list
    var topics = ["robots", "cats", "banana"];
    var APIkey = "HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I";
    var currentSelection = "";

    // start/stop gif animation on click
    function renderImage() {
        $(".gif").on("click", function () {
            var gifMove = $(this).attr("data-gifMove");
            if (gifMove === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-gifMove", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-gifMove", "still");
            }
        })
    }

    // creates buttons
    function renderButtons() {
        $("#topic-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("gifClass");
            a.attr("currentSelection", topics[i]);
            a.text(topics[i]);
            $("#topic-view").append(a);

        }
        startButton();
        renderImage();
    }


    renderButtons();

    // retrieves API data
    function startButton() {
        $(".gifClass").on("click", function (event) {
            var gifClass = $(this).attr("currentSelection");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifClass + "&rating=pg" + "&api_key=" + APIkey;

            $.ajax({
                    url: queryURL,
                    method: "GET"
                })

                .then(function (response) {

                    var gifSearch = response.data;
                    for (var i = 0; i < 10; i++) {
                        // returns gifs with rating of less than pg13
                        if (gifSearch[i].rating !== "r" && gifSearch[i].rating !== "pg-13") {

                            var gifDiv = $("<div class='item'>");
                            var rating = gifSearch[i].rating;
                            var p = $("<p>").text("Rating: " + rating);
                            var gifClassImage = $("<img>");


                            gifClassImage.attr("src", gifSearch[i].images.fixed_height_still.url);
                            gifClassImage.attr('data-animate', gifSearch[i].images.fixed_height.url);
                            gifClassImage.attr('data-still', gifSearch[i].images.fixed_height_still.url);
                            gifClassImage.attr("data-gifMove", "still");
                            gifClassImage.attr("class", "gif");


                            gifDiv.append(gifClassImage);
                            gifDiv.append(p);

                            $("#gifList").prepend(gifDiv);

                            
                        }
                    }
                    renderImage();
                })

        });
    }

// function for new search topics
    $("#newTopic").on("click", function (event) {
        event.preventDefault();
        var newTopic = $("#userInput").val().trim();
        topics.push(newTopic);
        $("#userInput").val("");

        renderButtons();


    })
});