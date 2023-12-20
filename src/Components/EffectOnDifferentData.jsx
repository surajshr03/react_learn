import React from 'react'

const EffectOnDifferentData = () => {
      let name = "Suraj";
      let age = 22;
      let isMarried = false;
      // let favFood = ["yomari", "momo"];//array
      let favFood = [<div>Yomari</div>,<div>Momo</div>];//array lai <div></div> bata rakhney

      let info = { address: "pharping", fatherName: "raj" };

  return (
    <div>
      Name:{name}<br/>
      Age:{age}<br/>
      Are u married ? : {isMarried ? "Yes" : "No"}<br/>

      Favorite Foods: {favFood}<br/>

      Information : {info.address}

      



    </div>
  )
}

export default EffectOnDifferentData;