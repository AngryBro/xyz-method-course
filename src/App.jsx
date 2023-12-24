import { useMemo, useState } from "react"
import { Lesson } from "./Lesson"
import { Theme } from "./Theme"
import { Route, Routes } from "./static-router"
import { DATA } from "./DATA"
import { Test } from "./Test"
import { Main } from "./Main"


export const App = () => {

    const numValues = obj => {
        for(let i in obj) {
            obj[i] = Number(obj[i])
        }
        return obj
    }

    const [data, setData] = useState(localStorage.getItem("data") === null ?
        {
            theme: 1,
            subTheme: 1,
            lesson: 1,
            task: 0
        } : numValues(JSON.parse(localStorage.getItem("data"))))

    const reset = () => {
        const start = {
            theme: 1,
            subTheme: 1,
            lesson: 1,
            task: 0
        }
        let accept = window.confirm("Точно сбросить весь прогресс?")
        if(!accept) {
            return
        }
        setData(start)
        localStorage.setItem("data", JSON.stringify(start))
    }

    const subKeys = (obj) => {
        let keys = []
        for(let key in obj) {
            if(!isNaN(key)) {
                keys.push(key)
            }
        }
        return keys
    }


    const localData = useMemo(() => ({
        theme: data.theme,
        subTheme: data.subTheme,
        lesson: data.lesson,
        task: data.task,
        finished: !(data.theme in DATA),
        next: () => {
            let {theme, subTheme, lesson, task} = data
            let subThemes = subKeys(DATA[theme]).length
            let lessons = subKeys(DATA[theme][subTheme]).length
            let tasks = DATA[theme][subTheme][lesson].tasks.length
            task++
            if(task >= tasks) {
                task = 0
                lesson++
            }
            if(lesson > lessons) {
                lesson = 1
                subTheme++
            }
            if(subTheme > subThemes) {
                subTheme = 1
                theme++
            }
            let newData = {theme, subTheme, lesson, task}
            localStorage.setItem("data", JSON.stringify(newData))
            setData(newData)
            return !(theme in DATA)
        },
        nextLesson: (theme, subTheme, lesson) => {
            let themes = subKeys(DATA).length
            let subThemes = subKeys(DATA[theme]).length
            let lessons = subKeys(DATA[theme][subTheme]).length
            lesson++
            if(lesson > lessons) {
                lesson = 1
                subTheme++
            }
            if(subTheme > subThemes) {
                subTheme = 1
                theme++
            }
            if(theme > themes) {
                return undefined
            }
            return [theme, subTheme, lesson].join(".")
        },
        greater: (theme, subTheme, lesson, task) => {
            if(data.theme > theme) {
                return 1
            }
            if(data.theme < theme) {
                return -1
            }
            if(data.subTheme > subTheme) {
                return 1
            }
            if(data.subTheme < subTheme) {
                return -1
            }
            if(data.lesson > lesson) {
                return 1
            }
            if(data.lesson < lesson) {
                return -1
            }
            if(data.task > task) {
                return 1
            }
            if(data.task < task) {
                return -1
            }
            return 0
        },
        unlockedLesson: (theme_subTheme_lesson) => {
            const [theme, subTheme, lesson] = theme_subTheme_lesson.split(".").map(Number)
            if(theme < data.theme) {
                return true
            }
            if(theme > data.theme) {
                return false
            }
            if(subTheme < data.subTheme) {
                return true
            }
            if(subTheme > data.subTheme) {
                return false
            }
            return data.lesson >= lesson
        },
        unlockedTask: (theme, subTheme, lesson, i) => {
            if(theme < data.theme) {
                return true
            }
            if(theme > data.theme) {
                return false
            }
            if(subTheme < data.subTheme) {
                return true
            }
            if(subTheme > data.subTheme) {
                return false
            }
            if(lesson < data.lesson) {
                return true
            }
            if(lesson > data.lesson) {
                return false
            }
            return data.task >= i
            
        },
        

    }), [data])

    const tasksDone = (theme = undefined, subTheme = undefined) => {
        if(theme !== undefined) {
            theme = Number(theme)
        }
        if(subTheme !== undefined) {
            subTheme = Number(subTheme)
        }
        const tasksSubTheme = (t, st) => {
            let tasks = 0
            let done = 0
            let unlocked = false
            for(let lesson in DATA[t][st]) {
                lesson = Number(lesson)
                if(!isNaN(lesson) && "tasks" in DATA[t][st][lesson]) {
                    tasks += DATA[t][st][lesson].tasks.length
                    if(localData.greater(t, st, lesson, 0) >= 0) {
                        done += DATA[t][st][lesson].tasks.length
                        unlocked = true
                    }
                }
                if(lesson === localData.lesson && t === localData.theme && st === localData.subTheme) {
                    done -= DATA[t][st][lesson].tasks.length - localData.task
                }
            }
            return {done, tasks, progress: unlocked ? Math.round(100*done / tasks): null}
        }
        const tasksTheme = (t) => {
            let done = 0
            let tasks = 0
            let unlocked = false
            for(let subTheme in DATA[t]) {
                subTheme = Number(subTheme)
                if(!isNaN(subTheme)) {
                    let dt = tasksSubTheme(t, subTheme)
                    done += dt.done
                    tasks += dt.tasks
                    if(dt.progress !== null) {
                        unlocked = true
                    }
                }
            }
            return {done, tasks, progress: unlocked ? Math.round(100*done / tasks) : null}
        }
        if(theme === undefined && subTheme === undefined) {
            let tasks = 0
            let done = 0
            let unlocked = false
            for(let th in DATA) {
                th = Number(th)
                if(!isNaN(th)) {
                    let dt = tasksTheme(th)
                    tasks += dt.tasks
                    done += dt.done
                    if(dt.progress !== null) {
                        unlocked = true
                    }
                }
            }
            return {done, tasks, progress: unlocked ? Math.round(100*done / tasks) : null}
        }
        if(subTheme === undefined) {
            return tasksTheme(theme)
        }
        return tasksSubTheme(theme, subTheme)
    }


    return <div className="container">
        <Routes>
            <Route path="/" element={<Main reset={reset} tasksDone={tasksDone} lastLesson={`${localData.theme}.${localData.subTheme}.${localData.lesson}`} />} />
            <Route path="/*" element={<Theme localData={localData} tasksDone={tasksDone} />} />
            <Route path="/lesson/*" element={<Lesson localData={localData} />} />
            <Route path="/les" element={<Test/>} />
        </Routes>
        <div className="container-footer"></div>
    </div>
}