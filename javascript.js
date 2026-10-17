const box = document.querySelector('.box');
const tip = document.getElementById('tip');
const btn = document.getElementById('btn');
const login = document.getElementById('login');
const registe = document.getElementById('registe');

let isregiste = false;

btn.addEventListener("click",function () {
    isregiste = !isregiste;
    if (isregiste) {
        box.classList.add("to-register")
        tip.textContent = "已有账号？"
        btn.textContent = "去登录"
    }else{
        box.classList.remove("to-register")
        tip.textContent = "还没有账号？"
        btn.textContent = "去注册"
    }
})

login.addEventListener("submit",function(e){
    e.preventDefault()
    alert("登陆成功，欢迎回来")
})
registe.addEventListener("submit",function (e){
    e.preventDefault()
    const inputs = registe.querySelectorAll("input")
    const pwd1 = inputs[1].value
    const pwd2 = inputs[2].value 
    if (pwd1 !== pwd2){
        alert("请保证两次密码一致")
        return
    }
    alert("注册成功，请登录")
})