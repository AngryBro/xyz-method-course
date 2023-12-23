import { useEffect } from "react"
import "./css/Title.css"

export const Title = ({children}) => {

    useEffect(() => {
        document.title = Array.isArray(children)?children.join(""):children
    }, [children])

    return <div className="title">
        {children}
    </div>
}