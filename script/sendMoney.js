

const sendMoneyBtn=document.getElementById('send-money-btn');
sendMoneyBtn.addEventListener('click',function(){
    // AGENT NUMBER SECTION
    const userNum=document.getElementById('user-num');
    const userNumInput=userNum.value;
    console.log(userNumInput)

    
    

// AMOUNT SECTION
    const amount=document.getElementById('sendAmount');
    const amountInput=amount.value;
    console.log(amountInput);

    const balance=document.getElementById('balance');
    const currentBalance=balance.innerText;
    const newBalance=Number(currentBalance)-Number(amountInput);
    if(newBalance<0){
        alert('Invalid Amount');
        return;
    }
    console.log(newBalance)

    // PIN SECTION
    const pin=document.getElementById('send-money-pin');
    const pinInput=pin.value;
    pin.value='';
    if(pinInput==='1234'){
        alert('Send Money Successful');
        balance.innerText=newBalance;
        //transaction history section
         const tranHistory=document.getElementById('history-container');
        const newHistory=document.createElement('div');
        newHistory.innerHTML= `
            <div class="card py-5 px-2 bg-base-100 rounded-[15px] mb-3 " >
                <P class="font-bold ">Send Money</P>
                 Amount ${amountInput}  successfully Send Money to User No. ${userNumInput}.

            </div>
        `;
        tranHistory.append(newHistory)
    }
    else{
        alert('Invalid PIN');
        return;
    }

})