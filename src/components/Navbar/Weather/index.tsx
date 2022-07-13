import styles from './Weather.module.scss';
import cloud from 'assets/cloud.svg';
import { useEffect, useState } from 'react';

export default function Weather() { 

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Itaiopolis&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede";
    const [city, setCity] = useState<string>();
    const [temp, setTemp] = useState<number>();
    
    
    function fetchWeather(url: string) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, name } = data;
                setCity(name);
                setTemp(Math.round(main.temp));
                }
            )
    }

    return(
        <div className={styles.container} onLoad={()=> fetchWeather(url)} >
            <h3>
                {city} - SC
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