import * as React from 'react'
const Search =()=>{
    let d;
    fetch("https:/api.map.baidu.com/place/v2/search?query=苏州相城区咖啡馆&output=json&ak=OO3OnnbVrc2PoWk7fOnyMutBvC4H58Fb",{mode:"no-cors",credentials:"omit"}).then(
            res => console.log(res)
    ).then(
        responsedata => {
            d=responsedata
        }
    )
    fetch("https:/api.map.baidu.com/place/v2/search?query=苏州相城区咖啡馆&output=json&ak=78KGIdkPra58lY4dhfzmg1It7EOFo3Xq",{mode:"no-cors",credentials:"omit"}).then(
        res => console.log(res)
).then(
    responsedata => {
        d=responsedata
    }
)
    return(
        <p>
            console.log(d)
        </p>
    )
}
export default Search