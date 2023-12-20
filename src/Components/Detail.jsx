import React from 'react'

const Detail = (props) => {
  return (
    <div>
      <p className="success">
      Name:{props.name}<br/>
      Address:{props.address}<br/>
      Age:{props.age}
      </p>
    </div>
  )
}

export default Detail;