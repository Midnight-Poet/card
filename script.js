let now = new Date()
let formattedDate = now.toLocaleString()
console.log(formattedDate)


let cont = document.querySelector('.date')
cont.innerText = `${formattedDate}`


