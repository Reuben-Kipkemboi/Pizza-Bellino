// Showing and hiding form on click of the order link

// let order = document.getElementById('order-now');

// order.addEventListener('click', ()=>{

//     let form = document.getElementById('order-form')
//     if(form.style.display === 'none'){
//         form.style.display = 'block';
//     }else{

//      form.style.display = 'none';
//     }

// });

$(document).ready(function () {
    $('#orderNow').click(function () {
        $('form#orderForm').toggle();


    })
    $('#orderNow').click(function () {
        $('#description').toggle();

    });

    $('#close').click(function () {
        $('form#orderForm').hide();
        $('#description').show();


    })




})
