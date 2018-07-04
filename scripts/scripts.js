//checking for the correct date to show vacation message
$(document).ready(function(){
    $('#hr3').hide();
    $('#row3').hide();
    var currentDate = new Date()
    var expiryDate = new Date("July 1, 2018 00:00:00");
    if(currentDate.getTime() > expiryDate.getTime()){
        $('#hr3').show();
        $('#row3').show();
    } 
})