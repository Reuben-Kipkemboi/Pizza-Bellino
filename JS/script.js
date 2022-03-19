// Showing and hiding form on click of the order link
$(document).ready(function () {

    let fullName = document.getElementById('name');
    let telephoneNumber = document.getElementById('tel');
    let pizzaSize = document.getElementById('pizza-size');
    let crustType = document.getElementById('crust');
    let toppingsType = document.getElementById('toppings');
    let totalNumberOfPizza = document.getElementById('number');
    let destination = document.getElementById('destination');
    let btn = document.getElementById('submit')


    let priceOfSmall = 450;
        let priceOfMedium = 650;
        let priceOfLarge = 950;
        let crustPrice = 100;
        let toppingsPrice = 50;
        let deliveryPrice = 300;

        // form validation

        function validate(){
            if(fullName.value == "" || fullName.value.length == 0){
                alert("Dear Customer Enter A valid Name")
                return false
            }else if(telephoneNumber.value.length <10){
                alert("Kindly Recheck Your Phone Number")
                return false
            }else {
                alert(fullName.value +" " + "We have received your Pizza order.We are Preparing.Thank You")
            }

        }

    function calculatePriceWithDelivery() {
        if (pizzaSize.value == small) {
            let small = parseInt(totalNumberOfPizza.value)*(priceOfSmall + crustPrice + toppingsPrice + deliveryPrice);
            return small
            
        }else if (pizzaSize == medium){ 
            let medium = parseInt(totalNumberOfPizza.value)*(priceOfMedium + crustPrice + toppingsPrice + deliveryPrice);
            
        }else {
            let large = parseInt(totalNumberOfPizza.value)*(priceOfLarge + crustPrice + toppingsPrice + deliveryPrice);
        }

    }
    function calculatePriceWithoutDelivery() {
        if (pizzaSize.value == small) {
            let small = parseInt(totalNumberOfPizza.value)*(priceOfSmall + crustPrice + toppingsPrice);
            return small
            
        }else if (pizzaSize == medium){ 
            let medium = parseInt(totalNumberOfPizza.value)*(priceOfMedium + crustPrice + toppingsPrice);
            
        }else {
            let large = parseInt(totalNumberOfPizza.value)*(priceOfLarge + crustPrice + toppingsPrice);
        }

    }






    $('#orderNow').click(function () {
        $('form#orderForm').toggle();
        $('form#orderForm').css("width", "50%");


    })
    $('#orderNow').click(function () {
        $('#description').toggle();
        $('#pizza-types').toggle();
        $('#pizza-types2').toggle();


    });

    $('#close').click(function () {
        $('form#orderForm').hide();
        $('#description').show();
        $('#pizza-types').show();
        $('#pizza-types2').show();



    })

    //  price on move of the mouse

    $('#hover1').mouseover(function () {
        $('#price1').show()
    })
    $('#hover1').mouseout(function () {
        $('#price1').hide()
    })



    // submitting and querying user data

    //  $('form#submit').submit(function(event){
    //     event.preventDefault();

    //     calculatePrice();



    //  })


    btn.addEventListener('click', (event) => {
        event.preventDefault();

        validate();

        calculatePriceWithDelivery()
        calculatePriceWithoutDelivery()

        
    });


})
