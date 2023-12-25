import { DATA } from "./DATA"
import "./css/Router.css"
import { useNavigate } from "./static-router"

export const Router = ({path}) => {

    const {theme, subTheme, lesson} = path


    const themeName = () => {
        if(theme === undefined) {
            return ""
        }
        return `${theme}. ${DATA[theme].name}`
    }

    const subThemeName = () => {
        if(subTheme === undefined) {
            return ""
        }
        return `${subTheme}. ${DATA[theme][subTheme].name}`
    }

    const lessonName = () => {
        if(lesson === undefined) {
            return ""
        }
        return `${lesson}. ${DATA[theme][subTheme][lesson].name}`
    }

    const nav = useNavigate()

    return <div className="router">
        <div onClick={() => nav("/")} className={theme === undefined ? "" : `u router-pointer`}>Главная</div>
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