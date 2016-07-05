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
    //gather info
    var firstName = $("#signUpFirstName").val() || null;
    var lastName = $("#signUpLastName").val() || null;
    var email = $("#signUpEmail").val() || null;
    var pass = $("#signUpPassword").val() || null;
    var passCon = $("#signUpPasswordCon").val();

    //validate info
    console.log(firstName);
    if(firstName == null){
        $("#errorCode").append("Please fill in your first name!");
    }
    if(lastName == null){
        $("#errorCode").append("Please fill in your last name!");
    }
    if(email == null){
        $("#errorCode").append("Please fill in your email!");
    }
    if(passCon == null){
        $("#errorCode").append("Please fill in your password!");
    }
    if(passCon != pass){
        $("#errorCode").append("Error: Passwords do not match");
    }
    var userData = [firstName, lastName, email, passCon];
    //ajax request to server
    //redirect to home
});