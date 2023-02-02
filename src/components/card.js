import { useEffect, useState } from "react";
import './card.css'

export default function Card (props){
    let cards = []
    for(let i=0; i<12; i++){
        cards.push(i)        
    }
        
        return(
            <div className="cards">
                {props.state.map((object => 
                <div className="card" id={object.id} key={object.id} onClick={props.shuffle}>
                        <img src={object.id} alt='food'></img>
                    {<h4>{object.id.slice(14, -25)} </h4>}
                                        
                </div>
            ))}
            </div>
        )      
    }
    
