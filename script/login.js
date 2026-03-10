document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const acNum=document.getElementById('acNum').value;
    const acPin=document.getElementById('pin').value;
    const pin=parseInt(acPin);

    if(acNum === '123456789' && pin === 1234){
        alert('Login successful!');
        //window.location.href = 'dashboard.html';
        window.location.href='main.html';
    } else {
        alert('Invalid account number or PIN. Please try again.');
    }

})