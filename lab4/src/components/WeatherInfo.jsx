import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function WeatherInfo({city}) {
    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {
        if (city) {
            fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=339b353a1b3a43dfb8e224241250109`)
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data);
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                });
        }
    }, [city]);


    return (   
        <>
            <Typography variant="h6" gutterBottom>
                {weatherData?.current?.temp_c} °C, {weatherData?.current?.condition?.text}, Feels Like {weatherData?.current?.feelslike_c} °C
            </Typography>
        </>
    )
}

export default WeatherInfo;