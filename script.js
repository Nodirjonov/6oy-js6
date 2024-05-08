document.getElementById('btn').addEventListener("click",function(){

fetch('https://api.randomuser.me/')
.then((response)=> response.json())
.then((data)=>{
    const user = data.results[0]
    const card = document.getElementById('card')
    card.innerHTML =`
    <div>
    <img src="${user.picture.large}" alt="">
    <p>Name:${user.name.first} ${user.name.last}</p>
    <p>Email: ${user.emal}</p>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `
})
})
