import { useState } from "react"
import "./css/Answer.css"


export const Answer = ({onChange, correct, disabled}) => {

   const [value, setValue] = useState("")


    const keyDownHandler = e => {
        if(e.key === "Enter") {
            e.target.blur();
        }
    }

    const handleBlur = (e) => {
        setResultDisplay(true)
        onChange(e)
    }

    const [resultDisplay, setResultDisplay] = useState(false)

    return <div className="answer-container">
        <div className="answer-text">Ответ:</div>
        <div className="answer-input">
            <input disabled={disabled} onFocus={() => setResultDisplay(false)} onBlur={handleBlur} onKeyDown={keyDownHandler} value={correct?correct:value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className={`answer-correct ${!resultDisplay || value === "" ? "__hidden": ""}`}>{correct?"Верно":"Не верно"}</div>
    </div>
}