import React from 'react'
import axios from 'axios'

export default function Weather () {

    function handleResponse (response) {
        alert(`The weather in ${}`)
    }

    let apiKey= "34ae1065362d42545661451bda2b8a1f"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return (
       <div>



       </div>
    )
}

