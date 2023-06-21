import {getWeatherData} from "./js/script";

export function setCheck(){


    document.getElementById('check').addEventListener('click',function (){
        const city=document.getElementById('city').value;
        getWeatherData(city)
    })

    document.getElementById('reset').addEventListener('click',function (){

        document.getElementById('city').value = '';
        document.getElementById('no').classList.add('d-none');
    })

}