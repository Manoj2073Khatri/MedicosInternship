
//  let button= document.getElementById("btn");
//  let cityName = document.getElementById("cityName");

// document.addEventListener('DOMContentLoaded',()=>{
   
   
//     button.addEventListener('click', ()=>{
//     console.log(cityName.value);
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=c5cf55b4777b8309a63b174e56b36d57')
//     .then(response => response.json())
//     .then(data=> {

//       console.log(data);
//       let tempValue = data['main']['temp'];
//       let nameValue = data['name'];
//       let descValue = data['weather'][0]['description'];
//       let id=data['weather'][0]['id'];

//       document.getElementById("name").innerHTML=nameValue;
//       document.getElementById("temp").innerHTML=Math.round(tempValue-273.15) +"°C";
//       document.getElementById("desc").innerHTML=descValue;
    
//       if (id<250){
//         tempIcon.src = './images/storm.svg' ;
//       }
//       else if (id<350){
//         tempIcon.src = './images/drizzle.svg' ;
//       }
//       else if (id<550){
//         tempIcon.src = './images/rain.svg' ;
//         document.body.className = 'rainy';
//       }
//       else if (id<650){
//         tempIcon.src = './images/snow.svg' ;
//       }
//       else if (id<800){
//         tempIcon.src = './images/atmosphere.svg' ;
//         document.body.className = 'clear';
//       }
//       else if (id===800){
//         tempIcon.src = './images/sun.svg' ;
//       	document.body.className = 'sunny';
//       }
//       else if(id>800){
//         tempIcon.src = './images/clouds.svg' ;
//         document.body.className = 'cloudy';
//       }
//     })
    
//     .catch(error=>alert('enter correct city names only'));
//     })
      
// }

// )




// using async and await

 let button= document.getElementById("btn");
 let cityName = document.getElementById("cityName");

 document.addEventListener('DOMContentLoaded',()=>{
 
  button.addEventListener('click',()=>{

        async function fetchWeatherData(){
        
          const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=c5cf55b4777b8309a63b174e56b36d57');
          if (!response.ok) {
          
           alert('check whether your connection is active or not else you typed incorrect city name');
          }
         
          else{
            const weatherData=await response.json();
           
            let tempValue = weatherData['main']['temp'];
            let nameValue = weatherData['name'];
            let descValue = weatherData['weather'][0]['description'];
            let id=weatherData['weather'][0]['id'];
      
            document.getElementById("name").innerHTML=nameValue;
            document.getElementById("temp").innerHTML=Math.round(tempValue-273.15) +"°C";
            document.getElementById("desc").innerHTML=descValue;
          
            if (id<250){
              tempIcon.src = './images/storm.svg' ;
            }
            else if (id<350){
              tempIcon.src = './images/drizzle.svg' ;
            }
            else if (id<550){
              tempIcon.src = './images/rain.svg' ;
              document.body.className = 'rainy';
            }
            else if (id<650){
              tempIcon.src = './images/snow.svg' ;
            }
            else if (id<800){
              tempIcon.src = './images/atmosphere.svg' ;
              document.body.className = 'clear';
            }
            else if (id===800){
              tempIcon.src = './images/sun.svg' ;
              document.body.className = 'sunny';
            }
            else if(id>800){
              tempIcon.src = './images/clouds.svg' ;
              document.body.className = 'cloudy';
            }
          


          }
         
         
        }

        fetchWeatherData();
  })

 })