import { DATA } from "./DATA"
import { ThemeLevel } from "./ThemeLevel"
import { Title } from "./Title"
import "./css/Main.css"
import { useNavigate } from "./static-router"

export const Main = ({tasksDone, lastLesson, reset}) => {

    const nav = useNavigate()
    const progress = tasksDone().progress

    return <div className="main">
        <Title>Курс: Метод координат в стереометрии</Title>
        <p>
            Курс состоит из четырёх блоков:
        </p>
        <p>
            1. <span className="b">{DATA[1].name}</span>. В данном блоке происходит
            знакомство с понятием координат, точек и векторов, а также
            с их свойствами.
        </p>
        <p>
            2. <span className="b">{DATA[2].name}</span>. В данном блоке рассматривается решение типичных
            задач в координатах, которые применяются в задачах по стереометрии, а
            именно задачи на нахождение углов и расстояний.
        </p>
        <p>
            3. <span className="b">{DATA[3].name}</span>. В этом блоке рассматриваются способы введения системы координат
            в различные тела.
        </p>
        <p>
            4. <span className="b">{DATA[4].name}</span>. В заключительном блоке рассматривается решение стереометрических
            задач с применением метода координат.
        </p>
        <p>
            Один урок состоит из лекции, конспекта, задач.
            Если в ответе на задачу требуется несколько чисел (например координаты),
            то их следует писать через точку с запятой без скобок.
        </p>
        <div className="main-themes">
            <div className="main-themes-row">
                <ThemeLevel onClick={() => nav("/1")} progress={tasksDone(1).progress}>1. {DATA[1].name}</ThemeLevel>
                <ThemeLevel onClick={() => nav("/2")} progress={tasksDone(2).progress}>2. {DATA[2].name}</ThemeLevel>
            </div>
            <div className="main-themes-row">
                <ThemeLevel onClick={() => nav("/3")} progress={tasksDone(3).progress}>3. {DATA[3].name}</ThemeLevel>
                <ThemeLevel onClick={() => nav("/4")} progress={tasksDone(4).progress}>4. {DATA[4].name}</ThemeLevel>
            </div>
            <div onClick={() => progress === 100?reset():nav(`/lesson/${lastLesson}`)} className={`main-begin ${progress === 100 ? "__finished":""}`}>{progress === 0?"Начать":progress === 100?"Курс пройден!":`Продолжить (${progress}%)`}</div>
        </div>
    </div>
}