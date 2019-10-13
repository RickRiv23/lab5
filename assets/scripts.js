/* global $*/
// Declare globals
const apiKey = "10288928-e28258c7c61a0cd6e8cfdd031",
    searchImgURL = `https://pixabay.com/api/?key=${apiKey}`;
// var img = $("#images");

// Functions
function getImage(search){
    if(search){
        let orientation = $("#orientation").val() ? $("#orientation").val() : "";
        // alert(orientation);
        $("#feedback").html("");
        $.ajax({
            method:"GET",
            url: searchImgURL,
            dataType:"",
            data:{"q":search, "image_type": "photo", "orientation": orientation},
            
            success: function(data){
                displayImages(data.hits);
            },
            error: function(e){
                $("#feedback").html("No valid images available.");
            }
        });
    } else{
        $("#feedback").html("Please enter a valid search term.");
        $("#feedback").css('color', 'red');
    }
}

function displayImages(images){
    $("#images").html("");
    let randNum = 0;
    for(let i = 0; i < 4; i++){
        randNum = Math.floor(Math.random() * 20);
        $("#images").append(`
        <figure>
        <figcaption> Likes: ${images[randNum].likes} </figcaption>
        <img id="image${i}" class="image" src="${images[randNum].imageURL}" alt="${images[randNum].tags}">
        </figure>
        `);
    }
}

// Event Handlers
$("#submit").on("click", function(){
    let searchValue = $("#search").val();
    getImage(searchValue);
});


