import "./style.css"
import Logo from "../../assets/logo.png"
import { useState } from "react";
import Button from "../Button";


export default function Initial({initialize, setInitialize,setNumberZap,numberZap,setPickFlashcard}){
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
            <Button 
            action={"Praticar HTML"}
            text={"Praticar HTML"}
            iniciateCard={iniciateCard}
            setPickFlashcard={setPickFlashcard}
            />
             <Button 
            action={"Praticar JavaScript"}
            text={"Praticar JavaScript"}
            iniciateCard={iniciateCard}
            setPickFlashcard={setPickFlashcard}
            />
             <Button 
            action={"Praticar React"}
            text={"Praticar React"}
            iniciateCard={iniciateCard}
            setPickFlashcard={setPickFlashcard}
            />
        </div>
    )
}