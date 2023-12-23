import { DATA } from "./DATA"
import { Title } from "./Title"
import { useLocation, useNavigate } from "./static-router"
import "./css/Lesson.css"
import { useEffect, useRef, useState } from "react"
import { Task } from "./Task"

export const Lesson = ({localData}) => {

    const id = useLocation().split("/")[2]
    const url = useLocation()
    const ids = id.split(".")
    const data = DATA[ids[0]][ids[1]][ids[2]]
    const container = useRef()
    //eslint-disable-next-line
    const [playerWidth, setPlayerWidth] = useState(0);
    useEffect(() => {
        if(container.current) {
            setPlayerWidth(container.current.clientWidth)
        }
    }, [container])

    const taskId = i => `${ids.join(".")}.${i + 1}`

    const check = (e, task) => {
        if(e.target.value === task.props.answer) {
            localData.set(localData.get + 1)
        }
    }

    const lastChar = s => s[s.length - 1]

    const nav = useNavigate()

    const nextHidden = localData.get >= DATA.ids.length - 1 || Number(lastChar(DATA.ids[localData.get ].split("."))) !== 1
    
    const nextLesson = () => {
        let current = lastChar(url.split("/")) + ".1"
        console.log(current)
        let flag = false
        for(let i = 0; i < DATA.ids.length; i++) {
            if(flag && lastChar(DATA.ids[i].split(".")) === "1") {
                return `/lesson/${DATA.ids[i].split(".").slice(0, -1).join(".")}`
            }
            if(current === DATA.ids[i]) {
                flag = true
            }
        }
        return ""
    }
    console.log(Number(lastChar(DATA.ids[localData.get + 1].split("."))))

    return <div ref={container}>
        <Title>{ids.slice(1).join(".")}. {data.name}</Title>
        <div className="lesson-title">Лекция</div>
        {/* <iframe width={playerWidth} height={playerWidth * 720/1280} src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=9vui1wxSbfrgvUWm" title="YouTube video player" allowFullScreen>
            
        </iframe> */}
        <div className="lesson-title">Конспект</div>
        <div className="lesson-title">Задачи</div>
        <div className="lesson-tasks">
            {
                data.tasks.map((task, i) =>
                    <div key={i} className="lesson-task-container">
                        <div className="lesson-task-number">{i+1}.</div>
                        <Task locked={DATA.ids.indexOf(taskId(i)) > localData.get} correct={DATA.ids.indexOf(taskId(i)) < localData.get ? task.props.answer : false} onChange={e => check(e, task)}>
                            {task}
                        </Task>
                    </div>
                )
            }
        </div>
        <div hidden={nextHidden} className="lesson-next-container">
            <div hidden={nextHidden} className="lesson-next" onClick={() => nav(nextLesson())}>Далее</div>
        </div>
    </div>
}