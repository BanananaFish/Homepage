var now = new Date();
var x = document.getElementById('date');
x.innerText = String(now);

function checkform(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if ((username === "Bananafish") && (password === "123456")){
        alert("Success!");
        return true;
    }else{
        alert("Wrong id or password!");
        return false;
    }
}