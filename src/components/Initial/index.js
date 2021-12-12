import "./style.css"
import Logo from "../../assets/logo.png"
import Next from "../../assets/next.png"
import { useState } from "react";


export default function Initial({initialize, setInitialize,setNumberZap,numberZap}){
    const [verifyNumberZap, setVerifyNumberZap]=useState(false);
    
    function iniciateCard(){
        if(numberZap<=0){
         setVerifyNumberZap(true);
        }else{
         setInitialize(true);
         setVerifyNumberZap(false);
        }

    }
   
    return(
        <div className={initialize? "display-none initial" : "initial"} >
            <figure>
               <img src={Logo} alt="" className="logo-img"/>
            </figure>
            <div className="input-number">
                <input type="number" min="1" placeholder="Sua meta de Zaps" onChange={(e)=>setNumberZap(e.target.value)}/>
                <p className={verifyNumberZap? "warn" : "display-none"}>Numero de Zaps deve no mínimo 1</p>
            </div>
            <div className="practice-react">
                <button className="practice-button" data-identifier="start-zap-recall" onClick={iniciateCard}> Praticar React </button>
                <img src={Next} alt="" className="next-img"/>
            </div>
        </div>
    )
}