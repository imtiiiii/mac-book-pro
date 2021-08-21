let fullGrandTotal = 1299; // it will store the amount of money that has to be paid

function extraProduct(id, value) {
    //Here (up) taking the id name of the place where value will be updated
    // also taking the updated value to show 
    document.getElementById(id).innerText = value;
    //here (up) we are setting the money amount according to the choosen customization
    updateTotal();
}
function updateTotal() {

    //here (down) taking all the values of product that we need to do summation of sub-total
    const total = document.getElementsByClassName('count-extra-money');
    let subTotal = 0;
    subTotal += 1299
    //here (up) i didn't add the base price which is the least amount that have to be paid
    //that's why adding here
    for (let money of total) {
        money = money.innerText //Taking the value of money in string type
        money = parseFloat(money); //// converting string value of price to number type
        subTotal += money; //Adding money from all the value and storing it in subTotal
    }

    document.getElementById('total').innerText = subTotal; //updating sub total value;
    document.getElementById('grand-total').innerText = subTotal;
    //here(up) grand total or the amount to be paid will same as sub total if any promo codes are not applied
    fullGrandTotal = subTotal;
}
function promoApplied(id) {
    const correctPromoCode = 'stevekaku';
    const givenPromoCode = document.getElementById(id).value; // took the code that user applied
    if (correctPromoCode != givenPromoCode) {
        alert("Wrong promo");
    }
    else {
        // the promo is correct
        //now we have to apply 20% discount in sub total
        let discountAmount = fullGrandTotal * (0.02); // This is the amount that will be minus from sub-total
        fullGrandTotal = fullGrandTotal - discountAmount; // after minus this will be the final amount to be paid
    }
    document.getElementById('grand-total').innerText = fullGrandTotal; // updating the  value in html to show the user

    //clearing the promo input field
    document.getElementById(id).value = '';
}