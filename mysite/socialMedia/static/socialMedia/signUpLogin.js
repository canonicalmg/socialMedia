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
    var firstName = $("#signUpFirstName");
    var lastName = $("#signUpLastName");
    var email = $("#signUpEmail");
    var pass = $("#signUpPassword");
    var passCon = $("#signUpPasswordCon");
    var userData = [firstName, lastName, email, passCon];
    //ajax request to server
    //redirect to home
});