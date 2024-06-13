import { DATA } from "./DATA"
import { Level, SubLevel } from "./Level"
import { Title } from "./Title"
import { useLocation, useNavigate } from "./static-router"
import "./css/Theme.css"
import { Router } from "./Router"

export const Theme = ({localData, tasksDone}) => {

    const theme = Number(useLocation().split("/")[1])

    const subKeys = (obj) => {
        let keys = []
        for(let key in obj) {
            if(!isNaN(key)) {
                keys.push(key)
            }
        }
        return keys
    }


    const nav = useNavigate()

    
    return <div>
        <Title>Тема {theme}. {DATA[theme].name}</Title>
        <div className="theme-router-container">
            <Router path={{theme}} />
        </div>
        <div className="theme-levels-container">
            {
                subKeys(DATA[theme]).map(subTheme => 
                    <div key={subTheme} className="theme-level-container">
                        <Level progress={tasksDone(theme, subTheme).progress} locked={localData.greater(theme, subTheme, 1, 0) === -1} name={`${subTheme}. ${DATA[theme][subTheme].name}`}>
                            {
                                subKeys(DATA[theme][subTheme]).map(lesson =>
                                    <SubLevel onClick={() => nav(`/lesson/${theme}.${subTheme}.${lesson}`)} locked={localData.greater(theme, subTheme, lesson, 0) === -1} done={localData.nextLesson(theme, subTheme, lesson) !== undefined ? localData.unlockedLesson(localData.nextLesson(theme, subTheme, lesson)) : localData.finished} key={lesson}>{subTheme}.{lesson}. {DATA[theme][subTheme][lesson].name}</SubLevel>    
                                )
                            }
                        </Level>
                    </div>    
                )
            }
        </div>
    </div>
}