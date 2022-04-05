const footer = document.querySelector('.footer');
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})