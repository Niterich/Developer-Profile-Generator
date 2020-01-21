console.log("connected")
let user;

$("#search-submit").on("click", function(){
    event.preventDefault();
    console.log("clicked")
    user = $("#profile-search").val();
    console.log(user);
    $.ajax({
        url: "https://api.github.com/users/" + user,
        method: "GET"
    }).then(function(res){
        console.log(res);
    })
})
