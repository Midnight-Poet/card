
// console.log(formattedDate)


setInterval(() => {
    let now = new Date()
    let formattedDate = now.toLocaleString()
    let cont = document.querySelector('.date')
    cont.innerText = `${formattedDate}`
}, 1000)



