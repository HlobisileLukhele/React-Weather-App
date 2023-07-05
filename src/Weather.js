import React from 'react'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

export default function Weather (props) {

    function handleResponse (response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
    }

    let apiKey= "34ae1065362d42545661451bda2b8a1f"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return (
        <div>
       <h3 className="weather">
            Hello react weather 
       </h3>

       <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
  Developed by: Hlobisile lukhele 
  <a  href="https://github.com/HlobisileLukhele/Vanilla-Weather-App">Source Code</a>
  </div>
    )
}

