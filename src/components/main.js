import { useEffect, useState } from 'react'
import Card from './card'
import './card.css'

function importAll(r){
    return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png||jpg||gif)$/))
const deck = images.map(img => ({id:img, clicked:false}))

export default function Main () {
    const[score, setScore] = useState(0)
    const [best, setBest] = useState(score)

    const [state, setState] = useState(deck)
    console.log(state)

    let shuffled = (e) => {
        let mix = [...state]
        mix = mix.sort(()=> Math.random() -0.5)
        mix = mix.sort(()=> Math.random() -0.5)
        mix = mix.sort(()=> Math.random() -0.5)
        setState(mix);
    }

    let changescore =() =>{
        
        setScore(score+1) 
        
    }


    return(
        <div className='main' onClick={() =>changescore()}>
            <div className='top'>
                <h2>Score: {score}</h2>
                <h2>Best Score: {best}</h2>
            </div>
            <div className='center' >
                <Card shuffle={shuffled} state={state}></Card>
            </div>
      </div>
    )
}