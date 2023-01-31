import { useEffect, useState } from "react";
import './card.css'

export default function Card (props){
    let cards = []
    for(let i=0; i<12; i++){
        cards.push(i)        
    }

    props.state.map((object => {
    }))
        return(
            <div className="cards">
                {props.state.map((object => 
                <div className="card" key={object.id} onClick={props.shuffle}>
                    
                        <img src={object.id} alt='food'></img>
                    {<h4>{object.id[14] + object.id[15]} </h4>}
                                        
                </div>
            ))}
            </div>
        )      
    }
    
