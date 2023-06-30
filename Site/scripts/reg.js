function DATA() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || null) {
        alert("Вы не заполнили поле Имя пользователя.");
        return false;
    }
    if (password == "" || null) {
        alert("Вы не заполнили поле Пароль.");
        return false;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}
function DATA2() { 
    var username2 = document.getElementById("username2").value;
    var password2 = document.getElementById("password2").value;

    const name = localStorage.getItem('username');
    const pass = localStorage.getItem('password');

    if (username2 == "" || null) {
        alert("Вы не заполнили поле Имя пользователя.");
        return false;
    }
    if (password2 == "" || null) {
        alert("Вы не заполнили поле Пароль.");
        return false;
    }
    if (username2 == name && password2 == pass) {
        alert("Вы успешно вошли в систему!");
    } else { alert("Неверное имя пользователя или пароль!");}

}















/*let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#registratoin');

let users = {};

function User(name, login, password){
    this.name = name;
    this.login = login;
    this.password = password;
}

function CreateId(users){
    return Object.keys(users).length;
}

registration.addEventListener('click', () => {
    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(nameUser, loginUser, passwordUser);

    const userId = 'User' + CreateId(users);

    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, вы успешно зарегестрироались`);
})

signup.addEventListener('click', () => {
    
})*/ 