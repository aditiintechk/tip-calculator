// Capture the target elements
const billAmtEl = document.getElementById("bill-input");

const billEl = document.querySelector(".bill");

const selectBtn = document.querySelectorAll(".select-tip button");
const customInput = document.querySelector(".select-tip input");

const peopleEl = document.getElementById("people");

const tipAmtEl = document.getElementById("tip-amt");
const totalAmtEl = document.getElementById("total-amt");

const resetEl =  document.getElementById("reset");

// check if given tips are clicked
for(let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('click', function(e) {
        if(!validInput()) {
            return
        } 
    
        let tip = Number(e.target.value);
        console.log(tip);
        calcTipAndTotal(tip);
    })
}


// check if custom tip is given as input
customInput.addEventListener('input', function(e) {
    if(!validInput()) {
        return
    } 

    let custom = e.target.value;
    let customTipCalc = Number(custom) / 100;
    calcTipAndTotal(customTipCalc);
})

// Calculate tip and total amount
function calcTipAndTotal(tip) {
    let billAmt = Number(billAmtEl.value);
    let peopleCount = Number(peopleEl.value);

    let tipAmt = billAmt * tip;
    let totalAmt = billAmt + tipAmt;
    let tipAmtPerPerson = (tipAmt) / peopleCount;
    let totalAmtPerPerson = totalAmt / peopleCount;

    tipAmtEl.textContent = '$' + tipAmtPerPerson.toFixed(2);
    totalAmtEl.textContent = '$' + totalAmtPerPerson.toFixed(2);

    return
}

function validInput() {
    let billAmt = Number(billAmtEl.value);
    let peopleCount = Number(peopleEl.value);

    if(billAmt === 0 && peopleCount === 0 || billAmt === 0 || 
        peopleCount === 0){
        // Create alert text
        let div = document.createElement('div');
        div.textContent = 'Enter the Amount and/or Number of people!';
        div.classList.add('alert-text');
        document.body.append(div);

        return false;
    }

    return true;
}

// reset function
resetEl.addEventListener('click', resetAll);

const inputEl = document.getElementsByTagName("input");
function resetAll() {
    for(let i = 0; i < inputEl.length; i++) {
        inputEl[i].value = '';
    }
    tipAmtEl.textContent = '$0.00';
    totalAmtEl.textContent = '$0.00';
}