document.addEventListener('DOMContentLoaded', () => {

    const getWeatherData = async () => {
        try{

            const response = await fetch('http://localhost:3000/weather-request');
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.error('Error fetching weather data:', error)
        }
    };
    getWeatherData();

    // setInterval(getWeatherData, 5 * 60 * 1000);
    setInterval(getWeatherData, 10000);
});