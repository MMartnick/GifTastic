// create an array of strings and save as the variable topic
var topic = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];



  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
  var APIkey = "HnwEUjRsaJaX8vU1bfO0ckLptR6eII0I";
var currentSelection = "";
var userInput = "";


  // Function for displaying movie data
  function renderButtons() {


    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#topic-list").empty();

    // Looping through the array of topic
    for (var i = 0; i < topic.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("buttos");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", topic[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(topic[i]);
      // Adding the button to the HTML
      $("topic-list").append(a);
    }

   // adds on.click for each button
   $(".buttons").on("click", function () {
    console.log(".buttons");
    topic.currentSelection = $(this).attr("data-name");
    topic.displayGifs();
});

  function displayGifs() {
    var currentTopic = this.currentSelection;


    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    // After the data from the AJAX request comes back
    .then(function (response) {
  console.log(response)
  
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;
  
      // Creating and storing an image tag
      var catImage = $("<img>");
  
      // Setting the catImage src attribute to imageUrl
      catImage.attr("src", imageUrl);
      catImage.attr("alt", "cat image");
  
      // Prepending the catImage to the images div
      $("#images").prepend(catImage);
    });
  };

  // Calling the renderButtons function at least once to display the initial list of topic
  renderButtons();



  // Perfoming an AJAX GET request to our queryURL



  }










/*


// use this array to create html buttons, buttons grab 10 non-animated gif imgs and places them on page.
 // Looping through the array of topic

 function renderButtons() {

  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#topic-view").empty();

 for (var i = 0; i < topic.length; i++) {

  // Then dynamicaly generating buttons for each movie in the array.
  // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
  var a = $("<button>");
  // Adding a class
  a.addClass("topic");
  // Adding a data-attribute with a value of the movie at index i
  a.attr("data-name", topic[i]);
  // Providing the button's text with a value of the movie at index i
  a.text(topic[i]);
  // Adding the button to the HTML
  
}

// on user click gifs should play


// second user click should stop gif play


//under each gif rating should display


// add form to take user input and add that to the topics array (index of)


// add a function that calls each topic in the array and remakes the page buttons
    }})});*/