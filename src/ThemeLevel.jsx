import { Lock } from "./Lock"
import "./css/ThemeLevel.css"

export const ThemeLevel = ({children, progress, onClick}) => {



    return <div className="themelevel-container" onClick={onClick}>
        <div>{children}</div>
        {
            progress === null?
            <div className="themelevel-lock">
                <Lock color="white" size={20} />
            </div>
            :
            <div className="themelevel-progress">{Math.floor(progress)}%</div>
        }
    </div>
}