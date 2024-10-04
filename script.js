document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'f42e8d0135c5a6622d1ede1f30221b25';

    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-info').innerText = '';
                document.getElementById('error-message').innerText = `Error: ${data.error.info}`;
            } else {
                const weatherInfo = `City: ${data.location.name}, Temperature: ${data.current.temperature}°C, Weather: ${data.current.weather_descriptions[0]}`;
                document.getElementById('weather-info').innerText = weatherInfo;
                document.getElementById('error-message').innerText = '';
            }
        })
        .catch(error => {
            document.getElementById('weather-info').innerText = '';
            document.getElementById('error-message').innerText = 'An error occurred. Please try again.';
        });
});
