

const cashOutBtn=document.getElementById('cashOut-btn');
cashOutBtn.addEventListener('click',function(){
    // AGENT NUMBER SECTION
    const agentNum=document.getElementById('agent-num');
    const agentNumInput=agentNum.value;
    console.log(agentNumInput)

    
    

// AMOUNT SECTION
    const amount=document.getElementById('amount');
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
    const pin=document.getElementById('cashOut-pin');
    const pinInput=pin.value;
    pin.value='';
    if(pinInput==='1234'){
        alert('Cash Out Successful');
        balance.innerText=newBalance;
        //transaction history section
         const tranHistory=document.getElementById('history-container');
        const newHistory=document.createElement('div');
        newHistory.innerHTML= `
            <div class="card py-5 px-2 bg-base-100 rounded-[15px] mb-3 " >
                <P class="font-bold ">Cash Out</P>
                 Amount ${amountInput}  successfully cash out to Agent No. ${agentNumInput}.

            </div>
        `;
        tranHistory.append(newHistory)
    }
    else{
        alert('Invalid PIN');
        return;
    }

})