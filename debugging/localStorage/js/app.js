const values = (property) =>{
    const name = document.getElementById(property);
    const email = document.getElementById(property);
    const message = document.getElementById(property);
    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;
    name.value = "";
    email.value = "";
    message.value = "";
    return nameValue, emailValue, messageValue;
}

const dataSend1 = () =>{
    const data = values("name");
    localStorage.setItem("name", data);
}
const dataSend2 = () =>{
    const data = values("email");
    localStorage.setItem("email", data);
}
const dataSend3 = () =>{
    const data = values("message");
    localStorage.setItem("message", data);
}

const dataDelete1 = () =>{
    localStorage.removeItem("name");
}
const dataDelete2 = () =>{
    localStorage.removeItem("email");
}
const dataDelete3 = () =>{
    localStorage.removeItem("message");
}

const resetBtn = () =>{
    localStorage.clear();
}