import React from 'react'

const Location = ({country, province, district, exactLocation}) => {

  return (
    <div>
      <p className="success">
            Country Name : {country}<br/>
            Province No : {province}<br/>
            District : {district}<br/>
            Exact Location : {exactLocation}<br/>
            
      </p>
    </div>
  )
}

export default Location;
