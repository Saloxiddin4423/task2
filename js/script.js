let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let emailSign = document.getElementById('emailSign')
let passwordSign = document.getElementById('passwordSign')
let form = document.getElementById('form')
let form_sign = document.getElementById('form-sign')
let emailR = document.getElementById("emailR")

let data = []   
let res = JSON.parse(localStorage.getItem("data"))

let superAdimin = {
    name: 'admin',
    email: "admin@gmail.com",
    password: "123456789",
}

const register = () => {
    console.log();
    if (name.value !== "" && email.value !== "" && password.value !== "" && password.value.length > 8) {
        if (localStorage.getItem("data")) {
            let res = JSON.parse(localStorage.getItem("data"))
            res.forEach(elem => {
                data.push(elem)
            });
            let person = {
                name: name.value,
                email: email.value,
                password: password.value
            }
            data.push(person)
            if (res !== null ? res.some(elem => elem.email == email.value) : false) {
                email.style.border = "2px solid red"
                emailR.style.color = "red"
                data = []
            } else {
                localStorage.setItem("data", JSON.stringify(data))
                data = []
                name.value = ""
                email.value = ""
                password.value = ""

            }
        } else {
            let person = {
                name: name.value,
                email: email.value,
                password: password.value
            }
            data.push(person)
            if (res !== null ? res.some(elem => elem.email == email.value) : false) {
                email.style.border = "2px solid red"
                emailR.style.color = "red"
                data = []
            } else {
                localStorage.setItem("data", JSON.stringify(data))
                alert("200")
                closeR()
                data = []
                name.value = ""
                email.value = ""
                password.value = ""
            }
        }

    } else {
        if (name.value == "") {
            name.style.border = "2px solid red"
        }
        if (email.value == "") {
            email.style.border = "2px solid red"
        } if (password.value == "" ) {
            password.style.border = "2px solid red"
        }  if (  password.value.length < 8) {
            password.style.border = "2px solid red"
            
        }
    }
}

const auto = () => {
    name.style.border = "2px solid #4C6FFF"
    email.style.border = "2px solid #4C6FFF"
    password.style.border = "2px solid #4C6FFF"
    passwordSign.style.border = "2px solid #4C6FFF"
    emailSign.style.border = "2px solid #4C6FFF"
}

const login = () => {
    const result = res?.some(elem => elem.password == passwordSign.value && elem.email == emailSign.value)
    console.log(result, 'result');
    if (result) {
        window.location.href = "../conponets/dashboard/index.html";
        passwordSign.style.border = "2px solid #4C6FFF"
        emailSign.style.border = "2px solid #4C6FFF"
    } else {
        passwordSign.style.border = "2px solid red"
        emailSign.style.border = "2px solid red"
        alert('Provided credentials are not valid, please check your email and password!')
    }
}


const closeR = () => {
    form.style.display = "none"
    form_sign.style.display = "block"

}
const openR = () => {
    form_sign.style.display = "none"
    form.style.display = "block"
}