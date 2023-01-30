import { useState } from "react";
import './card.css'
import img from './logo512.png'

/* function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {images[item.replace('./','')] = r(item);});
    return images
} */

function importAll(r){
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png||jpg||gif)$/))

//const images = importAll(require.context('./img', false, /\.(gif)$/))
console.log(images)

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
                <div className="card">
                    
                        <img src={object}></img>
                    <h4>{(object)} </h4>
                    
                    
                </div>
            ))}
            </div>

            
            
            
            
            
        )
        
    }
    
