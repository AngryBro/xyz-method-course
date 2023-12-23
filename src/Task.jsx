import { Answer } from "./Answer"
import "./css/Task.css"

export const Task = ({children, onChange, correct, locked}) => {
    return <div className={`task-locked ${locked ? "__locked" : ""}`}>
        <div className="task-content">
            {children}
        </div>
        <div className="task-answer">
            <Answer disabled={correct || locked} onChange={onChange} correct={correct} />
        </div>
    </div>
}