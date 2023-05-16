import React from "react"
import Reflv from "reflv";
const Playvideo=({isplaying})=>{
    if(isplaying)
    {
    return (
      <Reflv
      url='http://localhost:80/live?port=1935&app=myapp&stream=mystream'
      type="flv"
      isLive
      cors
      hasAudio={false}
    />
    )
    }
    return (
      null
    )
}
export default Playvideo