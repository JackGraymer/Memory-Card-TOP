import { useState } from "react";
import './card.css'

function importAll(r){
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png||jpg||gif)$/))

//console.log(images)

export default function Card (){
    let cards = []
    for(let i=0; i<12; i++){
        //console.log('yeet')
        cards.push(i)        
    }
    
    //console.log(cards)
    cards.map((object => {
    }))
        return(
            <div className="cards">
                {images.map((object => 
                <div className="card" key={object}>
                    
                        <img src={object}></img>
                    <h4>{object[14] + object[15]} </h4>
                                        
                </div>
            ))}
            </div>
        )      
    }
    
