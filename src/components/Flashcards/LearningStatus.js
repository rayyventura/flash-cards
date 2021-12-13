

export default function LearningStatus({className,text,setBorder,border,setCurrentCard,currentCard,setRotate,setIncorrect,setRemember,incorrect,remember}) {
 
    
    function changeCards() {
        setCurrentCard(currentCard +1);
        setRotate(false);
    }
    function verifyAnswer() {
        if(border!==''){
            changeCards();
        }
        switch(className){
            case "just-learned" :
            setBorder("Black");
            break;
            case "dont-remember" :
            setBorder("Red");    
            break;
            case "remember" :
            setBorder("Green");
            break;
            case "really-remember" :
            setBorder("Yellow");
            setRemember(remember+1); 
            break;
            default:
            setBorder(border);
        }
        
        setTimeout(changeCards,1000);

    }
    return (
    
        <div className={className} onClick={()=>verifyAnswer()}>
            <p>{text}</p>
        </div>
   
    );
}
