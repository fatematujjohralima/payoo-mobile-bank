document.getElementById('cashout-section').style.display = 'none';


document.getElementById('addMoney').addEventListener('click', function() {
    document.getElementById('addmoney-section').style.display = 'block';
    document.getElementById('cashout-section').style.display = 'none';
});

document.getElementById('cashout').addEventListener('click', function() {
    document.getElementById('addmoney-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
});