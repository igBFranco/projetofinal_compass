import styles from './Weather.module.scss';
import cloud from 'assets/cloud.svg';
import { useState } from 'react';

export default function Weather() { 

    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Itaiopolis&units=metric&appid=bf0de12f9df4e3c21f2fb18a7606c041";
    const [city, setCity] = useState<string>();
    const [temp, setTemp] = useState<number>();
    
    
    function fetchWeather() {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;        

            fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=bf0de12f9df4e3c21f2fb18a7606c041`)
            .then(res => res.json())
            .then(result => {
                const { main, name } = result;
                setCity(`${name} - SC`)
                setTemp(Math.round(main.temp));
            });
        });
    }

    return(
        <div className={styles.container} onLoad={()=> fetchWeather()} >
            <h3>
                {city}
            </h3>
            <div className={styles.temp}>
                <img src={cloud} alt="Cloud" />
                <h2>
                    {temp}º
                </h2>
            </div>
        </div>
    );
}