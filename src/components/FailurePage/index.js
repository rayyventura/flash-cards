import React from 'react'
import "./style.css"
import Next from "../../assets/next.png"

export default function FailurePage({failurePage,numberMistakes}) {
   
    return (
        
            <div className={failurePage? "failure": "display-none"}>
                <h1>Putz...  <span role="img" aria-label="sheep">🥺</span> </h1>
                <p>Você esqueceu {numberMistakes} flashcards...
                Não desanime! Na próxima você consegue!</p>
                <div className="reload">
                    <button className="reload-button"  onClick={()=>window.location.reload(false)}> Tentar Novamente </button>
                    <img src={Next} alt="next-symbol" className="next-img"/>
               </div>
            </div>
        
    )
}
