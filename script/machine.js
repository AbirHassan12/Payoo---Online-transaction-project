//  show and hidden function

function selectOnly(id){
    const addMoneybtn=document.getElementById('add-money');
    const cashOutbtn=document.getElementById('cashOut');
    const transBtn=document.getElementById('history');
    const sendMoneyBtn=document.getElementById('send-money');

    addMoneybtn.classList.add('hidden');
    cashOutbtn.classList.add('hidden');
    transBtn.classList.add('hidden');
    sendMoneyBtn.classList.add('hidden');

    const selected=document.getElementById(id);
    selected.classList.remove('hidden');

}