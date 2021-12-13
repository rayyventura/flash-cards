import React from 'react'
import "./style.css"
import Button from '../Button'

export default function SuccessPage({successPage,numberZap}) {
    return (
       
            <div className={successPage? "success": "display-none"}>
                <h1>PARABÉNS! 🥳</h1>
                <p>Você conseguiu seus {numberZap} Zaps!</p>

                <Button 
                action={"reload"} 
                text={"Tentar Novamente"}
                />

            </div>
        
    )
}
