let button= document.getElementsByClassName(.button);
let inputValue = document.getElementsByClassName(.inputValue);

// button.addEventListener('click', ()=>{
    
// fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c5cf55b4777b8309a63b174e56b36d57')
// .then(response => response.json())
// .then(data => {
//   let tempValue = data['main']['temp'];
//   let nameValue = data['name'];
//   let descValue = data['weather'][0]['description'];

//    document.querySelector('nam').innerHTML = nameValue;
//   document.querySelector('desc').innerHTML = "Desc - "+descValue;
//   document.querySelector('temp').innerHTML = "Temp - "+tempValue;

// })

// .catch(err => alert("Wrong city name!"));
// })
    
fetch('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=c5cf55b4777b8309a63b174e56b36d57')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("Wrong city name!"));
