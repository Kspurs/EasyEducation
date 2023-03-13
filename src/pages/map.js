import * as React from 'react'
const Search =()=>{
    let d;
    fetch("https:/api.map.baidu.com/place/v2/search?query=苏州相城区咖啡馆&output=json&ak=OO3OnnbVrc2PoWk7fOnyMutBvC4H58Fb",{mode:"no-cors",credentials:"omit"}).then(
            res => res.json()
    ).then(
        responsedata => console.log(responsedata)
    )
    return(
        <p>
        </p>
    )
}
export default Search