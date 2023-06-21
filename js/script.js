
            const getWeatherData=(location)=>{
                const apiKey="6691bcfa7000bfe31321cda42ec69c38";
                const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`
                 axios.get (URL).then((response)=>{
                     document.getElementById('temp').innerHTML=response.data.main.temp+`°C`;
                     document.getElementById('cityName').innerHTML=response.data.name;
                     document.getElementById('humidity').innerHTML=response.data.main.humidity+`%`;
                     document.getElementById('wind').innerHTML=response.data.wind.speed+` KM/H`;
                     document.getElementById('deg').innerHTML=response.data.wind.deg+` °`;
                     document.getElementById('no').classList.remove('d-none');
                })

            }

            export {getWeatherData}