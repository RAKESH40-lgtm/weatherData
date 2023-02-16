import { useState } from "react"
import myStyle from './home.module.css'

const Home = () => {
    const [initialCity, setCity] = useState('')
    const [weatherData, setWeatherData] = useState({})
    const weatherForc = (e) => {
        setCity(e.target.value)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&APPID=0e0e0bed0da5bdeca52cdf68a78bff18`).then((res)=>{
            res.json()
        }).then((data) => {
            setWeatherData(data)
            if(data){
                setCity('')
            }
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    
    }
    console.log(weatherData)
    return (
        <>
            <div className={myStyle.main_container}>
                <main>
                    <div className={myStyle.search_bar}>
                        <input type="text" placeholder="search the location to check weather"
                            value={initialCity}
                            onChange={weatherForc}
                        />
                    </div>
                    {/* {weatherData!=="undefined" &&
                        <div className={myStyle.weatherLoc}>
                            <div className={myStyle.name}>{weatherData.name} {weatherData.sys.country}</div>
                            <div className={myStyle.temp}>{weatherData.main.temp}</div>
                            <div className={myStyle.main}>{weatherData.weather[0].main}</div>
                        </div>
                    } */}
                </main>
            </div>
        </>
    )
}
export default Home
