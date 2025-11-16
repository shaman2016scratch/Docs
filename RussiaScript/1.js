ishodCode = fetch('https://shaman2016scratch.github.io/RussiaScript/1.0.js', {
  method: 'GET',  
  headers: { 
    "Content-Type": "application/json",  
  }
})
document.getElementById('ishodCode').textContent = ishodCode
