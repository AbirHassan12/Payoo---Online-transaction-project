const addMoneyBtn = document.getElementById('addMoney-btn');

addMoneyBtn.addEventListener('click', function () {
    // BANK SECTION
    const selectBank = document.getElementById("select-bank");
    const bank = selectBank.value; 
    if(bank==='Select a Bank'){
        alert('select a bank')
        return;
    }
    console.log("Selected Bank:", bank);

    // ACCOUNT NUMBER SECTION
    const accNum = document.getElementById('account-num');
    const accNumInput = accNum.value;
    console.log("Account Number:", accNumInput);

    // AMOUNT SECTION
    const addAmount = document.getElementById('add-amount');
    const addAmountInput = addAmount.value;
    console.log("Amount to Add:", addAmountInput);

    const balance = document.getElementById('balance');
    const currentBalance = Number(balance.innerText) || 0; 
    const newBalance = currentBalance + Number(addAmountInput);
    console.log("New Balance:", newBalance);

    // PIN SECTION
    const pin = document.getElementById('addMoney-pin');
    const pinInput = pin.value;

    if (pinInput === '1234') {
        alert(`${bank} amount ${addAmountInput}  successfully added`);
        balance.innerText = newBalance;
        // transaction history section
        const tranHistory=document.getElementById('history-container');
        const newHistory=document.createElement('div');
        newHistory.innerHTML= `
            <div class="card py-5 px-2 bg-base-100 rounded-[15px] mb-3 " >
                <P class="font-bold ">Add Money</P>
                 Amount ${addAmountInput}  successfully added from ${bank} AC No. ${accNumInput}.

            </div>
        `;
        tranHistory.append(newHistory)


    } else {
        alert('Invalid PIN');
    }

    pin.value = ''; 
});