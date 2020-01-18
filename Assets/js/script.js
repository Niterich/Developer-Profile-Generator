console.log("connected")
let user = "niterich";
$.ajax({
    url: "https://api.github.com/users/" + user,
    method: "GET"
}).then(function(res){
    console.log(res);
})