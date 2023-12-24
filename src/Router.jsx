import { DATA } from "./DATA"
import "./css/Router.css"
import { useNavigate } from "./static-router"

export const Router = ({path}) => {

    const {theme, subTheme, lesson} = path


    const themeName = () => {
        return `${theme}. ${DATA[theme].name}`
    }

    const subThemeName = () => {
        return `${subTheme}. ${DATA[theme][subTheme].name}`
    }

    const lessonName = () => {
        return `${lesson}. ${DATA[theme][subTheme][lesson].name}`
    }

    const nav = useNavigate()

    return <div className="router">
        <div onClick={() => nav("/")} className="u router-pointer">Главная</div>
        <div className="router-slash">/</div>
        <div onClick={() => subTheme === undefined?1:nav(`/${theme}`)} className={`${subTheme === undefined?"":"u router-pointer"}`}>{themeName()}</div>
        {
            subTheme === undefined?
            <></>:
            <>
                <div className={`router-slash`}>/</div>
                <div>{subThemeName()}</div>
            </>
        }
        {
            lesson === undefined?
            <></>:
            <>
                <div className="router-slash">/</div>
                <div>{lessonName()}</div>   
            </>
        }
    </div>
}