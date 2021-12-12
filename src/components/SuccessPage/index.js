import React from 'react'
import "./style.css"
import Next from "../../assets/next.png"

export default function SuccessPage({successPage,numberZap}) {
    return (
       
            <div className={successPage? "success": "display-none"}>
                <h1>PARABÉNS! 🥳</h1>
                <p>Você conseguiu seus {numberZap} Zaps!</p>

                <div className="reload">
                    <button className="reload-button"  onClick={()=>window.location.reload(false)}> Tentar Novamente </button>
                    <img src={Next} alt="next-symbol" className="next-img"/>
               </div>

            </div>
        
    )
}
