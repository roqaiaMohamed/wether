let dayOfCard = document.getElementById('dayOfCard');
let nameOfCard = document.getElementById('nameOfCard');
let threeOfCatd = document.getElementById('threeOfCatd');
let iconOfCard = document.getElementById('iconOfCard');
let fourOfCard = document.getElementById('fourOfCard');
let onee = document.getElementById('onee');
let twoo = document.getElementById('twoo');
let threee = document.getElementById('threee');


let nextDay = document.getElementsByClassName('nextDay')

let iconWether = document.getElementsByClassName('iconWether')
let par3 = document.getElementsByClassName('par3')
let par4 = document.getElementsByClassName('par4')
let par5 = document.getElementsByClassName('par5')

let searchWether =document.getElementById('searchWether')


let response;
let resResponse;
let daate;

let elNahya;



let days = [ 'sunday' , 'monday' , 'tuesday' , ' wenesday' , 'thursday' , 'friday' , 'satrday'];


async function wetherDataOfcards(elNahya ="cairo"){

    response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${elNahya}&days=3`)
    resResponse = await response.json();
    console.log(resResponse)

    displayFirstCard()
    firstTwoCards()

}

wetherDataOfcards()



function displayFirstCard(){
    
    daate=new Date()
    console.log(days[daate.getDay()])

    dayOfCard.innerHTML=days[daate.getDay()]
    nameOfCard.innerHTML=resResponse.location.name
    threeOfCatd.innerHTML=resResponse.current.temp_c +'oC'
    iconOfCard.setAttribute("src" , `https:${resResponse.current.condition.icon}`)
    fourOfCard.innerHTML= resResponse.current.condition.text
    
    onee.innerHTML= resResponse.current.wind_dir
    twoo.innerHTML= resResponse.current.wind_kph
    threee.innerHTML= resResponse.current.humidity



}

function firstTwoCards(){


    for (let i=0 ; i<nextDay.length ; i++){


        nextDay[i].innerHTML= days [new Date(resResponse.forecast.forecastday[i+1].date).getDay()]
        iconWether[i].setAttribute("src" , `https:${resResponse.forecast.forecastday[i+1].day.condition.icon}`)
        par3[i].innerHTML=resResponse.forecast.forecastday[i+1].day.maxtemp_c
        par4[i].innerHTML=resResponse.forecast.forecastday[i+1].day.mintemp_c
        par5[i].innerHTML=resResponse.forecast.forecastday[i+1].day.condition.text
    }



}


searchWether.addEventListener("keyup" , function(){

    elNahya = searchWether.value

    wetherDataOfcards(elNahya)


})