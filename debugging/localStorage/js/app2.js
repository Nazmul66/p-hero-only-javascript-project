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
   return localStorage.setItem("name", data);
}
const dataSend2 = () =>{
    const data = values("email");
    return localStorage.setItem("email", data);
}
const dataSend3 = () =>{
    const data = values("message");
    return localStorage.setItem("message", data);
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

const sendBtn = () =>{
    let objects = {};
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;
    objects["name"] = nameValue;
    objects["email"] = emailValue;
    objects["message"] = messageValue;
    const objectModule = JSON.stringify(objects);
    localStorage.setItem("object", objectModule)
}