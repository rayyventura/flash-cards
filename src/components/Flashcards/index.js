import "./style.css"
import {cards} from "../data"
import turn from "../../assets/turn.png"
import {useState} from "react"
import {status} from "../data"
import LearningStatus from "./LearningStatus"

function Flashcard({
    question, answer,counter,setCurrentCard,currentCard, setIncorrect,
    setRemember,incorrect,remember
 }) {
    const [rotate,setRotate]=useState(false);
    const [border,setBorder]=useState('');
 
    function rotateCard() {
        setRotate(true);
    }
   

    return(
        <article className={` ${border} ${rotate? 'flashcard rotate': 'flashcard'}`} data-identifier="flashcard">   
                <div className="counter" data-identifier="counter">{
                    counter}/8
                </div>
            <section className={rotate? "display-none":"question"}>
                    <p className='text-question'>{question}</p>
                <div className="turn-around">
                 <img src={turn} alt="" onClick={rotateCard} data-identifier="arrow"/>
                </div>
            </section>
            <section className={rotate? "answer":"display-none"}>
                <div className="title">
                    {question}
                </div>
                <div className="text-answer">
                    <p className='text-answer'>{answer}</p>
                </div>
                <div className="rewards">
                    {
                        status.map(s=>(
                            <LearningStatus 
                            {...s}
                            setBorder={setBorder}
                            border={border}
                            setCurrentCard={setCurrentCard}
                            currentCard={currentCard}
                            setRotate={setRotate}
                            setRemember={setRemember}
                            setIncorrect={setIncorrect}
                            remember={remember}
                            incorrec={incorrect}
                            />
                        ))
                    }
                </div>
            </section>
        </article>
    )
}

export default function Flashcards({initialize,setSuccessPage,setFailurePage,numberZap, setNumberMistakes}){
    const [currentCard,setCurrentCard]=useState(0);
    const [incorrect,setIncorrect]=useState(0);
    const [remember,setRemember]=useState(0);

    setNumberMistakes(numberZap - remember);
    
    if(currentCard >= (cards.length) && remember>=numberZap){
        setSuccessPage(true);
    }
    if(currentCard >= (cards.length) && remember<numberZap){
        setFailurePage(true)
    }

    return(
        
            <div className={initialize ? 'flashcards' : 'display-none'}>
            {
                cards.map((c,index) => {
                    return(
                        (index===currentCard) && <Flashcard 
                        question={c.card.question}
                        answer={c.card.answer}
                        counter={c.card.counter}
                        setCurrentCard={setCurrentCard}
                        currentCard={currentCard}
                        setIncorrect={setIncorrect}
                        setRemember={setRemember}
                        incorrect={incorrect}
                        remember={remember}

                        />) 
                        } )
            }
            </div>
       
    )
}