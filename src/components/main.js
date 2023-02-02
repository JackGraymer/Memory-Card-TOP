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

    let shuffled = (e) => {
        let mix = [...state]
        mix = mix.sort(()=> Math.random() -0.5)
        mix = mix.sort(()=> Math.random() -0.5)
        mix = mix.sort(()=> Math.random() -0.5)
        setState(mix);
        
        (function changescore () {
            state.map((object) => {
                if(object.id == e.currentTarget.id && !object.clicked){
                    setScore((state.find(({id})=> id == object.id )).clicked = true)
                    setScore(score+1)
                    return
                }else if(object.id == e.currentTarget.id && object.clicked){
                    setScore(0)
                    mix.map((element) => {
                        element.clicked= false
                    });
                }
                
            })            
        })()
    }

    useEffect(()=> {
        if(best==12){
            alert('Finish!');
            window.location.reload()
        }
        if(score<best){
            return
        }
    
        setBest(score)
    },[score,best])

    return(
        <div className='main' /* onClick={changescore} */>
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