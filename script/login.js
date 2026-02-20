const  loginBtn=document.getElementById('login-btn');
const PIN=document.getElementById('pin');
const mobileNum=document.getElementById('mobile-num');

loginBtn.addEventListener('click',function(){
    const newPin=PIN.value;
    console.log(newPin)
    const newNum=mobileNum.value;
    console.log(newNum)

    if(newPin==='1234' && newNum==='12345678912'){
        alert('log in successfully');
    window.location.assign('home.html');

    }
   else{
    alert('login failed');
    return;
   }



})