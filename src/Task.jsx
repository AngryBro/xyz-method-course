import { Answer } from "./Answer"
import "./css/Task.css"

export const Task = ({children, onChange, correct, locked, number}) => {
    return <div className={`task-container ${locked ? "__locked" : ""}`}>
        <div hidden={number === undefined} className="task-number">{number}.</div>
        <div className="task-locked">
            <div className="task-content">
                {children}
            </div>
            <div className="task-answer">
                <Answer disabled={correct || locked} onChange={onChange} correct={correct} />
            </div>
        </div>
    </div>
}