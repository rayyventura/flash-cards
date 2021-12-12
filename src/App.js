import {useState} from "react"
import Initial from "./components/Initial/";
import Flaschcards from "./components/Flashcards/";
import LogoMini from "./components/LogoMini/";
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";

export default function App (){
    const [ initialize, setInitialize] = useState(false);
    const [successPage,setSuccessPage]=useState(false);
    const [failurePage,setFailurePage]=useState(false);
    const [numberZap,setNumberZap]=useState(0);
    const [numberMistakes,setNumberMistakes]=useState(0)

    return(
        <>
        <Initial 
        initialize={initialize} 
        setInitialize={setInitialize}
        numberZap={numberZap}
        setNumberZap={setNumberZap}
        />

        <LogoMini 
        initialize={initialize}
        />
        
        <Flaschcards 
        initialize={initialize}
        setSuccessPage={setSuccessPage}
        setFailurePage={setFailurePage}
        numberZap={numberZap}
        setNumberMistakes={setNumberMistakes}
        />

        <SuccessPage 
        successPage={successPage}
        numberZap={numberZap}
        />

        <FailurePage
         failurePage={failurePage}
         numberMistakes={numberMistakes}
        />
       
        </>
    )
}