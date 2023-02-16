import { useState } from "react"
import './home.css'
import axios from "axios"
const Home = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})
    //to work on this press enter to fetch data
    const weatherRep = (e) => {
        if (e.key === "Enter") {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0e0e0bed0da5bdeca52cdf68a78bff18`).then((data) => {
                let rep = data.data
                setWeather(rep)
                setCity('')
                // console.log(data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    // console.log(weather)
    return (
        <>
            <div className="container">
                <main>
                    <div className="input-field">
                        <input type="text" placeholder="search" value={city} onChange={(e) => {
                            setCity(e.target.value)
                        }}
                            onKeyDown={weatherRep}
                        />
                    </div>
                    {typeof weather !== "undefined" ? (
                        <div className="main">
                            <div className="weathname">
                                {weather["name"]},
                                {weather["country"]}
                            </div>
                            <div className="temp">
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="det">
                                {weather.weather[0]}
                            </div>
                        </div>
                    ) : "The city is not defined"}
                </main>
            </div>
        </>
    )
}
export default Home
