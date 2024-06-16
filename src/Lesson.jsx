import { DATA } from "./DATA"
import { Title } from "./Title"
import { useLocation, useNavigate } from "./static-router"
import "./css/Lesson.css"
import { useEffect, useRef, useState } from "react"
import { Task } from "./Task"
import { Router } from "./Router"
const slidesImport = require.context('./slides', true);
const slidesAll = slidesImport.keys().map(image => slidesImport(image));


export const Lesson = ({localData}) => {

    const nav = useNavigate()
    const id = useLocation().split("/")[2]
    const ids = id.split(".")
    const [theme, subTheme, lesson] = ids
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
        const TYPES = {
            NUMBER: "number",
            EQUATION: "equation",
            VECTOR: "vector"
        }
        const answerType = (ans) => {
            for(let i = 0; i < ans.length; i++) {
                if("xyz".includes(ans[i])) {
                    return TYPES.EQUATION
                }
            }
            if("({".includes(ans[0]) && "})".includes(ans[ans.length - 1])) {
                return TYPES.VECTOR
            }
            return TYPES.NUMBER
        }
        const action = (correct) => {
            if(correct) {
                let finished = localData.next()
                if(finished) {
                    setTimeout(() => {
                        // nav("/")
                    }, 3000)
                }
            }
        }
        const checkNumber = (ans, correctAns) => {
            const standardizeOperators = raw => {
                raw = raw.replace(/ /g, "")
                const digits = "0123456789,."
                let sqrt = ""
                let flag = false
                for(let i = 0; i < raw.length; i++) {
                    if(raw[i] === "√" && i < raw.length - 1 && raw[i + 1] !== "(") {
                        sqrt += (i > 0 && digits.includes(raw[i - 1]) ? "*" : "") + "√("
                        flag = true
                    }
                    else if(i > 0 && raw[i] === "√" && digits.includes(raw[i - 1])) {
                        sqrt += "*√"
                    }
                    else if(!digits.includes(raw[i]) && flag) {
                        sqrt += `)${raw[i]}`
                        flag = false
                    }
                    else {
                        sqrt += raw[i]
                    }
                }
                if(flag) {
                    sqrt += ")"
                }
                return sqrt.replace(/sqrt|√/g, "Math.sqrt")
                        .replace(/:/g, "/")
                        .replace(/arcsin/g, "Math.asin")
                        .replace(/arccos/g, "Math.acos")
                        .replace(/arctg/g, "Math.atan")
                        .replace(/,/g, ".")
                        .replace(/pi/g, "Math.PI")
            }
            ans = standardizeOperators(ans)
            correctAns = standardizeOperators(correctAns)
            let evalAns, evalCorrect
            try {
                // eslint-disable-next-line
                evalAns = eval(ans)
            }
            catch(error) {
                evalAns = 0
            }
            try {
                // eslint-disable-next-line
                evalCorrect = eval(correctAns)
            }
            catch(error) {
                evalCorrect = 1
            }
            return Math.round(evalAns * 1000) === Math.round(evalCorrect * 1000)
        }
        const checkVector = (ans, correctAns) => {
            const normalize = vec => {
                vec = vec.replace(/\{|\}/g, "").replace(/\./g, ",").trim()
                if(vec[0] === "(") {
                    vec = vec.slice(1)
                }
                if(vec[vec.length - 1] === ")" && vec.split(")").length !== vec.split("(").length) {
                    vec = vec.slice(0, -1)
                }
                return vec.split(vec.includes(";") ? ";" : " ").filter(e => e.length > 0)
            }
            ans = normalize(ans)
            correctAns = normalize(correctAns)
            if(ans.length !== correctAns.length) {
                return false
            }
            for(let i = 0; i < ans.length; i++) {
                if(!checkNumber(ans[i], correctAns[i])) {
                    console.log(ans[i], correctAns[i])
                    return false
                }
            }
            return true
        }

        const checkEquation = (ans, correctAns) => {
            const normalize = eq => {
                eq = eq.split("=")[0].replace(/ /g, "").trim()
                const beforeVar = (eq, vr) => {
                    const digits = "0123456789"
                    const i = eq.indexOf(vr)
                    if(i > 0 && digits.includes(eq[i - 1])) {
                        eq = eq.replace(vr, `*${vr}`)
                    }
                    return eq.replace(vr, `(${vr})`)
                }
                for(let i = 0; i < 3; i++) {
                    eq = beforeVar(eq, "xyz"[i])
                }
                return eq
            }
            ans = normalize(ans)
            correctAns = normalize(correctAns)
            for(let x = -5; x <= 5; x++) {
                for(let y = -5; y <= 5; y++) {
                    for(let z = -5; z <= 5; z++) {
                        const left = ans.replace("x", x)
                                    .replace("y", y)
                                    .replace("z", z)
                        const leftCorrect = correctAns.replace("x", x)
                                    .replace("y", y)
                                    .replace("z", z)
                        if(!checkNumber(left, leftCorrect)) {
                            return false
                        }
                    }
                }
            }
            return true
        }

        const checkDifferentTypes = (ans, correctAns) => {
            const type = answerType(correctAns)
            switch(type) {
                case TYPES.NUMBER: return checkNumber(ans, correctAns)
                case TYPES.VECTOR: return checkVector(ans, correctAns)
                case TYPES.EQUATION: return checkEquation(ans, correctAns)
                default: return false
            }
        }

        const correctAns = task.props.answer
        const ans = e.target.value
        action(checkDifferentTypes(ans, correctAns))
    }


    const displayAnswer = (i) => {
        return (localData.nextLesson(theme, subTheme, lesson) !== undefined && localData.unlockedLesson(localData.nextLesson(theme, subTheme, lesson))) ||
            (i + 1 < data.tasks.length && unlockedTask(i + 1)) || localData.finished
    }

    const unlockedTask = (i) => localData.unlockedTask(theme, subTheme, lesson, i)

    const video = data.video === undefined?`https://www.youtube.com/embed/dQw4w9WgXcQ?si=3OX__9rbC9Rjp3xl`:data.video

    const nextHidden = localData.nextLesson(theme, subTheme, lesson) === undefined || !localData.unlockedLesson(localData.nextLesson(theme, subTheme, lesson))
    
    const oneTask = DATA[theme][subTheme][lesson].tasks.length === 1

    const slides = () => {
        let count = 0
        const maxSubTheme = 20
        for(let th = 1; th <= Number(theme); th++) {
            for(let subth = 1; subth < (String(th) === theme ? subTheme : maxSubTheme); subth++) {
                if(!(String(subth) in DATA[th])) break
                count += Object.keys((DATA[th][subth])).length - 1
            }
        }
        return slidesAll[count + Number(lesson - 1)]
    }

    const handleNext = () => {
        nav(`/lesson/${localData.nextLesson(theme, subTheme, lesson)}`)
        if(!localData.finished) {
            window.scrollTo({top:0, behavior:"smooth"})
        }
    }

    return <div ref={container}>
        <Title>{[subTheme, lesson].join(".")}. {data.name}</Title>
        <div className="lesson-router-container">
            <Router path={{theme, subTheme, lesson}} />
        </div>
        <div className="lesson-title">Лекция</div>
        <iframe width={playerWidth} height={playerWidth * 720/1280} src={video.replace("view?usp=drive_link", "preview")} title="YouTube video player" allowFullScreen></iframe>
        <div className="lesson-title">Конспект</div>
        <div className="lesson-conspect">
            <iframe width={"100%"} height={playerWidth * 720/1280} src={slides()} title="Slides"></iframe>
        </div>
        <div className="lesson-material">{data.material}</div>
        <div className={`lesson-title ${unlockedTask(0) ? "" : "__locked"}`}>Задач{oneTask?"а":"и"}</div>
        <div className="lesson-tasks">
            {
                data.tasks.map((task, i) =>
                    <div key={i} className="lesson-task-container">
                        <Task number={oneTask?undefined:i + 1} locked={!unlockedTask(i)} correct={displayAnswer(i) ? task.props.answer : false} onChange={e => check(e, task)}>
                            {task}
                        </Task>
                    </div>
                )
            }
        </div>
        <div className="lesson-next-container">
            <div className={`lesson-next ${nextHidden ? "__hidden":""}`} onClick={handleNext}>Далее</div>
            <div className={`lesson-next ${!localData.finished ? "__hidden":""}`} onClick={() => nav("/")}>На главную</div>
        </div>
        <div className="lesson-router-container">
            <Router path={{theme, subTheme, lesson}} />
        </div>
    </div>
}