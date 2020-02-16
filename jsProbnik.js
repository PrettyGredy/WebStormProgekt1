function Vhod()
{
    var login = document.form.login.value;
    var password = document.form.parol.value;
    if (login == 'admin' && password == '12345') { document.getElementById('input').style.display='none' ; alert ('Добро пожаловать!') }
    else alert ('Вход запрещен!');
}
function display() {

    if( document.getElementById('input').style.display == 'none')   document.getElementById('input').style.display = 'block';
    else  document.getElementById('input').style.display = 'none'
}