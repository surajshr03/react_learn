import React from 'react'

const Details1 = ({name,address,age}) => {
  return (
    <div>
      <p>
      Name:{name}<br/>
      Address:{address}<br/>
      Age:{age}
      </p>
    </div>
  )
}

export default Details1;