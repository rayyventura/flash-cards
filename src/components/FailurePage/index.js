import React from 'react'
import "./style.css"
import Button from '../Button'

export default function FailurePage({failurePage,numberMistakes}) {
   
    return (
        
            <div className={failurePage? "failure": "display-none"}>
                <h1>Putz...  <span role="img" aria-label="sheep">🥺</span> </h1>
                <p>Você esqueceu {numberMistakes} flashcards...
                Não desanime! Na próxima você consegue!</p>
                <Button 
                action={"reload"}
                text={"Tentar Novamente"}/>
            </div>
        
    )
}
