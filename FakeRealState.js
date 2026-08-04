import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(arr = placeholderPropertyObj){
    var message
    message = arr.map(ele=> {
         const {propertyLocation, priceGBP, roomsM2, comment, image} = ele
         return `<section class="card">
                    <img src="${image}"
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>$${priceGBP}</h3>
                        <p>${comment}</p>
                        <h3>${roomsM2.reduce((accumulator, currentValue)=> {
                            return accumulator + currentValue
                        },0)} m&sup2;</h3>
                    </div>
                </section>`
    }).join(' ')
    return message
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr)
