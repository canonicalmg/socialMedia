$("#signUpButton").click(function(){
    $("#main1").hide();
    $("#join1").hide();
    $("#join2").show();
    $("#main2").show();
});

$("#cancelSignUp").click(function(){
    $("#main2").hide();
    $("#join2").hide();
    $("#join1").show();
    $("#main1").show();
});

$("#submitSignUp").click(function() {
    $("#errorCode").empty();
    //gather info
    var firstName = $("#signUpFirstName").val() || null;
    var lastName = $("#signUpLastName").val() || null;
    var email = $("#signUpEmail").val() || null;
    var pass = $("#signUpPassword").val() || null;
    var passCon = $("#signUpPasswordCon").val();

    //validate info
    console.log(firstName);
    if(firstName == null){
        $("#errorCode").append("<p>Please fill in your first name!</p>");
    }
    if(lastName == null){
        $("#errorCode").append("<p>Please fill in your last name!</p>");
    }
    if(email == null){
        $("#errorCode").append("<p>Please fill in your email!</p>");
    }
    if(passCon == null){
        $("#errorCode").append("<p>Please fill in your password!</p>");
    }
    if(passCon != pass){
        $("#errorCode").append("<p>Error: Passwords do not match</p>");
    }
    var userData = [firstName, lastName, email, passCon];
    //ajax request to server
    //redirect to home
});