
// let myhttpArray = []
// async  function wether (currentCity ='United Kingdom' ){
//   let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`);
//     myhttpArray = await  res.json()
//    console.log(myhttpArray)

   
//    displayMyhttpOne()


// }

// // wether('cairo')
// wether()
// wether('oman')




// let myhttp = new XMLHttpRequest();

// myhttp.open('GET' , `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=lond&days=3`);
// myhttp.send();

// let myhttpArray = [];


// myhttp.addEventListener('readystatechange' , function(){

//     if (myhttp.readyState == 4 && myhttp.status == 200 ){

//         // console.log(myhttp.response)
//         myhttpArray = JSON.parse(myhttp.response)
//         console.log(myhttpArray)
//         displayMyhttp()
//         displayMyhttpTwo()
//         displayMyhttpOne()
       
//     }



// })



// function displayMyhttpOne(){



//     cartona=``;

//     for(let i = 0 ; i<myhttpArray.length ; i++){

//         cartona+= `
     
                    
                    
//         <p class="text-center" style="border-top-left-radius: 10px;  font-size: 14px; color: blanchedalmond; background: rgb(44, 46, 59);  padding: 10px;  ">${myhttpArray[i].current.temp_c} </p>
   

    
 
//         <p class="ms-4 mt-4 mb-4" style="font-size: 14px; color: blanchedalmond;">${myhttpArray[i].current.temp_c}</p>
//         <h1 class="ms-4 fw-bolder" style="font-size: 90px; color: blanchedalmond; ">${myhttpArray[i].current.temp_c}  <i class="fa-solid fa-moon fw-light fs-5 text-info "></i></h1>
   
        
    
    
   
//         <a style="font-size: 14px; color: #009ad8;" class="ms-4 text-decoration-none " href="">clear</a>



//         <div class="row p-4">
//             <div class="col-md-3" style="color: grey ;"><img src="img/icon-compass.png" alt=""> East</div>
//             <div class="col-md-3 " style="color: grey ;"><img src="img/icon-umberella.png" alt=""> 20%</div>
//             <div class="col-md-4 " style="color: grey ;"><img src="img/icon-wind.png" alt=""> 18km/h </div>
//         </div>

        
//         `
//     }

//     document.getElementById('demoOne').innerHTML= cartona ;



// }






// function displayMyhttp(){



//     cartona=``;

//     for(let i = 0 ; i<myhttpArray.length ; i++){

//         cartona+= `
      
                    
                    
//         <p class="text-center" style="font-size: 14px; color: blanchedalmond;  background: #1e202b; padding: 10px;  ">${myhttpArray[i].current.temp_c} </p>
      
      
      
      
//         <p class="ms-4 mt-5 mb-4" style="font-size: 22px; color:orange;"><i class="fa-solid fa-sun"></i></p>
//         <h1 class="ms-4 fw-bolder" style="font-size: 22px; color: blanchedalmond; ">${myhttpArray[i].lon} </h1>
//         <p class="ps-4" style="color:blanchedalmond ;">${myhttpArray[i].lat}</p>
      
        
      
      
      
//         <a style="font-size: 14px; color: #009ad8;" class="ms-4 text-decoration-none " href="">Sunny</a>
      
      
      

        
//         `
//     }

//     document.getElementById('demo').innerHTML= cartona ;



// }



// function displayMyhttpTwo(){



//     cartona=``;

//     for(let i = 0 ; i<1 ; i++){

//         cartona+= `
      
                    
                    
//         <p class="text-center" style="font-size: 14px; color: blanchedalmond;  background: #1e202b; padding: 10px;  ">${myhttpArray[1].name} </p>
      
      
      
      
//         <p class="ms-4 mt-5 mb-4" style="font-size: 22px; color:orange;"><i class="fa-solid fa-sun"></i></p>
//         <h1 class="ms-4 fw-bolder" style="font-size: 22px; color: blanchedalmond; ">${myhttpArray[1].lon} </h1>
//         <p class="ps-4" style="color:blanchedalmond ;">${myhttpArray[1].lat}</p>
      
        
      
      
      
//         <a style="font-size: 14px; color: #009ad8;" class="ms-4 text-decoration-none " href="">Sunny</a>
      
      
      

        
//         `
//     }

//     document.getElementById('demoTwo').innerHTML= cartona ;



// }







// var roz= new XMLHttpRequest ;
// roz.open('GET' , 'https://api.weatherapi.com/v1/search.json?key=c315b8ef35734d53b17172214221206&q=lond');
// roz.send();
// roz.addEventListener('readystatechange' , function(){
//     if (roz.readyState==4 && roz.status==200){
//         console.log(roz)
//     }
// })








//........................................................................................................

let dayOfCard = document.getElementById('dayOfCard')
let nameOfCard = document.getElementById('nameOfCard')
let threeOfCatd = document.getElementById('threeOfCatd')
let fourOfCard = document.getElementById('fourOfCard')
let iconOfCard = document.getElementById('iconOfCard')
let onee = document.getElementById('onee')
let twoo = document.getElementById('twoo')
let threee = document.getElementById('threee')


let nextDay = document.getElementsByClassName('nextDay')
let iconWether = document.getElementsByClassName('iconWether')
let par3 = document.getElementsByClassName('par3')
let par4 = document.getElementsByClassName('par4')
let par5 = document.getElementsByClassName('par5')
let searchWether = document.getElementById('searchWether')



let response;
let responseData;

let resultInp;


let days = [ 'sunday' , 'monday' , 'tuesday' , ' wenesday' , 'thursday' , 'friday' , 'satrday'];
let month = ['january' , 'febraury' , 'march' , 'april' , 'may' , 'june' ,'july' , 'august' ,'september' , 'october' , 'november' ,'desember']




async function wetherData (resultInp='cairo'){

     response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${resultInp}&days=3`)
     responseData = await response.json()
    console.log(responseData)
    displayWetherData()
    nextDayWether()
}

wetherData()

function displayWetherData(){
    let date = new Date();
    console.log(days[ date.getDay() ]);
    dayOfCard.innerHTML= days[ date.getDay() ];
    nameOfCard.innerHTML= responseData.location.name;
    threeOfCatd.innerHTML= ` ${responseData.current.temp_c}oC`;
    iconOfCard.setAttribute ( "src" ,` https:${responseData.current.condition.icon}`);
    fourOfCard.innerHTML=    responseData.current.condition.text;
    onee.innerHTML=responseData.current.humidity;
    twoo.innerHTML=responseData.current.wind_dir;
    threee.innerHTML=responseData.current.wind_kph;

  

}



function nextDayWether(){


    for(let i = 0 ; i<nextDay.length ; i++){

        nextDay[i].innerHTML= days[ new Date(responseData.forecast.forecastday[i+1].date ).getDay()]
        iconWether[i].setAttribute( "src" , ` https:${ responseData.forecast.forecastday[i+1].day.condition.icon }`)
        par3[i].innerHTML= responseData.forecast.forecastday[i+1].day.maxtemp_c
        par4[i].innerHTML= responseData.forecast.forecastday[i+1].day.mintemp_c
        par5[i].innerHTML= responseData.forecast.forecastday[i+1].day.condition.text
    }
}


searchWether.addEventListener("keyup" , function(){



 resultInp= searchWether.value
   console.log(resultInp)

//    wetherData(resultInp)
wetherData(resultInp)
})