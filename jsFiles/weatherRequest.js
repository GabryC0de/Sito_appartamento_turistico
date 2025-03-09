document.addEventListener('DOMContentLoaded', () => {

    const getWeatherData = async () => {
        try{
			let weatherIcon = document.querySelector('#weather-icon');
            let temperature = document.querySelector('#temp-text');
            const response = await fetch('/weather-request');
            const data = await response.json();
            weatherIcon.src = `./weatherIcons/${data.forecast.summary.symbol_code}.png`;
            temperature.textContent = `${data.weather.details.air_temperature}°C`;            
        }catch(error){
            console.error('Error fetching weather data:', error)
        }
    };
    getWeatherData();

    setInterval(getWeatherData, 5 * 60 * 1000);
    // setInterval(getWeatherData, 10000);
});