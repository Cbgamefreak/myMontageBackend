

$("#new-user").on("click", function(){
    console.log("test")
    console.log("this works")
    var nameInput = $("#user-name").val().trim()
    var userPass = $("#password").val().trim()
    var userNameObject ={
        name:nameInput,
        password:userPass
    }
    console.log(nameInput)
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (nameInput = "") {
      console.log("there is no name")
    }
    upsertNewUser(userNameObject);
    // Calling the upsertNewUser function and passing in the value of the name input
    
    
    

   
});


  function upsertNewUser(NewUserData) {
      console.log(NewUserData)
    $.post("/api/authors", NewUserData)
      .then( 
        window.location.href = "/login"
      )}