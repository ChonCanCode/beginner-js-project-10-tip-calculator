const amount = document.getElementById("amount")
const guests = document.getElementById("guests")
const quality = document.getElementById("quality")
const tipAmount = document.getElementById("tip-amount")

calculate = () => {
// same as function calcaulator()
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);

    if(tip === "NaN") {
        tipAmount.innerHTML = "Tip £0 each";
        showTipAmmount();
    } else {
        tipAmount.innerHTML = 'Tip £' + tip + 'each';
        showTipAmmount();
    }
}

showTipAmmount = () => {
    let x = tipAmount;
    x.className = "show"
    setTimeout(function(){x.className.replace('show', '');
    x.style.visibility = 'hidden'; 
    }, 3000)
}
