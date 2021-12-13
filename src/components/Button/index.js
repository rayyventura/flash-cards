import React from 'react'
import Next from "../../assets/next.png"
import {practiceHtml} from "../data"
import {practiceReact} from "../data"
import {practiceJavascript} from "../data"
import "./style.css"

export default function Button({action,text,iniciateCard,setPickFlashcard}) {
    function verifyPickedCard() {
        switch(action){
            case "Praticar HTML":
            setPickFlashcard(practiceHtml);
            break;
            case "Praticar JavaScript":
            setPickFlashcard(practiceJavascript);
            break;
            case "Praticar React":
            setPickFlashcard(practiceReact);
            break;
            default:
            return;
        }
        
    }
    function pickCard() {   
        if(action==="reload"){
            window.location.reload(false)
        }else{
            iniciateCard(); 
            verifyPickedCard();
        }
    }
    return (
    <div className="start">
        <button className="start-button"  onClick={()=>pickCard()} data-identifier="start-zap-recall"> {text} </button>
        <img src={Next} alt="next-symbol" className="next-img"/>
   </div>
    )
}
