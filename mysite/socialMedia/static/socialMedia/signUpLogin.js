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
    var lastName = $("#signUpLastName") || null;
    var email = $("#signUpEmail") || null;
    var pass = $("#signUpPassword") || null;
    var passCon = $("#signUpPasswordCon");

    //validate info
    console.log(firstName);
    if(firstName == null){
        $("#errorCode")
    }
    var userData = [firstName, lastName, email, passCon];
    //ajax request to server
    //redirect to home
});