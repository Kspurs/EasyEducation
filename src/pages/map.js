import * as React from 'react'
const Search =()=>{
    let d;
    fetch("https:/api.map.baidu.com/place/v2/search?query=苏州相城区咖啡馆&region=苏州&output=json&ak=78KGIdkPra58lY4dhfzmg1It7EOFo3Xq",{mode:"cors",credentials:"omit"}).then(
            response => response.json()
    ).then(
        responsedata => console.log(responsedata)
    )
    return(
        <p>
        </p>
    )
}
export default Search