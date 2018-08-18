var currentUserName;
var password;
localStorage.removeItem("user");

$( ".login-button").on("click", function(){
currentUserName = $(".usernameVal").val().trim()
password = $(".passwordVal").val().trim()
console.log(currentUserName)

window.location.href = "/profile";

$.get("/api/authors/"+ currentUserName+"/"+password, function(data) {
    console.log(data+"dataaaa")
    console.log(data.name);
    localStorage.setItem("user", data.id)
    console.log(data.password);

    });
})


//data.Posts


