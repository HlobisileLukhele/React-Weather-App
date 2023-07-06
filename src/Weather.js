import React from 'react'


export default function Weather (props) {
return (
        <div  className="Weather">
           
            <form>
                <div classname="col-">
                <input type="search" placeholder="search for a city" className="form-control"
                />
                </div>
               <div classname="col-3">
               <input type="submit" value="search" className="btn btn-primary" w-100 />
               </div> 
            </form>

       <h3>
           New York
       </h3>
    <ul>
        <li> Monday 12:00 </li>
        <li> Mostly Sunny </li>
    </ul>

    <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"/>
            6 C
            </div>
            <div className="col-6">
                <li>Participation: 17%</li>
                <li>Humidity: 75%</li>
                <li>Wind: 13kmh</li>
             </div>   


    </div>
 <p> Developed by: Hlobisile lukhele 
  <a  href="https://github.com/HlobisileLukhele/Vanilla-Weather-App">Source Code</a></p>
  </div>
    )
}

