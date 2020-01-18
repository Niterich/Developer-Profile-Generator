console.log("connected")
let user;

$("#search-sumbit").on("click", function(){
    console.log("clicked")
    user = $("#profile-search").val();
    console.log(user);
    event.preventDefault();
    $.ajax({
        url: "https://api.github.com/users/" + user,
        method: "GET"
    }).then(function(res){
        console.log(res);
    })
})
