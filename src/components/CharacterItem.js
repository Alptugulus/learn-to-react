import React, { useState } from 'react'

export default function CharacterItem({ charcater, setfavorite,favorite}) {
    const [color,setColor] = useState("white")
    
 function handleClick() {

         setColor("red")
         setfavorite([...favorite,charcater])
 }

    return (

        <div style={{backgroundColor:color}} onClick={() => handleClick()} className='karakter'>
            {charcater.name}
            {charcater.type}
            {charcater.gender}
            {charcater.species}
            <img alt='' src={charcater.image} />
        </div>
    )

}
