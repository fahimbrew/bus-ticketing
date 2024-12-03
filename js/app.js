// console.log('hi welcome!')
// selectSeat function
// variable declaration
const countSeat = document.getElementById('count-seat').innerText;
const decreaseCount = document.getElementById('decrease-count').innerText;
const textContainer = document.getElementById('text-container');
const totalPriceEl = document.getElementById("total-price");
const couponInput = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon-btn');
const grandTotal = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');
const btnContinue = document.getElementById('btn-continue');
let buttonNumbers = [];
let totalPrice = 0;
function selectSeat(event) {
    // console.log(event);
    let button = event.innerText;
    const showCount = buttonNumbers.length;
    if (buttonNumbers.includes(button)) {
        return alert('already added')
    }
    else if (showCount < 4) {

        event.style.backgroundColor = '#1DD100';
        event.style.color = 'white';


        buttonNumbers.push(button);




        // console.log(showCount);
        document.getElementById('count-seat').innerText = buttonNumbers.length;
        // console.log(decreaseCount);
        document.getElementById('decrease-count').innerText = decreaseCount - buttonNumbers.length;

        textContainer.innerHTML += `
    <li class='flex justify-between font-bold'>
     <p>${button}</p>
     <p>Economy</p>
     <p>550</p>
    </li>

    
    `


        document.getElementById('h3').classList.add('hidden');
        totalPrice += 550;
        // console.log(totalPrice);
        totalPriceEl.innerText = totalPrice;


        if (buttonNumbers.length > 3) {
            couponBtn.removeAttribute('disabled');
            couponInput.removeAttribute('disabled');
        }
    }
    else {
        return alert('can  not purchase more than 4 tickets')
    }


}

// coupon function
couponBtn.addEventListener('click', function () {
    const value = couponInput.value;
    // console.log(value)
    let couponSave = 0;
    if (value === 'NEW15') {
        // 15% off
        couponSave = totalPriceEl.innerText * 15 / 100;
        const grandTotalNumber = totalPriceEl.innerText - couponSave;
        // console.log(grandTotal);
        grandTotal.innerText = grandTotalNumber;




    }
    else if (value === 'Couple 20') {
        // 20% off
        couponSave = totalPriceEl.innerText * 20 / 100;
        const grandTotalNumber = totalPriceEl.innerText - couponSave;
        // console.log(grandTotal);
        grandTotal.innerText = grandTotalNumber;


    }
    else {
        return alert('Invalid Coupon')
    }

    const showCouponPriceEl = document.getElementById('show-coupon-price');
    // console.log(showCouponPrice);
    showCouponPriceEl.innerHTML = `
     <p>Discount</p>
    <p><span>-BDT:</span><span>${couponSave}</span></p>
    `
})



// last sec function

phoneNumberEl.addEventListener('input', function (event) {
    // console.log(event.target.value)
    const inputField = event.target.value;
    // const inputNumber = Number(inputField);
    // console.log(inputField);
    if (inputField.length >= 11) {
        nextBtnEl.removeAttribute('disabled');
        return;
    }
    // else {
    //     return alert('Please enter a valid phone number')
    // }
})


btnContinue.addEventListener('click', function () {
    window.location.reload();

})
