// Showing and hiding form on click of the order link
$(document).ready(function () {


    $('#orderNow').click(function () {
        $('form#orderForm').toggle();
        $('form#orderForm').css("width","50%");


    })
    $('#orderNow').click(function () {
        $('#description').toggle();
        $('#pizza-types').toggle();
        $('#pizza-types2').toggle();


    });
    // $('#orderNow').click(function () {
    //     $('#pizza-types').toggle();

    // });

    $('#close').click(function () {
        $('form#orderForm').hide();
        $('#description').show();
        $('#pizza-types').show();
        $('#pizza-types2').show();



    })


    // submitting and querying user data
    $('#submit').submit(function(event){
       event.preventDefault();

    })





})
