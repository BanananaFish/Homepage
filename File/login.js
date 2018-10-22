var now = new Date();
var x = document.getElementById('date');
x.innerText = String(now);

function checkform(){
    let username = document.getElementsByTagName('input')[0];
    let password = document.getElementsByTagName('input')[1];
    console.log(username.value);
    
    if ((username.value === "Bananafish") && (password.value === "123456")){
        alert("Success!");
        return true;
    }else{
        alert("Wrong id or password!");
        return false;
    }
}