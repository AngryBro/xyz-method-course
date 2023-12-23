import { Progress } from "./Progress"
import { Spoiler } from "./spoiler"
import "./css/Level.css"
import { Lock } from "./Lock"


const Button = ({opened, children, progress, locked}) => {
    return <div className="level-button">
        <div className="level-button-text-container">
            <div className="level-button-text">{children}</div>
            <div className={`level-button-bird ${opened?"__opened":""}`}></div>
        </div>
        {
            locked?
            <div className="level-button-locked">
                <Lock size={40} />
            </div>
            :
            <div className="level-button-progress">
                <Progress>{progress}</Progress>
            </div>
        }
    </div>
}

export const SubLevel = ({locked, done, children, onClick}) => {
    return <div className="level-sub-container" onClick={onClick}>
        <div className="level-sub-text">{children}</div>
        <div className="level-sub-status">
            {
                locked?
                <div className="level-sub-locked"><Lock size={25} /></div>
                :done?
                <div className="level-sub-done">&#10004;</div>
                :<></>
            }
        </div>
    </div>
}


export const Level = ({locked, progress = 0, children, name}) => {
    return <Spoiler margin={20}>
        <Button locked={locked} progress={progress} opened={false}>{name}</Button>
        <div className="level-sub-levels-container">
            {children}
        </div>
        <Button locked={locked} progress={progress} opened={true}>{name}</Button>

    </Spoiler>
}