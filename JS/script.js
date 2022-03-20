$(document).ready(function () {

    function validate() {
        if (fullName.value == "" || fullName.value.length == 0) {
            alert("Dear Customer Enter A valid Name")
            return false
        } else if (telephoneNumber.value.length < 10) {
            alert("Kindly Recheck Your Phone Number")
            return false
        } else {
            alert(fullName.value + " " + "We have received your Pizza order.We are Preparing.Thank You")
        }
    }

    // Showing and hiding form on click of the order link


    // closing and making orders
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

    $('#deliveryOverview').click(function () {
        $('#delivery-paragraph').toggle();
        $('#delivery-paragraph').css("width", "70%");

    })

    $('.button').click(function () {
        $('#delivery-paragraph').hide();
    })

    // Checking out and confirming the prices
    $('#checkout').click(function (event) {
        event.preventDefault();
    });
    $('#checkout').click(function (event) {
        let fullName = $('#personName').val();
        let telephoneNumber = $('#tel').val();
        let pizzaType = $('#pizza-type option:selected').val();
        let pizzaSize = $('#pizza-size option:selected').val();
        let crustType = $('#crust option:selected').val();
        let toppings = $('#toppings option:selected').val();
        let additionalToppings = $('#toppings2 option:selected').val();
        let totalNumberOfPizza = $('#pizzaNumber').val();
        let costOfDelivery = $('#delivery option:selected').val();
        let destination = $('#destination').val();
        let totalsOfPizza = parseInt(totalNumberOfPizza) * (parseInt(pizzaSize) + parseInt(toppings) +
            parseInt(additionalToppings) + parseInt(crustType) + parseInt(costOfDelivery));

        $('#summary').toggle();
        $("#orderSummary").show();
        $("#orderSummary").append(
            "<tr>" +
            '<td>' +
            totalNumberOfPizza +
            "</td>" +
            "<td>" +
            fullName +
            "</td>" +
            "<td>" +
            telephoneNumber +
            "</td>" +
            "<td>" +
            toppings +
            "</td>" +
            "<td>" +
            crustType +
            "</td>" +
            "<td>" +
            costOfDelivery +
            "</td>" +
            "<td>" +
            totalsOfPizza +
            "</td>" +
            "</tr>"
        );
    });
    //  price on move of the mouse

    $('#hover1').mouseover(function () {
        $('#price1').show()
    })
    $('#hover1').mouseout(function () {
        $('#price1').hide()
    })
    //Backend logic
    $('#submit').click(function (event) {
        event.preventDefault()
        let fullName = $('#personName').val();
        let telephoneNumber = $('#tel').val();
        let pizzaType = $('#pizza-type option:selected').val();
        let pizzaSize = $('#pizza-size option:selected').val();
        let crustType = $('#crust option:selected').val();
        let toppings = $('#toppings option:selected').val();
        let additionalToppings = $('#toppings2 option:selected').val();
        let totalNumberOfPizza = $('#pizzaNumber').val();
        let costOfDelivery = $('#delivery option:selected').val();
        let destination = $('#destination').val();
        let totalsOfPizza = parseInt(totalNumberOfPizza) * (parseInt(pizzaSize) + parseInt(toppings) +
            parseInt(additionalToppings) + parseInt(crustType) + parseInt(costOfDelivery));

        if (costOfDelivery == 0) {
            alert("Dear " + " " + fullName + " " + "of telephone Number " + telephoneNumber + " " + ",thank you for ordering, We have received Your Order of " +
                totalNumberOfPizza + " " + pizzaType + " " + "Is being prepared. Kindly pick it up at our new outlet." + " " + "Your Total Amount to be paid is :" + totalsOfPizza)
        } else {
            alert("Dear " + " " + fullName + " " + "of telephone Number " + telephoneNumber + " " + ".We have received Your Order of " +
                totalNumberOfPizza + " " + pizzaType + " " + "It is being prepared and our messenger will deliver to " +
                destination + " " + "Be on the watch for a call." + "Your Total Amount  to be paid is :" + totalsOfPizza + ".Pay on delivery")
        }

    });

});
