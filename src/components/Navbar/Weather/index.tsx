import styles from './Weather.module.scss';
import cloud from 'assets/cloud.svg';
import { useEffect, useState } from 'react';
import Loading from '../Loading';

export default function Weather() { 

    const [city, setCity] = useState<string>();
    const [temp, setTemp] = useState<number>();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;        
    
            setIsLoading(true);
            fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=bf0de12f9df4e3c21f2fb18a7606c041`)
            .then(res => res.json())
            .then(result => {
                const { main, name } = result;
                setCity(`${name}`)
                setTemp(Math.round(main.temp));
                setIsLoading(false);
            });
        }, locationNotPermitted()
        );
    }, [])

    function locationNotPermitted(): any {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Brasilia&units=metric&appid=bf0de12f9df4e3c21f2fb18a7606c041';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name } = data;
            setCity(`${name} - DF`);
            setTemp(Math.round(main.temp));
            setIsLoading(false);
            }
        )

    }

    return(
        <div className={styles.container} >
            { isLoading ? <Loading/> : 
            <>
            <h3>
                {city}
            </h3>
            <div className={styles.temp}>
                <img src={cloud} alt="Cloud" />
                <h2>
                    {temp}º
                </h2>
            </div>
            </>
            }
        </div>
    );
}