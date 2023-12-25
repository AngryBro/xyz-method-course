import { DATA } from "./DATA"
import { Title } from "./Title"
import { useLocation, useNavigate } from "./static-router"
import "./css/Lesson.css"
import { useEffect, useRef, useState } from "react"
import { Task } from "./Task"
import { Router } from "./Router"

export const Lesson = ({localData}) => {

    const nav = useNavigate()
    const id = useLocation().split("/")[2]
    const ids = id.split(".")
    const [theme, subTheme, lesson] = id.split(".")
    const data = DATA[ids[0]][ids[1]][ids[2]]
    const container = useRef()
    //eslint-disable-next-line
    const [playerWidth, setPlayerWidth] = useState(0);
    useEffect(() => {
        if(container.current) {
            setPlayerWidth(container.current.clientWidth)
        }
    }, [container])


    const check = (e, task) => {
        if(e.target.value === task.props.answer) {
            let finished = localData.next()
            if(finished) {
                setTimeout(() => nav("/"), 1000)
            }
        }
    }

    const displayAnswer = (i) => {
        return (localData.nextLesson(theme, subTheme, lesson) !== undefined && localData.unlockedLesson(localData.nextLesson(theme, subTheme, lesson))) ||
            (i + 1 < data.tasks.length && unlockedTask(i + 1)) || localData.finished
    }

    const unlockedTask = (i) => localData.unlockedTask(theme, subTheme, lesson, i)

    const video = data.video === undefined?`https://www.youtube.com/embed/dQw4w9WgXcQ?si=3OX__9rbC9Rjp3xl`:data.video

    const nextHidden = localData.nextLesson(theme, subTheme, lesson) === undefined || !localData.unlockedLesson(localData.nextLesson(theme, subTheme, lesson))
    
    const oneTask = DATA[theme][subTheme][lesson].tasks.length === 1

    return <div ref={container}>
        <Title>{[subTheme, lesson].join(".")}. {data.name}</Title>
        <div className="lesson-router-container">
            <Router path={{theme, subTheme, lesson}} />
        </div>
        <div className="lesson-title">Лекция</div>
        <iframe width={playerWidth} height={playerWidth * 720/1280} src={video} title="YouTube video player" allowFullScreen></iframe>
        <div className="lesson-title">Конспект</div>
        <div className="lesson-conspect">
            {data.conspect}
        </div>
        <div className="lesson-title">Задач{oneTask?"а":"и"}</div>
        <div className="lesson-tasks">
            {
                data.tasks.map((task, i) =>
                    <div key={i} className="lesson-task-container">
                        <div hidden={oneTask} className="lesson-task-number">{i+1}.</div>
                        <Task locked={!unlockedTask(i)} correct={displayAnswer(i) ? task.props.answer : false} onChange={e => check(e, task)}>
                            {task}
                        </Task>
                    </div>
                )
            }
        </div>
        <div hidden={nextHidden} className="lesson-next-container">
            <div hidden={nextHidden} className="lesson-next" onClick={() => nav(`/lesson/${localData.nextLesson(theme, subTheme, lesson)}`)}>Далее</div>
        </div>
    </div>
}